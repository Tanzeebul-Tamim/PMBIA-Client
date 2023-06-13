import { useState } from "react";
import { FaEyeSlash, FaEye, FaFacebookF, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useTitle from "../../../Helmet/useTitle";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [imageButtonText, setImageButtonText] = useState("Upload Image");

  useTitle("| Register");

  const handleImageButtonText = (image) => {
    setImageButtonText(image.name);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };
  return (
    <div
      className="min-h-screen pt-40 pb-24 lg:px-10 relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.600), rgba(0, 0, 0, 0.450)), url('https://img.redbull.com/images/c_crop,x_0,y_0,h_4128,w_8256/c_fill,w_1490,h_710/q_auto,f_auto/redbullcom/2022/6/21/fc9itii98dyr4imm5z1a/crankworx-stop-1-innsbruck-full-recap-program-szymon-godziek')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex items-center justify-center gap-20 flex-col lg:flex-row-reverse">
        <div className="z-10 text-center lg:text-left">
          <h1 className="text-5xl text-end font-bold title uppercase text-yellow-500">
            Register now!
          </h1>
          <p className="py-6 text-end description text-xl text-white">
            Create your account and become part of our vibrant mountain biking
            community. Whether you&apos;re a seasoned rider or just getting
            started, our registration page is your gateway to unlocking a world
            of exciting opportunities. Get ready to explore new trails,
            challenge yourself, and embrace the thrill of riding in breathtaking
            landscapes. Register now and let your MTB journey begin!
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="uppercase label-text font-bold tracking-widest text-white">
                  Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className="input input-bordered"
              />
            </div>
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
            <div className="form-control">
              <label className="label">
                <span className="uppercase label-text font-bold tracking-widest text-white">
                  Select User image
                </span>
              </label>
              <label>
                <input
                  onChange={(event) =>
                    handleImageButtonText(event.target.files[0])
                  }
                  type="file"
                  className="input input-bordered hidden"
                  hidden
                  accept="image/*"
                />
                <div className="btn btn-sm hover:bg-stone-700 bg-stone-800">
                  {imageButtonText}
                </div>
              </label>
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
                  top: "60%",
                  right: "10px",
                  cursor: "pointer",
                  fontSize: "20px",
                }}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <div className="z-[10] relative form-control">
              <label className="label">
                <span className="uppercase label-text font-bold tracking-widest text-white">
                  Confirm Password
                </span>
              </label>
              <input
                type={showPassword2 ? "text" : "password"}
                placeholder="Confirm your password"
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
                onClick={togglePasswordVisibility2}
              >
                {showPassword2 ? <FaEyeSlash /> : <FaEye />}
              </div>
              <label className="label">
                <Link to="/login" className="label-text-alt link link-hover">
                  Already have an account? Please{" "}
                  <span className="text-yellow-500">Login</span>
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
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute lg:bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-base-300"></div>
    </div>
  );
};

export default Register;
