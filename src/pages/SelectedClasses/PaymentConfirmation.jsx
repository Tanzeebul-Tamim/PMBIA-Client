import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(`${import.meta.env.VITE_PAYMENT_GATEWAY_PK}`);
import "./CheckOutForm.css";
import { useLoaderData } from "react-router-dom";

const PaymentConfirmation = () => {
  const classItem = useLoaderData();

  return (
    <div className="flex justify-center">
      <div className="flex flex-col bg-base-100 w-[470px] p-4 rounded-2xl bg-opacity-70 description">
        <h1 className="z-[100] text-white text-2xl mb-3 tracking-[9px] text-center uppercase font-extrabold">
          Confirm Payment
        </h1>
        <div className="z-[100] flex-col-reverse gap-4 justify-between items-center flex text-xl">
          <div>
            <div className="z-50 flex items-center">
              <img src={classItem.classImage} className="w-full rounded-lg" />
            </div>
            <div className="my-3">
              <div className="z-50 flex items-center">
                <strong className="">Course :</strong>{" "}
                <div className=" ml-1">{classItem["class-name"]}</div>
              </div>
              <div className="z-50 flex items-center">
                <strong className="">Instructor :</strong>{" "}
                <div className=" ml-1">{classItem.instructorName}</div>
              </div>
              <div className="z-50 flex items-center">
                <strong className="">Price :</strong>{" "}
                <div className=" ml-1">{`$ ${classItem.classFee}`}</div>
              </div>
            </div>
            <div className="z-50 mt-3">
              <Elements stripe={stripePromise}>
                <CheckoutForm classItem={classItem}></CheckoutForm>
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
