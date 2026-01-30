// Simple validation utilities for edge functions
// Using basic validation since zod adds complexity for edge functions

export interface ValidationResult<T> {
  success: boolean;
  data?: T;
  error?: string;
}

/**
 * Validates email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 255;
}

/**
 * Validates phone number (allows international formats)
 */
export function isValidPhone(phone: string): boolean {
  // Remove all non-digit characters
  const digitsOnly = phone.replace(/\D/g, "");
  return digitsOnly.length >= 10 && digitsOnly.length <= 15;
}

/**
 * Validates date string format (YYYY-MM-DD)
 */
export function isValidDate(date: string): boolean {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(date)) return false;
  
  const parsed = Date.parse(date);
  return !isNaN(parsed);
}

/**
 * Validates a string is non-empty and within length limits
 */
export function isValidString(str: unknown, maxLength = 500): boolean {
  return typeof str === "string" && str.trim().length > 0 && str.length <= maxLength;
}

/**
 * Validates a positive number
 */
export function isPositiveNumber(num: unknown, max = 10000000): boolean {
  return typeof num === "number" && num > 0 && num <= max;
}

/**
 * Validates booking type
 */
export function isValidBookingType(type: unknown): type is "hotel" | "flight" | "cab" {
  return type === "hotel" || type === "flight" || type === "cab";
}

/**
 * Validates currency code
 */
export function isValidCurrency(currency: unknown): boolean {
  const validCurrencies = ["inr", "usd", "eur", "gbp", "INR", "USD", "EUR", "GBP"];
  return typeof currency === "string" && validCurrencies.includes(currency);
}

/**
 * Sanitizes a string by removing potentially dangerous characters
 */
export function sanitizeString(str: string): string {
  return str
    .replace(/[<>]/g, "") // Remove angle brackets to prevent HTML injection
    .trim()
    .slice(0, 500); // Limit length
}

/**
 * Validates an array of messages for chat
 */
export function validateChatMessages(messages: unknown): ValidationResult<Array<{ role: string; content: string }>> {
  if (!Array.isArray(messages)) {
    return { success: false, error: "Messages must be an array" };
  }
  
  if (messages.length === 0) {
    return { success: false, error: "Messages cannot be empty" };
  }
  
  if (messages.length > 50) {
    return { success: false, error: "Too many messages (max 50)" };
  }
  
  for (const msg of messages) {
    if (typeof msg !== "object" || msg === null) {
      return { success: false, error: "Invalid message format" };
    }
    if (!["user", "assistant", "system"].includes(msg.role)) {
      return { success: false, error: "Invalid message role" };
    }
    if (typeof msg.content !== "string" || msg.content.length > 10000) {
      return { success: false, error: "Invalid message content" };
    }
  }
  
  return { success: true, data: messages as Array<{ role: string; content: string }> };
}

/**
 * Validates translation request
 */
export function validateTranslateRequest(body: unknown): ValidationResult<{ text: string; targetLanguage: string }> {
  if (typeof body !== "object" || body === null) {
    return { success: false, error: "Invalid request body" };
  }
  
  const { text, targetLanguage } = body as Record<string, unknown>;
  
  if (typeof text !== "string" || text.length === 0) {
    return { success: false, error: "Text is required" };
  }
  
  if (text.length > 5000) {
    return { success: false, error: "Text too long (max 5000 characters)" };
  }
  
  if (typeof targetLanguage !== "string" || targetLanguage.length < 2 || targetLanguage.length > 5) {
    return { success: false, error: "Invalid target language" };
  }
  
  return { 
    success: true, 
    data: { text: sanitizeString(text), targetLanguage: targetLanguage.toLowerCase() } 
  };
}

/**
 * Validates hotel search request
 */
export function validateHotelSearchRequest(body: unknown): ValidationResult<{
  cityName: string;
  checkInDate: string;
  checkOutDate: string;
  adults: number;
  rooms: number;
}> {
  if (typeof body !== "object" || body === null) {
    return { success: false, error: "Invalid request body" };
  }
  
  const { cityName, checkInDate, checkOutDate, adults, rooms } = body as Record<string, unknown>;
  
  if (!isValidString(cityName, 100)) {
    return { success: false, error: "Invalid city name" };
  }
  
  if (typeof checkInDate !== "string" || !isValidDate(checkInDate)) {
    return { success: false, error: "Invalid check-in date" };
  }
  
  if (typeof checkOutDate !== "string" || !isValidDate(checkOutDate)) {
    return { success: false, error: "Invalid check-out date" };
  }
  
  const adultsNum = typeof adults === "number" ? adults : 2;
  const roomsNum = typeof rooms === "number" ? rooms : 1;
  
  if (adultsNum < 1 || adultsNum > 10) {
    return { success: false, error: "Adults must be between 1 and 10" };
  }
  
  if (roomsNum < 1 || roomsNum > 10) {
    return { success: false, error: "Rooms must be between 1 and 10" };
  }
  
  return {
    success: true,
    data: {
      cityName: sanitizeString(cityName as string),
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      adults: adultsNum,
      rooms: roomsNum,
    },
  };
}

/**
 * Validates flight search request
 */
export function validateFlightSearchRequest(body: unknown): ValidationResult<{
  origin: string;
  destination: string;
  departureDate: string;
  returnDate?: string;
  adults: number;
  travelClass: string;
}> {
  if (typeof body !== "object" || body === null) {
    return { success: false, error: "Invalid request body" };
  }
  
  const { origin, destination, departureDate, returnDate, adults, travelClass } = body as Record<string, unknown>;
  
  if (!isValidString(origin, 100)) {
    return { success: false, error: "Invalid origin" };
  }
  
  if (!isValidString(destination, 100)) {
    return { success: false, error: "Invalid destination" };
  }
  
  if (typeof departureDate !== "string" || !isValidDate(departureDate)) {
    return { success: false, error: "Invalid departure date" };
  }
  
  if (returnDate !== undefined && returnDate !== null && (typeof returnDate !== "string" || !isValidDate(returnDate))) {
    return { success: false, error: "Invalid return date" };
  }
  
  const adultsNum = typeof adults === "number" ? adults : 1;
  
  if (adultsNum < 1 || adultsNum > 9) {
    return { success: false, error: "Adults must be between 1 and 9" };
  }
  
  const validClasses = ["ECONOMY", "PREMIUM_ECONOMY", "BUSINESS", "FIRST"];
  const classStr = typeof travelClass === "string" ? travelClass.toUpperCase() : "ECONOMY";
  
  return {
    success: true,
    data: {
      origin: sanitizeString(origin as string),
      destination: sanitizeString(destination as string),
      departureDate: departureDate,
      returnDate: returnDate as string | undefined,
      adults: adultsNum,
      travelClass: validClasses.includes(classStr) ? classStr : "ECONOMY",
    },
  };
}

/**
 * Validates payment request
 */
export function validatePaymentRequest(body: unknown): ValidationResult<{
  amount: number;
  currency: string;
  bookingType: "hotel" | "flight" | "cab";
  bookingDetails: {
    name: string;
    email: string;
    destination: string;
    date: string;
    hotelName?: string;
    origin?: string;
    returnDate?: string;
  };
}> {
  if (typeof body !== "object" || body === null) {
    return { success: false, error: "Invalid request body" };
  }
  
  const { amount, currency, bookingType, bookingDetails } = body as Record<string, unknown>;
  
  if (!isPositiveNumber(amount, 10000000)) {
    return { success: false, error: "Invalid amount" };
  }
  
  if (!isValidBookingType(bookingType)) {
    return { success: false, error: "Invalid booking type" };
  }
  
  if (typeof bookingDetails !== "object" || bookingDetails === null) {
    return { success: false, error: "Invalid booking details" };
  }
  
  const details = bookingDetails as Record<string, unknown>;
  
  if (!isValidString(details.name, 100)) {
    return { success: false, error: "Invalid name" };
  }
  
  if (!isValidEmail(details.email as string)) {
    return { success: false, error: "Invalid email" };
  }
  
  if (!isValidString(details.destination, 100)) {
    return { success: false, error: "Invalid destination" };
  }
  
  if (!isValidString(details.date, 20)) {
    return { success: false, error: "Invalid date" };
  }
  
  return {
    success: true,
    data: {
      amount: amount as number,
      currency: typeof currency === "string" ? currency.toLowerCase() : "inr",
      bookingType: bookingType,
      bookingDetails: {
        name: sanitizeString(details.name as string),
        email: (details.email as string).toLowerCase().trim(),
        destination: sanitizeString(details.destination as string),
        date: details.date as string,
        hotelName: details.hotelName ? sanitizeString(details.hotelName as string) : undefined,
        origin: details.origin ? sanitizeString(details.origin as string) : undefined,
        returnDate: details.returnDate as string | undefined,
      },
    },
  };
}

/**
 * Validates booking email request
 */
export function validateBookingEmailRequest(body: unknown): ValidationResult<{
  userId?: string;
  name: string;
  email: string;
  bookingType: "hotel" | "cab" | "flight";
  bookingId: string;
  pnr?: string;
  destination: string;
  date: string;
  returnDate?: string;
  guests: string;
  hotel?: string;
  cabType?: string;
  pickup?: string;
  flightClass?: string;
  fare: number;
  taxes: number;
  total: number;
  notificationType?: string;
}> {
  if (typeof body !== "object" || body === null) {
    return { success: false, error: "Invalid request body" };
  }
  
  const b = body as Record<string, unknown>;
  
  if (!isValidEmail(b.email as string)) {
    return { success: false, error: "Invalid email" };
  }
  
  if (!isValidString(b.name, 100)) {
    return { success: false, error: "Invalid name" };
  }
  
  if (!isValidBookingType(b.bookingType)) {
    return { success: false, error: "Invalid booking type" };
  }
  
  if (!isValidString(b.bookingId, 50)) {
    return { success: false, error: "Invalid booking ID" };
  }
  
  if (!isPositiveNumber(b.fare) || !isPositiveNumber(b.taxes, 10000000) || !isPositiveNumber(b.total)) {
    return { success: false, error: "Invalid pricing" };
  }
  
  return {
    success: true,
    data: {
      userId: b.userId as string | undefined,
      name: sanitizeString(b.name as string),
      email: (b.email as string).toLowerCase().trim(),
      bookingType: b.bookingType as "hotel" | "cab" | "flight",
      bookingId: sanitizeString(b.bookingId as string),
      pnr: b.pnr ? sanitizeString(b.pnr as string) : undefined,
      destination: sanitizeString((b.destination as string) || ""),
      date: (b.date as string) || "",
      returnDate: b.returnDate as string | undefined,
      guests: sanitizeString((b.guests as string) || "1"),
      hotel: b.hotel ? sanitizeString(b.hotel as string) : undefined,
      cabType: b.cabType ? sanitizeString(b.cabType as string) : undefined,
      pickup: b.pickup ? sanitizeString(b.pickup as string) : undefined,
      flightClass: b.flightClass ? sanitizeString(b.flightClass as string) : undefined,
      fare: b.fare as number,
      taxes: (b.taxes as number) || 0,
      total: b.total as number,
      notificationType: b.notificationType as string | undefined,
    },
  };
}

/**
 * Validates SMS/WhatsApp request
 */
export function validateSmsRequest(body: unknown): ValidationResult<{
  phoneNumber: string;
  bookingType: "hotel" | "flight" | "cab";
  bookingDetails: Record<string, unknown>;
}> {
  if (typeof body !== "object" || body === null) {
    return { success: false, error: "Invalid request body" };
  }
  
  const { phoneNumber, bookingType, bookingDetails } = body as Record<string, unknown>;
  
  if (!isValidPhone(phoneNumber as string)) {
    return { success: false, error: "Invalid phone number" };
  }
  
  if (!isValidBookingType(bookingType)) {
    return { success: false, error: "Invalid booking type" };
  }
  
  if (typeof bookingDetails !== "object" || bookingDetails === null) {
    return { success: false, error: "Invalid booking details" };
  }
  
  return {
    success: true,
    data: {
      phoneNumber: (phoneNumber as string).replace(/[^\d+]/g, ""),
      bookingType: bookingType,
      bookingDetails: bookingDetails as Record<string, unknown>,
    },
  };
}

/**
 * Validates push notification request
 */
export function validatePushRequest(body: unknown): ValidationResult<{
  action?: "get-vapid-key" | "send";
  userId?: string;
  payload?: {
    title: string;
    body: string;
    icon?: string;
    badge?: string;
    tag?: string;
    data?: Record<string, unknown>;
    actions?: Array<{ action: string; title: string }>;
  };
  notificationType?: string;
}> {
  if (typeof body !== "object" || body === null) {
    return { success: false, error: "Invalid request body" };
  }
  
  const { action, userId, payload, notificationType } = body as Record<string, unknown>;
  
  if (action !== undefined && action !== "get-vapid-key" && action !== "send") {
    return { success: false, error: "Invalid action" };
  }
  
  if (action === "send") {
    if (typeof userId !== "string" || userId.length === 0) {
      return { success: false, error: "User ID required for send action" };
    }
    
    if (typeof payload !== "object" || payload === null) {
      return { success: false, error: "Payload required for send action" };
    }
    
    const p = payload as Record<string, unknown>;
    if (!isValidString(p.title, 100) || !isValidString(p.body, 500)) {
      return { success: false, error: "Invalid payload title or body" };
    }
  }
  
  return {
    success: true,
    data: {
      action: action as "get-vapid-key" | "send" | undefined,
      userId: userId as string | undefined,
      payload: payload as any,
      notificationType: notificationType as string | undefined,
    },
  };
}
