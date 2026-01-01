import React, { useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface FormState {
  type: string;
}

interface ContactFormProps {
  initialState?: FormState;
}

// InputField component moved OUTSIDE to prevent re-creation on every render
const InputField = ({ 
  label, 
  id, 
  type = "text",
  value,
  onChange,
  onFocus,
  onBlur,
  focused
}: { 
  label: string; 
  id: string; 
  type?: string;
  value: string;
  onChange: (value: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  focused: boolean;
}) => {
  const hasValue = value;
  const isActive = focused || hasValue;
  
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        className={`w-full px-4 py-3 text-base bg-white border rounded-lg outline-none transition-all duration-200
          ${focused ? 'border-neutral-900 shadow-sm' : 'border-neutral-300 hover:border-neutral-400'}
        `}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 px-1 bg-white text-sm transition-all duration-200 pointer-events-none
          ${isActive ? 'top-0 -translate-y-1/2 text-xs' : 'top-1/2 -translate-y-1/2 text-base'}
          ${focused ? 'text-neutral-900' : 'text-neutral-500'}
        `}
      >
        {label}
      </label>
    </div>
  );
};

const ContactForm: React.FC<ContactFormProps> = ({ initialState }) => {
  const [focused, setFocused] = React.useState<string | null>(null);
  const [submitted, setSubmitted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [formValues, setFormValues] = React.useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    details: ''
  });
  
  const [formType] = React.useState<FormState>(initialState || { type: 'general' });

  const now = new Date();
  const [preferredDate, setPreferredDate] = React.useState<Date | null>(now);
  const [preferredTime, setPreferredTime] = React.useState<string>(`${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`);

  useEffect(() => {
    if (initialState) {
      setSubmitted(false);
    }
  }, [initialState]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      // Format date as YYYY-MM-DD
      const formattedDate = preferredDate
        ? preferredDate.toISOString().split('T')[0]
        : null;

      const { error: insertError } = await supabase
        .from('service_requests')
        .insert([
          {
            full_name: formValues.name,
            phone: formValues.phone,
            email: formValues.email,
            service_type: formValues.service,
            form_type: formType.type,
            preferred_date: formattedDate,
            preferred_time: preferredTime,
            details: formValues.details,
          },
        ]);

      if (insertError) {
        throw insertError;
      }

      setSubmitted(true);
      // Reset form
      setFormValues({ name: '', phone: '', email: '', service: '', details: '' });
      setPreferredDate(new Date());
      setPreferredTime(`${String(new Date().getHours()).padStart(2, '0')}:${String(new Date().getMinutes()).padStart(2, '0')}`);
      
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to submit form. Please try again.';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormValues(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-2xl">
        {submitted ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-neutral-900 text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="w-9 h-9" />
            </div>
            <h3 className="text-3xl font-semibold text-neutral-900 mb-3">Request Received</h3>
            <p className="text-lg text-neutral-600">A service coordinator will contact you within 15 minutes.</p>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="text-center sm:text-left">
              <h2 className="text-4xl sm:text-5xl font-semibold text-neutral-900 tracking-tight mb-3">Service Request</h2>
              <p className="text-lg text-neutral-600">Fill out the form below and we'll be in touch soon.</p>
            </div>

            <div className="space-y-6">
              {/* Full Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <InputField 
                  label="Full Name" 
                  id="name" 
                  type="text"
                  value={formValues.name}
                  onChange={(value) => handleInputChange('name', value)}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  focused={focused === 'name'}
                />
                <InputField 
                  label="Phone Number" 
                  id="phone" 
                  type="tel"
                  value={formValues.phone}
                  onChange={(value) => handleInputChange('phone', value)}
                  onFocus={() => setFocused('phone')}
                  onBlur={() => setFocused(null)}
                  focused={focused === 'phone'}
                />
              </div>

              {/* Email */}
              <InputField 
                label="Email Address" 
                id="email" 
                type="email"
                value={formValues.email}
                onChange={(value) => handleInputChange('email', value)}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
                focused={focused === 'email'}
              />

              {/* Service Type */}
              <div className="relative">
                <select
                  id="service"
                  required
                  value={formValues.service}
                  onChange={(e) => handleInputChange('service', e.target.value)}
                  onFocus={() => setFocused('service')}
                  onBlur={() => setFocused(null)}
                  className={`w-full px-4 py-3 text-base bg-white border rounded-lg outline-none transition-all duration-200 appearance-none cursor-pointer
                    ${focused === 'service' ? 'border-neutral-900 shadow-sm' : 'border-neutral-300 hover:border-neutral-400'}
                  `}
                >
                  <option value="" disabled hidden />
                  <option value="general">General Plumbing</option>
                  <option value="emergency">Emergency Service</option>
                  <option value="inspection">Inspection</option>
                  <option value="remodel">Remodel</option>
                  <option value="maintenance">Maintenance</option>
                </select>
                <label
                  htmlFor="service"
                  className={`absolute left-4 px-1 bg-white text-sm transition-all duration-200 pointer-events-none
                    ${focused === 'service' || formValues.service ? 'top-0 -translate-y-1/2 text-xs' : 'top-1/2 -translate-y-1/2 text-base'}
                    ${focused === 'service' ? 'text-neutral-900' : 'text-neutral-500'}
                  `}
                >
                  Service Type
                </label>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="relative">
                  <ReactDatePicker
                    selected={preferredDate}
                    onChange={(date: Date | null) => setPreferredDate(date)}
                    className="w-full px-4 py-3 text-base bg-white border border-neutral-300 hover:border-neutral-400 focus:border-neutral-900 focus:shadow-sm rounded-lg outline-none transition-all duration-200"
                    dateFormat="MMM d, yyyy"
                    placeholderText=" "
                  />
                  <label className="absolute left-4 top-0 -translate-y-1/2 px-1 bg-white text-xs text-neutral-600 pointer-events-none">
                    Preferred Date
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="time"
                    id="preferred_time"
                    required
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    onFocus={() => setFocused('time')}
                    onBlur={() => setFocused(null)}
                    className={`w-full px-4 py-3 text-base bg-white border rounded-lg outline-none transition-all duration-200
                      ${focused === 'time' ? 'border-neutral-900 shadow-sm' : 'border-neutral-300 hover:border-neutral-400'}
                    `}
                  />
                  <label
                    htmlFor="preferred_time"
                    className="absolute left-4 top-0 -translate-y-1/2 px-1 bg-white text-xs text-neutral-600 pointer-events-none"
                  >
                    Preferred Time
                  </label>
                </div>
              </div>

              {/* Project Details */}
              <div className="relative">
                <textarea
                  id="details"
                  required
                  value={formValues.details}
                  onChange={(e) => handleInputChange('details', e.target.value)}
                  onFocus={() => setFocused('details')}
                  onBlur={() => setFocused(null)}
                  rows={4}
                  className={`w-full px-4 py-3 text-base bg-white border rounded-lg outline-none transition-all duration-200 resize-none
                    ${focused === 'details' ? 'border-neutral-900 shadow-sm' : 'border-neutral-300 hover:border-neutral-400'}
                  `}
                />
                <label
                  htmlFor="details"
                  className={`absolute left-4 px-1 bg-white text-sm transition-all duration-200 pointer-events-none
                    ${focused === 'details' || formValues.details ? 'top-0 -translate-y-1/2 text-xs' : 'top-3 text-base'}
                    ${focused === 'details' ? 'text-neutral-900' : 'text-neutral-500'}
                  `}
                >
                  Project Details & Location
                </label>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full py-3 sm:py-4 bg-neutral-900 hover:bg-neutral-800 disabled:bg-neutral-600 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-all duration-200 active:scale-[0.98] mt-4"
              >
                {isLoading ? 'Submitting...' : 'Request Service'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;