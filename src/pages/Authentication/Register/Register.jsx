import { useContext, useState } from "react";
import { FaEyeSlash, FaEye, FaFacebookF } from "react-icons/fa";
import useTitle from "../../../Helmet/useTitle";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-toastify";
import { TbFidgetSpinner } from "react-icons/tb";
import { saveUser, saveUserViaSocial } from "../../../api/authApi";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const { createUser, updateUser, setLoading, loading, logOut, googleSignIn, facebookSignIn } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [imageButtonText, setImageButtonText] = useState("Upload Image");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || localStorage.getItem('location') || '/';
  useTitle("| Register");

  const handleSelectGender = (event) => {
    const selectGender = event.target.value;
    setSelectedGender(selectGender);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const contactNo = form.contact.value;
    const address = form.address.value;
    const gender = selectedGender;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;

    if (image) {
      if (selectedGender === "Male" || selectedGender === "Female") {
        if (password === confirmPassword) {
          setError("");

          if (password.length < 6) {
            setError("Password must be at least 6 characters long!");
            return;
          } else if (!/(?=.*[A-Z])/.test(password)) {
            setError("Password must contain at least one uppercase letter");
            return;
          } else if (!/(?=.*\d)/.test(password)) {
            setError("Password must contain at least one digit");
            return;
          } else if (
            !/(?=.*[!@#$%^&*()_\-+={}[\]\\|:;"'<>,.?/~])/.test(password)
          ) {
            setError("Password must contain at least one special character");
            return;
          }

          fetch(url, {
            method: "POST",
            body: formData,
          })
            .then((res) => res.json())
            .then((imageData) => {
              const imageUrl = imageData.data.display_url;
              const user = {
                name,
                email,
                contactNo,
                address,
                gender,
                image: imageUrl,
              };

              createUser(email, password)
                .then(() => {
                  updateUser(name, imageUrl, contactNo)
                    .then(() => {
                      toast.success(
                        "Registration successful! You can now login.",
                        {
                          position: "top-center",
                          autoClose: 1100,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "dark",
                        }
                      );
                      saveUser(user);
                      logOut();
                      setSuccess("Registration Successful!");
                      setError("");
                      setTimeout(function () {
                        window.location.href = "/login";
                      }, 2000);
                    })
                    .catch((err) => {
                      setLoading(false);
                      console.error(err);
                    });
                })
                .catch((error) => {
                  console.error(error);
                  if (error.message.includes("email")) {
                    setError(
                      "This email is already in use. Please use a different email."
                    );
                    setSuccess("");
                  }
                  setLoading(false);
                });
            });
        }
        else {
          setError("Passwords do not match!");
          return;
        }
      }
      else if (!selectedGender && (!name || !email || !password || !confirmPassword)) {
        return;
      }
      else {
        setError("Please select a gender");
        return;
      }
    }
    else if (!image && (!name || !email || !password || !confirmPassword)) {
      return;
    }
    else {
      setError("Please select an image");
      return;
    }
  };

  const handleImageButtonText = (image) => {
    const imageName = image.name;
    if (imageName.length > 40) {
      setImageButtonText(`${image.name.slice(0, 22)} . . . .`);
    } else {
      setImageButtonText(imageName);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleFacebookSignIn = () => {
    facebookSignIn()
      .then((result) => {
        saveUserViaSocial(result.user);
        navigate(from, { replace: true });
        const redirectUrl = localStorage.getItem("redirectUrl");
        localStorage.removeItem("redirectUrl");
        if (redirectUrl) {
          window.location.replace(redirectUrl);
        }
        setLoading(false);
        localStorage.removeItem('location');
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        saveUserViaSocial(result.user);
        navigate(from, { replace: true });
        const redirectUrl = localStorage.getItem("redirectUrl");
        localStorage.removeItem("redirectUrl");
        if (redirectUrl) {
          window.location.replace(redirectUrl);
        }
        setLoading(false);
        localStorage.removeItem('location');
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };


  return (
    <div
      className="min-h-screen pt-32 pb-24 lg:px-10 relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.600), rgba(0, 0, 0, 0.450)), url('https://img.redbull.com/images/c_crop,x_0,y_449,h_1728,w_3840/c_fill,w_1680,h_780/q_auto,f_auto/redbullcom/2023/2/21/zw1f2ijxn6i0zvov6mkp/robin-goomes-and-georgia-astle-speed-and-style-crankworx-innsbruck-austria-2022')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <form
        onSubmit={handleRegister}
        className="flex items-center justify-center gap-20 flex-col lg:flex-row-reverse"
      >
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
          <div className="text-end">
            <Link to="/login" className="description text-sm link link-hover">
              Not a student?{" "}
              <span className="text-yellow-500">Register as an instructor</span>
            </Link>
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-[420px] shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="flex justify-center gap-3">
              <div className="form-control">
                <label className="label">
                  <span className="uppercase label-text font-bold tracking-widest text-white">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  required
                  name="name"
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
                  required
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                />
              </div>
            </div>

            <div className="flex justify-center gap-3">
              <div className="form-control">
                <label className="label">
                  <span className="uppercase label-text font-bold tracking-widest text-white">
                    Contact No
                  </span>
                </label>
                <input
                  type="number"
                  required
                  name="contact"
                  placeholder="Enter your contact no"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="uppercase label-text font-bold tracking-widest text-white">
                    Address
                  </span>
                </label>
                <input
                  type="text"
                  required
                  name="address"
                  placeholder="Enter your address"
                  className="input input-bordered"
                />
              </div>
            </div>

            <div className="flex justify-between">
              <div className="form-control">
                <label className="label">
                  <span className="uppercase label-text font-bold tracking-widest text-white">
                    User image
                  </span>
                </label>
                <label>
                  <input
                    onChange={(event) =>
                      handleImageButtonText(event.target.files[0])
                    }
                    type="file"
                    name="image"
                    className="input input-bordered hidden"
                    hidden
                    accept="image/*"
                  />
                  <div className="btn btn-sm hover:bg-stone-700 bg-stone-800">
                    {imageButtonText}
                  </div>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="uppercase label-text font-bold tracking-widest text-white">
                    Gender
                  </span>
                </label>
                <label>
                  <select
                    onChange={handleSelectGender}
                    name="gender"
                    className="input input-bordered select font-light text-base text-gray-400 w-full max-w-xs"
                  >
                    <option hidden>Enter your gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="flex relative justify-center gap-3">
              <div className="z-[10] form-control">
                <label className="label">
                  <span className="uppercase label-text font-bold tracking-widest text-white">
                    Password
                  </span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="off"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "60%",
                    left: "140px",
                    cursor: "pointer",
                    fontSize: "20px",
                  }}
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>

              <div className="z-[10] form-control">
                <label className="label">
                  <span className="uppercase label-text font-bold tracking-widest text-white">
                    Confirm Password
                  </span>
                </label>
                <input
                  type={showPassword2 ? "text" : "password"}
                  required
                  autoComplete="off"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  className="input input-bordered"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "60%",
                    right: "0px",
                    cursor: "pointer",
                    fontSize: "20px",
                  }}
                  onClick={togglePasswordVisibility2}
                >
                  {showPassword2 ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>

            <label className="label z-[10]">
              <Link to="/login" className="label-text-alt link link-hover">
                Already have an account? Please{" "}
                <span className="text-yellow-500">Login</span>
              </Link>
            </label>
            <p
              className={`${
                error ? "text-red-600" : success ? "text-green-500" : ""
              } ${error || success ? "visible" : "invisible"}`}
            >
              {error ? error : success ? success : "a"}
            </p>
            <div className="divider text-white">Or continue with</div>
            <div className="z-[10] justify-center gap-10 flex">
              <button
                formNoValidate
                onClick={handleGoogleSignIn}
                className="hover:scale-110 btn hover:bg-stone-700 bg-stone-800 btn-circle"
              >
                <FcGoogle className="text-2xl" />
              </button>
              <button
                formNoValidate
                onClick={handleFacebookSignIn}
                className="hover:scale-110 btn hover:bg-stone-700 bg-stone-800 btn-circle"
              >
                <FaFacebookF className="text-2xl text-[#1877F2]" />
              </button>
            </div>
            <div className="z-[10] mt-6 form-control">
              <button
                disabled={loading && true}
                type="submit"
                className="btn bg-yellow-500 disabled:bg-yellow-900 disabled:text-stone-500 hover:bg-yellow-600 text-white text-xl"
              >
                {loading ? (
                  <TbFidgetSpinner className="text-2xl text-stone-400 animate-spin" />
                ) : (
                  "Register"
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="absolute lg:bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-base-300"></div>
    </div>
  );
};

export default Register;
