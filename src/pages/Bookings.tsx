import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Car, Hotel, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Bookings = () => {
  const [bookingType, setBookingType] = useState<"hotel" | "cab">("hotel");
  const [showSummary, setShowSummary] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    destination: "",
    pickup: "",
    guests: "1",
  });
  const { toast } = useToast();

  const destinations = [
    "Taj Mahal, Agra",
    "Jaipur, Rajasthan",
    "Kerala Backwaters",
    "Goa Beaches",
    "Delhi",
    "Varanasi",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.destination) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    if (bookingType === "cab" && !formData.pickup) {
      toast({
        title: "Missing Information",
        description: "Please enter pickup location for cab booking",
        variant: "destructive",
      });
      return;
    }

    setShowSummary(true);
  };

  const confirmBooking = () => {
    toast({
      title: "Booking Confirmed! 🎉",
      description: "Your booking has been confirmed. We'll send you a confirmation email shortly.",
    });
    setShowSummary(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      destination: "",
      pickup: "",
      guests: "1",
    });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4">Book Your Experience</h1>
          <p className="text-xl text-muted-foreground">
            Reserve hotels and cabs for your India journey
          </p>
        </div>

        <Card className="shadow-lg-custom">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {bookingType === "hotel" ? (
                <Hotel className="h-5 w-5 text-primary" />
              ) : (
                <Car className="h-5 w-5 text-primary" />
              )}
              Booking Form
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Booking Type Selection */}
              <div className="grid grid-cols-2 gap-4">
                <Button
                  type="button"
                  variant={bookingType === "hotel" ? "default" : "outline"}
                  onClick={() => setBookingType("hotel")}
                  className="h-20"
                >
                  <div className="flex flex-col items-center gap-2">
                    <Hotel className="h-6 w-6" />
                    <span>Hotel</span>
                  </div>
                </Button>
                <Button
                  type="button"
                  variant={bookingType === "cab" ? "default" : "outline"}
                  onClick={() => setBookingType("cab")}
                  className="h-20"
                >
                  <div className="flex flex-col items-center gap-2">
                    <Car className="h-6 w-6" />
                    <span>Cab</span>
                  </div>
                </Button>
              </div>

              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 XXXXXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Booking Details */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Booking Details</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">
                      <Calendar className="h-4 w-4 inline mr-1" />
                      {bookingType === "hotel" ? "Check-in Date *" : "Pickup Date *"}
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests">
                      <Users className="h-4 w-4 inline mr-1" />
                      Number of {bookingType === "hotel" ? "Guests" : "Passengers"}
                    </Label>
                    <Select value={formData.guests} onValueChange={(value) => setFormData({ ...formData, guests: value })}>
                      <SelectTrigger id="guests">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? (bookingType === "hotel" ? "Guest" : "Passenger") : (bookingType === "hotel" ? "Guests" : "Passengers")}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {bookingType === "cab" && (
                  <div className="space-y-2">
                    <Label htmlFor="pickup">Pickup Location *</Label>
                    <Input
                      id="pickup"
                      placeholder="Enter pickup address"
                      value={formData.pickup}
                      onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                      required={bookingType === "cab"}
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="destination">
                    {bookingType === "hotel" ? "Destination *" : "Drop-off Location *"}
                  </Label>
                  <Select value={formData.destination} onValueChange={(value) => setFormData({ ...formData, destination: value })}>
                    <SelectTrigger id="destination">
                      <SelectValue placeholder="Select destination" />
                    </SelectTrigger>
                    <SelectContent>
                      {destinations.map((dest) => (
                        <SelectItem key={dest} value={dest}>
                          {dest}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button type="submit" className="w-full gradient-hero text-white" size="lg">
                Review Booking
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Booking Summary Dialog */}
        <Dialog open={showSummary} onOpenChange={setShowSummary}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Booking Summary</DialogTitle>
              <DialogDescription>
                Please review your booking details before confirming
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="flex justify-between">
                <span className="font-medium">Booking Type:</span>
                <span className="capitalize">{bookingType}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Name:</span>
                <span>{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Email:</span>
                <span>{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Phone:</span>
                <span>{formData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Date:</span>
                <span>{formData.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">{bookingType === "hotel" ? "Guests" : "Passengers"}:</span>
                <span>{formData.guests}</span>
              </div>
              {bookingType === "cab" && (
                <div className="flex justify-between">
                  <span className="font-medium">Pickup:</span>
                  <span>{formData.pickup}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="font-medium">Destination:</span>
                <span>{formData.destination}</span>
              </div>
              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  This is a demo booking. No actual reservation will be made.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setShowSummary(false)} className="flex-1">
                Edit Details
              </Button>
              <Button onClick={confirmBooking} className="flex-1 gradient-saffron text-white">
                Confirm Booking
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Bookings;
