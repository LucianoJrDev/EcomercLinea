import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import CheckoutHeader from "../components/header/CheckoutHeader";
import Footer from "../components/footer/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import pantheonImage from "@/assets/pantheon.jpg";
import eclipseImage from "@/assets/eclipse.jpg";

const Checkout = () => {
  const [showDiscountInput, setShowDiscountInput] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [customerDetails, setCustomerDetails] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: ""
  });
  const [shippingOption, setShippingOption] = useState("standard");
  
  // Mock cart data - in a real app this would come from state management
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Pantheon Ring",
      price: "€2,450",
      quantity: 1,
      image: pantheonImage,
      size: "54 EU / 7 US"
    },
    {
      id: 2,
      name: "Eclipse Earrings", 
      price: "€1,850",
      quantity: 1,
      image: eclipseImage
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems(items => items.filter(item => item.id !== id));
    } else {
      setCartItems(items => 
        items.map(item => 
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const subtotal = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('€', '').replace(',', ''));
    return sum + (price * item.quantity);
  }, 0);

  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  const handleDiscountSubmit = () => {
    // Handle discount code submission
    console.log("Discount code submitted:", discountCode);
    setShowDiscountInput(false);
  };

  const handleCustomerDetailsChange = (field: string, value: string) => {
    setCustomerDetails(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <CheckoutHeader />
      
      <main className="pt-6 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl space-y-8">
            {/* Order Summary */}
            <div className="bg-muted/20 p-8 rounded-none">
              <h2 className="text-lg font-light text-foreground mb-6">Order Summary</h2>
              
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-20 h-20 bg-muted rounded-none overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-light text-foreground">{item.name}</h3>
                      {item.size && (
                        <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                      )}
                      
                      {/* Quantity controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 p-0 rounded-none border-muted-foreground/20"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-medium text-foreground min-w-[2ch] text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 p-0 rounded-none border-muted-foreground/20"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="text-foreground font-medium">
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>

              {/* Discount Code Section */}
              <div className="mt-8 pt-6 border-t border-muted-foreground/20">
                {!showDiscountInput ? (
                  <button 
                    onClick={() => setShowDiscountInput(true)}
                    className="text-sm text-foreground underline hover:no-underline transition-all"
                  >
                    Discount code
                  </button>
                ) : (
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <Input
                        type="text"
                        value={discountCode}
                        onChange={(e) => setDiscountCode(e.target.value)}
                        placeholder="Enter discount code"
                        className="flex-1 rounded-none"
                      />
                      <button 
                        onClick={handleDiscountSubmit}
                        className="text-sm text-foreground underline hover:no-underline transition-all px-2"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t border-muted-foreground/20 mt-4 pt-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">€{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-foreground">Free</span>
                </div>
                <div className="flex justify-between text-lg font-medium border-t border-muted-foreground/20 pt-3">
                  <span className="text-foreground">Total</span>
                  <span className="text-foreground">€{total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Customer Details Form */}
            <div className="bg-muted/20 p-8 rounded-none">
              <h2 className="text-lg font-light text-foreground mb-6">Customer Details</h2>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="email" className="text-sm font-light text-foreground">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={customerDetails.email}
                    onChange={(e) => handleCustomerDetailsChange("email", e.target.value)}
                    className="mt-2 rounded-none"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-light text-foreground">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={customerDetails.firstName}
                      onChange={(e) => handleCustomerDetailsChange("firstName", e.target.value)}
                      className="mt-2 rounded-none"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-light text-foreground">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={customerDetails.lastName}
                      onChange={(e) => handleCustomerDetailsChange("lastName", e.target.value)}
                      className="mt-2 rounded-none"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm font-light text-foreground">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={customerDetails.phone}
                    onChange={(e) => handleCustomerDetailsChange("phone", e.target.value)}
                    className="mt-2 rounded-none"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
            </div>

            {/* Shipping Options */}
            <div className="bg-muted/20 p-8 rounded-none">
              <h2 className="text-lg font-light text-foreground mb-6">Shipping Options</h2>
              
              <RadioGroup 
                value={shippingOption} 
                onValueChange={setShippingOption}
                className="space-y-4"
              >
                <div className="flex items-center justify-between p-4 border border-muted-foreground/20 rounded-none">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="standard" id="standard" />
                    <Label htmlFor="standard" className="font-light text-foreground">
                      Standard Shipping
                    </Label>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Free • 3-5 business days
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border border-muted-foreground/20 rounded-none">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="express" id="express" />
                    <Label htmlFor="express" className="font-light text-foreground">
                      Express Shipping
                    </Label>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    €15 • 1-2 business days
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border border-muted-foreground/20 rounded-none">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="overnight" id="overnight" />
                    <Label htmlFor="overnight" className="font-light text-foreground">
                      Overnight Delivery
                    </Label>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    €35 • Next business day
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;