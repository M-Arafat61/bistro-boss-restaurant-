import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosInstance from "../../../hooks/useAxiosInstance";
import useCart from "../../../hooks/useCart";
import useAuthContext from "../../../hooks/useAuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const [error, setError] = useState();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosInstance = useAxiosInstance();
  const [cart, refetch] = useCart();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosInstance
        .post("/create-payment-intent", {
          price: totalPrice,
        })
        .then(res => {
          // console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosInstance, totalPrice]);

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm Error", confirmError);
    } else {
      console.log("[payment-intent]", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);

        // save the payment info to db
        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(), // need to convert date (moment js)
          cartIds: cart.map(item => item._id),
          menuItemIds: cart.map(item => item.foodId),
          status: "pending",
        };
        const res = await axiosInstance.post("/payments", payment);
        refetch();
        if (res?.data?.paymentResult?.insertedId) {
          toast.success("Payment successful!");
        }
        navigate("/dashboard/paymentHistory");
      }
    }
  };
  return (
    <div>
      <form className='bg-extended-gold py-10 px-5 ' onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#000000",
                  backgroundColor: "white",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className='mt-5 bg-extended-yellow px-6 py-1 rounded-r-full text-white font-bold'
          type='submit'
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className='text-red-500 mt-2'>{error}</p>
        {transactionId && (
          <p className='text-white'>Your transaction id: {transactionId}</p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
