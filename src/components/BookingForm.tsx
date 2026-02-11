import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { supabase } from '../lib/supabase';
import { Calendar, Users, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

interface BookingFormProps {
    packageName: string;
    packageId: string;
}

type FormData = {
    full_name: string;
    email: string;
    phone: string;
    country: string;
    residency_status: string;
    adults: number;
    children: number;
    trip_type: string;
    accommodation_preference: string;
    travel_date: string;
    message: string;
};

export default function BookingForm({ packageName, packageId }: BookingFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        defaultValues: {
            adults: 2,
            children: 0,
            residency_status: 'Non-Resident',
            trip_type: 'Family',
            accommodation_preference: 'Mid-Range'
        }
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        try {
            const { error } = await supabase
                .from('bookings')
                .insert([
                    {
                        ...data,
                        package_id: packageId || packageName, // Fallback if no ID
                        status: 'pending',
                    },
                ]);

            if (error) throw error;

            setSubmitStatus('success');
            reset();
        } catch (error: any) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
            setErrorMessage(error.message || 'Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitStatus === 'success') {
        return (
            <div className="bg-green-50 rounded-2xl p-8 text-center border border-green-200 shadow-lg animate-fade-in-up">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
                <p className="text-gray-600 mb-6">
                    Thank you for your interest in the <strong>{packageName}</strong>.
                    Our team will review your details and send you a personalized quote shortly.
                </p>
                <button
                    onClick={() => setSubmitStatus('idle')}
                    className="bg-safari-green text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors"
                >
                    Submit Another Request
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100" id="booking-form">
            <div className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                    Request a Quote
                </h2>
                <p className="text-gray-600 text-sm">
                    Fill in your details below to get a custom quote for {packageName}.
                </p>
            </div>

            {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-red-700">
                        <p className="font-semibold">Submission failed</p>
                        <p>{errorMessage}</p>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Section 1: Personal Details */}
                <div className="space-y-4">
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">
                        Your Details
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                            <input
                                {...register('full_name', { required: 'Name is required' })}
                                type="text"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-safari-orange focus:border-transparent outline-none transition-all"
                                placeholder="John Doe"
                            />
                            {errors.full_name && <span className="text-red-500 text-xs mt-1">{errors.full_name.message}</span>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                            <input
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                                })}
                                type="email"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-safari-orange focus:border-transparent outline-none transition-all"
                                placeholder="john@example.com"
                            />
                            {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            <input
                                {...register('phone')}
                                type="tel"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-safari-orange focus:border-transparent outline-none transition-all"
                                placeholder="+1 234 567 8900"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Country of Residence *</label>
                            <input
                                {...register('country', { required: 'Country is required' })}
                                type="text"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-safari-orange focus:border-transparent outline-none transition-all"
                                placeholder="e.g. USA, Kenya, UK"
                            />
                            {errors.country && <span className="text-red-500 text-xs mt-1">{errors.country.message}</span>}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Residency Status *</label>
                        <div className="flex gap-4">
                            {['Non-Resident', 'Resident', 'Citizen'].map((status) => (
                                <label key={status} className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        {...register('residency_status')}
                                        type="radio"
                                        value={status}
                                        className="text-safari-orange focus:ring-safari-orange"
                                    />
                                    <span className="text-sm text-gray-600">{status}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Section 2: Trip Details */}
                <div className="space-y-4">
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2 pt-4">
                        Trip Details
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Proposed Travel Date</label>
                            <div className="relative">
                                <input
                                    {...register('travel_date')}
                                    type="date"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-safari-orange focus:border-transparent outline-none transition-all pl-10"
                                />
                                <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Trip Type</label>
                            <select
                                {...register('trip_type')}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-safari-orange focus:border-transparent outline-none transition-all bg-white"
                            >
                                <option value="Family">Family Safari</option>
                                <option value="Honeymoon">Honeymoon / Couple</option>
                                <option value="Solo">Solo Adventure</option>
                                <option value="Group">Group Friends</option>
                                <option value="Photography">Photography</option>
                                <option value="Luxury">Luxury</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Adults (12+ yrs)</label>
                            <div className="relative">
                                <input
                                    {...register('adults', { min: 1 })}
                                    type="number"
                                    min="1"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-safari-orange focus:border-transparent outline-none transition-all pl-10"
                                />
                                <Users className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Children (Under 12)</label>
                            <div className="relative">
                                <input
                                    {...register('children', { min: 0 })}
                                    type="number"
                                    min="0"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-safari-orange focus:border-transparent outline-none transition-all pl-10"
                                />
                                <Users className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Accommodation Preference</label>
                        <select
                            {...register('accommodation_preference')}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-safari-orange focus:border-transparent outline-none transition-all bg-white"
                        >
                            <option value="Budget">Budget (Basic Camping / Budget Hotels)</option>
                            <option value="Mid-Range">Mid-Range (Comfortable Lodges / Tented Camps)</option>
                            <option value="Luxury">Luxury (High-end Lodges / Luxury Camps)</option>
                        </select>
                    </div>
                </div>

                {/* Section 3: Message */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Additional Requirements / Message</label>
                    <textarea
                        {...register('message')}
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-safari-orange focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us about any specific interests, dietary requirements, or questions you have..."
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-safari-orange text-white py-4 rounded-xl font-bold hover:bg-orange-600 transition-all shadow-lg text-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending Request...
                        </>
                    ) : (
                        'Request Quote'
                    )}
                </button>

                <p className="text-xs text-center text-gray-500 mt-4">
                    By submitting this form, you agree to our privacy policy. Your details are secure and will only be used to contact you regarding this inquiry.
                </p>
            </form>
        </div>
    );
}
