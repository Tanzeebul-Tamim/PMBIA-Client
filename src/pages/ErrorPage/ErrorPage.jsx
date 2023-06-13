import { Link, useRouteError } from "react-router-dom";
import useTitle from "../../Helmet/useTitle";

const ErrorPage = () => {
  const { error, statusText, status } = useRouteError();
  useTitle("| Page Not Found");
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.200), #0e0d0d), url('https://img.redbull.com/images/c_crop,x_0,y_0,h_2560,w_3840/c_fill,w_1680,h_1100/q_auto,f_auto/redbullcom/2022/12/8/z0l0aeamwiozihqcfaj5/fabio-wibmer-video-game')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="flex relative justify-center py-5 px-20 flex-col items-center"
    >
      <h1 className="absolute top-5 uppercase text-yellow-400 text-6xl font-bold mt-3">
        {status} {statusText}
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
