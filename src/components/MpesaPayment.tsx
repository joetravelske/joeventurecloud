import React, { useState } from 'react';

interface MpesaPaymentProps {
    amount: string;
    packageName: string;
    onSuccess?: () => void;
}

const MpesaPayment: React.FC<MpesaPaymentProps> = ({ amount, packageName, onSuccess }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleMpesaPayment = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Validate phone number
        const cleanPhone = phoneNumber.replace(/\s/g, '');
        if (!/^254\d{9}$/.test(cleanPhone) && !/^0\d{9}$/.test(cleanPhone)) {
            setError('Please enter a valid Kenyan phone number (e.g., 0712345678 or 254712345678)');
            setLoading(false);
            return;
        }

        try {
            // TODO: Implement actual M-Pesa Daraja API integration
            // This is a placeholder for now

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            alert(`M-Pesa STK Push sent to ${phoneNumber}!\n\nPlease check your phone and enter your M-Pesa PIN to complete the payment.\n\nNote: This is a demo. Actual M-Pesa integration requires Daraja API credentials.`);

            if (onSuccess) {
                onSuccess();
            }
        } catch (err) {
            setError('Failed to initiate M-Pesa payment. Please try again.');
            console.error('M-Pesa error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    M
                </div>
                <div>
                    <h3 className="font-bold text-lg">M-Pesa Payment</h3>
                    <p className="text-sm text-gray-600">Pay with M-Pesa (Kenya only)</p>
                </div>
            </div>

            <form onSubmit={handleMpesaPayment}>
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        M-Pesa Phone Number
                    </label>
                    <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="0712345678 or 254712345678"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                        Enter the phone number registered with M-Pesa
                    </p>
                </div>

                {error && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                        {error}
                    </div>
                )}

                <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600">Amount to pay:</span>
                        <span className="font-bold text-xl text-green-600">KES {amount}</span>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    {loading ? (
                        <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending STK Push...
                        </span>
                    ) : (
                        'Pay with M-Pesa'
                    )}
                </button>

                <p className="text-xs text-gray-500 mt-3 text-center">
                    You will receive a prompt on your phone to enter your M-Pesa PIN
                </p>
            </form>

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-xs text-yellow-800">
                    <strong>Note:</strong> M-Pesa integration requires Safaricom Daraja API credentials.
                    This is currently a demo interface. Contact us to set up M-Pesa payments.
                </p>
            </div>
        </div>
    );
};

export default MpesaPayment;
