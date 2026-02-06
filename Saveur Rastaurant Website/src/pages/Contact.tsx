import { useState, type FormEvent, type ChangeEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";

/**
 * Contact / Reservation Page
 * 
 * Demonstrates React concepts:
 * - Controlled components (form inputs)
 * - useState for form state management
 * - Event handlers (onChange, onSubmit)
 * - Form validation logic
 * - Conditional rendering based on form state
 */

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  notes: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  date?: string;
  time?: string;
  guests?: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "2",
  occasion: "",
  notes: "",
};

const Contact = () => {
  // Form state - controlled components
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation function
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Phone validation
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Date validation
    if (!formData.date) {
      newErrors.date = "Please select a date";
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = "Please select a future date";
      }
    }

    // Time validation
    if (!formData.time) {
      newErrors.time = "Please select a time";
    }

    // Guests validation
    const guestCount = parseInt(formData.guests);
    if (isNaN(guestCount) || guestCount < 1) {
      newErrors.guests = "Please select number of guests";
    } else if (guestCount > 12) {
      newErrors.guests = "For parties over 12, please call us";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes - controlled component pattern
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  // Reset form
  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent text-sm font-medium uppercase tracking-wider">
              Join Us
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-semibold mt-3 mb-4">
              Make a Reservation
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Reserve your table and experience an unforgettable evening at Saveur.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Reservation Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-2xl font-semibold mb-6">
                Reserve Your Table
              </h2>

              {/* Success State - Conditional Rendering */}
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-card border border-border rounded-xl p-8 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h3 className="font-display text-xl font-semibold mb-2">
                    Reservation Confirmed!
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Thank you, {formData.name}! We've sent a confirmation to {formData.email}.
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    {formData.guests} guests • {formData.date} at {formData.time}
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2 text-accent font-medium hover:underline"
                  >
                    Make Another Reservation
                  </button>
                </motion.div>
              ) : (
                /* Reservation Form - Controlled Components */
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={`w-full px-4 py-3 rounded-lg border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-colors ${
                        errors.name ? "border-destructive" : "border-border"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-destructive">{errors.name}</p>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-lg border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-colors ${
                          errors.email ? "border-destructive" : "border-border"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-destructive">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(212) 555-0123"
                        className={`w-full px-4 py-3 rounded-lg border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-colors ${
                          errors.phone ? "border-destructive" : "border-border"
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-destructive">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium mb-2">
                        Date *
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-colors ${
                          errors.date ? "border-destructive" : "border-border"
                        }`}
                      />
                      {errors.date && (
                        <p className="mt-1 text-sm text-destructive">{errors.date}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium mb-2">
                        Time *
                      </label>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-colors ${
                          errors.time ? "border-destructive" : "border-border"
                        }`}
                      >
                        <option value="">Select a time</option>
                        <option value="17:00">5:00 PM</option>
                        <option value="17:30">5:30 PM</option>
                        <option value="18:00">6:00 PM</option>
                        <option value="18:30">6:30 PM</option>
                        <option value="19:00">7:00 PM</option>
                        <option value="19:30">7:30 PM</option>
                        <option value="20:00">8:00 PM</option>
                        <option value="20:30">8:30 PM</option>
                        <option value="21:00">9:00 PM</option>
                      </select>
                      {errors.time && (
                        <p className="mt-1 text-sm text-destructive">{errors.time}</p>
                      )}
                    </div>
                  </div>

                  {/* Guests & Occasion */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="guests" className="block text-sm font-medium mb-2">
                        Number of Guests *
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-colors ${
                          errors.guests ? "border-destructive" : "border-border"
                        }`}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? "Guest" : "Guests"}
                          </option>
                        ))}
                      </select>
                      {errors.guests && (
                        <p className="mt-1 text-sm text-destructive">{errors.guests}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="occasion" className="block text-sm font-medium mb-2">
                        Occasion (Optional)
                      </label>
                      <select
                        id="occasion"
                        name="occasion"
                        value={formData.occasion}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                      >
                        <option value="">Select an occasion</option>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="date">Date Night</option>
                        <option value="business">Business Dinner</option>
                        <option value="celebration">Celebration</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium mb-2">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Dietary restrictions, seating preferences, allergies..."
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Confirming..." : "Confirm Reservation"}
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you agree to our reservation policy. 
                    A confirmation will be sent to your email.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-2xl font-semibold mb-6">
                Contact Information
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Address</h3>
                    <p className="text-muted-foreground text-sm">
                      123 Culinary Lane<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-muted-foreground text-sm">
                      (212) 555-0123
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm">
                      hello@saveur.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Hours</h3>
                    <div className="text-muted-foreground text-sm space-y-1">
                      <p>Mon - Thu: 5:00 PM - 10:00 PM</p>
                      <p>Fri - Sat: 5:00 PM - 11:00 PM</p>
                      <p>Sunday: 4:00 PM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-xl overflow-hidden shadow-medium">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop"
                  alt="Restaurant location map"
                  className="w-full h-64 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
