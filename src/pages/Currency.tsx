import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRightLeft, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Currency = () => {
  const [amount, setAmount] = useState("100");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>("");
  const { toast } = useToast();

  const currencies = [
    { code: "USD", name: "US Dollar", symbol: "$" },
    { code: "EUR", name: "Euro", symbol: "€" },
    { code: "GBP", name: "British Pound", symbol: "£" },
    { code: "JPY", name: "Japanese Yen", symbol: "¥" },
    { code: "AUD", name: "Australian Dollar", symbol: "A$" },
    { code: "CAD", name: "Canadian Dollar", symbol: "C$" },
    { code: "INR", name: "Indian Rupee", symbol: "₹" },
    { code: "CNY", name: "Chinese Yuan", symbol: "¥" },
  ];

  const convert = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid amount greater than 0",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
      );
      
      if (!response.ok) {
        throw new Error("Failed to fetch exchange rates");
      }

      const data = await response.json();
      setResult(data.rates[to]);
      setLastUpdated(new Date(data.date).toLocaleDateString());
      
      toast({
        title: "Conversion Successful",
        description: `${amount} ${from} = ${data.rates[to].toFixed(2)} ${to}`,
      });
    } catch (error) {
      toast({
        title: "Conversion Failed",
        description: "Unable to fetch exchange rates. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const swap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
    setResult(null);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4">Currency Converter</h1>
          <p className="text-xl text-muted-foreground">
            Get live exchange rates for Indian Rupee and major currencies
          </p>
        </div>

        <Card className="shadow-lg-custom">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Live Exchange Rates
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Amount Input */}
            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="text-lg"
              />
            </div>

            {/* Currency Selection */}
            <div className="grid md:grid-cols-3 gap-4 items-end">
              <div className="space-y-2">
                <Label htmlFor="from">From</Label>
                <Select value={from} onValueChange={setFrom}>
                  <SelectTrigger id="from">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {currencies.map((currency) => (
                      <SelectItem key={currency.code} value={currency.code}>
                        {currency.symbol} {currency.code} - {currency.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={swap}
                  className="rounded-full"
                >
                  <ArrowRightLeft className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-2">
                <Label htmlFor="to">To</Label>
                <Select value={to} onValueChange={setTo}>
                  <SelectTrigger id="to">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {currencies.map((currency) => (
                      <SelectItem key={currency.code} value={currency.code}>
                        {currency.symbol} {currency.code} - {currency.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Convert Button */}
            <Button
              onClick={convert}
              disabled={loading}
              className="w-full gradient-hero text-white"
              size="lg"
            >
              {loading ? "Converting..." : "Convert"}
            </Button>

            {/* Result */}
            {result !== null && (
              <div className="p-6 bg-muted rounded-lg text-center animate-in fade-in slide-in-from-bottom-3">
                <div className="text-sm text-muted-foreground mb-2">Converted Amount</div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {currencies.find((c) => c.code === to)?.symbol}
                  {result.toFixed(2)}
                </div>
                <div className="text-sm text-muted-foreground">
                  {amount} {from} = {result.toFixed(2)} {to}
                </div>
                {lastUpdated && (
                  <div className="text-xs text-muted-foreground mt-2">
                    Last updated: {lastUpdated}
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Popular Conversions */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Example Rates (1 INR)</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { code: "USD", rate: "0.012" },
              { code: "EUR", rate: "0.011" },
              { code: "GBP", rate: "0.0095" },
              { code: "JPY", rate: "1.85" },
            ].map((item) => (
              <Card key={item.code}>
                <CardContent className="p-4 text-center">
                  <div className="text-lg font-bold text-primary">
                    {currencies.find((c) => c.code === item.code)?.symbol}
                    {item.rate}
                  </div>
                  <div className="text-sm text-muted-foreground">{item.code}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currency;
