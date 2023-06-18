import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext } from "react";
import { useState } from "react";
import { BsFillCreditCardFill } from "react-icons/bs";
import { AuthContext } from "../../providers/AuthProvider";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { purchaseClass } from "../../api/bookApi";
import { toast } from "react-toastify";

const CheckoutForm = ({ classItem }) => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (classItem?.classFee) {
      fetch(`${import.meta.env.VITE_API_URL}/create-payment-intent`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ price: classItem?.classFee }),
      })
      .then(res => res.json())
      .then((data) => {
        console.log(data.clientSecret);
        setClientSecret(data.clientSecret);
      })
      .catch(err => console.error(err))
    }
  }, [classItem]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
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
      setCardError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

      if (confirmError) {
        console.log("[error]", confirmError);
        setCardError(confirmError.message);
      } else {
        console.log("[paymentIntent]", paymentIntent);
        if (paymentIntent.status === 'succeeded') {
          const paymentInfo = {
            transactionId: paymentIntent.id,
            date: new Date()
          }
          purchaseClass(classItem.studentId, classItem.instructorId, classItem.classIndex, paymentInfo);
          toast.success(`Enrolled in "${classItem["class-name"]}"`, {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          navigate('/dashboard/selected-classes');
        }
      }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <p
        className={`${cardError && "text-red-600"} ${
          cardError ? "visible" : "invisible"
        } mb-1`}
      >
        {cardError ? cardError : "a"}
      </p>
      <div className="flex justify-center mt-4 gap-5">
        <button
          className="btn text-md btn-sm text-white border-0 rounded-lg hover:bg-stone-700 bg-stone-800"
          type="submit"
          disabled={!stripe}
        >
          <BsFillCreditCardFill /> Pay $ {classItem.classFee}
        </button>
        <Link
          to="/dashboard/selected-classes"
        >
         <button className="btn text-md btn-sm text-white border-0 rounded-lg hover:bg-stone-700 bg-stone-800">
          Go Back
         </button>
        </Link>
      </div>
    </form>
  );
};

export default CheckoutForm;
