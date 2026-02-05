import React from 'react';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

interface PayPalButtonProps {
    amount: string;
    packageName: string;
    onSuccess?: (details: any) => void;
    onError?: (error: any) => void;
}

const PayPalButton: React.FC<PayPalButtonProps> = ({
    amount,
    packageName,
    onSuccess,
    onError
}) => {
    const initialOptions = {
        clientId: import.meta.env.PUBLIC_PAYPAL_CLIENT_ID || "test",
        currency: "USD",
        intent: "capture",
    };

    return (
        <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons
                style={{
                    layout: "vertical",
                    color: "gold",
                    shape: "rect",
                    label: "paypal",
                }}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                description: packageName,
                                amount: {
                                    value: amount,
                                },
                            },
                        ],
                    });
                }}
                onApprove={async (data, actions) => {
                    if (actions.order) {
                        const details = await actions.order.capture();
                        console.log("Payment successful:", details);
                        if (onSuccess) {
                            onSuccess(details);
                        } else {
                            // Redirect to success page
                            window.location.href = `/success?ref=${details.id}`;
                        }
                    }
                }}
                onError={(err) => {
                    console.error("PayPal error:", err);
                    if (onError) {
                        onError(err);
                    } else {
                        alert("Payment failed. Please try again or contact support.");
                    }
                }}
                onCancel={() => {
                    window.location.href = "/cancel";
                }}
            />
        </PayPalScriptProvider>
    );
};

export default PayPalButton;
