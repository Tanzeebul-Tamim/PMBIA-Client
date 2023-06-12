import { Link, useRouteError } from "react-router-dom";
import useTitle from "../../Helmet/useTitle";

const ErrorPage = () => {
  const { error, statusText, status } = useRouteError();
  useTitle("| Error");
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.200), #0e0d0d), url('https://img.redbull.com/images/c_crop,x_0,y_64,h_1440,w_3200/c_fill,w_1680,h_780/q_auto,f_auto/redbullcom/2022/4/22/gsuzfhoej0lwercwcpay/crankworx-stop-2-whistler-brett-rheeder')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="flex relative justify-center py-5 px-20 flex-col items-center"
    >
      <h1 className="absolute top-5 uppercase text-yellow-400 text-6xl font-bold mt-3">
        &quot;{status} {statusText}&quot;
      </h1>
      <img
        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzMwNjMxMDY4MmZjNGQ3NmJlMDdkYjgxNmM2MjI2MWIxYjBiMDZlNSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/VqlV27H99BNBQXLOyL/giphy.gif"
        className="rounded-xl"
      />
      <p className="description text-white w-3/4 mb-4 mt-5 text-2xl text-center">
        Oops! Looks like you tried to land on a wrong trail. {error && error.message && `Because, ${error?.message}.`} Keep pedaling and stay tuned for our triumphant return!
      </p>
      <Link
        to="/"
        className="absolute bottom-40 description uppercase bg-yellow-500 text-xl p-3 text-white rounded-xl hover:bg-yellow-600 duration-150"
      >
        Back to Homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
