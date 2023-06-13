import { useState } from "react";
import { FaEyeSlash, FaEye, FaFacebookF, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useTitle from "../../../Helmet/useTitle";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  useTitle("| Login");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div
      className="min-h-screen pt-40 pb-24 lg:px-10 relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.600), rgba(0, 0, 0, 0.450)), url('https://img.redbull.com/images/c_crop,x_0,y_64,h_1440,w_3200/c_fill,w_1680,h_780/q_auto,f_auto/redbullcom/2022/4/22/gsuzfhoej0lwercwcpay/crankworx-stop-2-whistler-brett-rheeder')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex items-center justify-center gap-20 flex-col lg:flex-row">
        <div className="z-10 text-center lg:text-left">
          <h1 className="text-5xl font-bold title uppercase text-yellow-500">
            Login now!
          </h1>
          <p className="py-6 description text-xl text-white">
            Gear up and get ready to embark on an exciting journey into the
            world of mountain biking. Join our vibrant community of riders,
            where you can connect, learn, and share your passion for this
            thrilling sport. Sign in to access exclusive features, personalized
            content, and connect with fellow riders from around the globe.
            Let&apos;s ride together and experience the thrill of conquering new
            trails, pushing your limits, and creating unforgettable memories.
            Log in now and let the adventure begin!
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="uppercase label-text font-bold tracking-widest text-white">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered"
              />
            </div>
            <div className="z-[10] relative form-control">
              <label className="label">
                <span className="uppercase label-text font-bold tracking-widest text-white">
                  Password
                </span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="input input-bordered"
              />
              <div
                style={{
                  position: "absolute",
                  top: "43%",
                  right: "10px",
                  cursor: "pointer",
                  fontSize: "20px",
                }}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
              <label className="label">
                <Link to="/register" className="label-text-alt link link-hover">
                  Don&apos; have an account? Please{" "}
                  <span className="text-yellow-500">Register</span>
                </Link>
              </label>
            </div>
            <div className="divider text-white">Or continue with</div>
            <div className="z-[10] justify-center gap-10 flex">
              <div className="hover:scale-110 btn hover:bg-stone-700 bg-stone-800 btn-circle">
                <FcGoogle className="text-2xl" />
              </div>
              <div className="hover:scale-110 btn hover:bg-stone-700 bg-stone-800 btn-circle">
                <FaFacebookF className="text-2xl text-[#1877F2]" />
              </div>
              <div className="hover:scale-110 btn hover:bg-stone-700 bg-stone-800 btn-circle">
                <FaGithub className="text-2xl" />
              </div>
            </div>
            <div className="z-[10] form-control mt-6">
              <button className="btn bg-yellow-500 hover:bg-yellow-600 text-white text-xl">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute lg:bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-base-300"></div>
    </div>
  );
};

export default Login;
