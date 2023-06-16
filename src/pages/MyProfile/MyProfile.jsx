import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { getUserData } from "../../api/authApi";
import { useState } from "react";
import { useEffect } from "react";
import { PropagateLoader } from "react-spinners";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getUserData(user.email)
      .then((data) => {
        setUserDetails(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [user]);

  if (loading) {
    return (
      <div
        style={{ height: "700px" }}
        className="flex justify-center items-center"
      >
        <PropagateLoader color="rgb(234 179 8)" />
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundImage:
          "url('https://img.redbull.com/images/c_crop,x_0,y_0,h_4128,w_8256/c_fill,w_1490,h_710/q_auto,f_auto/redbullcom/2022/6/21/fc9itii98dyr4imm5z1a/crankworx-stop-1-innsbruck-full-recap-program-szymon-godziek')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="bg-base-200 relative m-10 p-5 rounded-2xl"
    >
      <h1 className="z-[10] text-yellow-600 text-5xl mb-16 tracking-[9px] text-center uppercase font-extrabold">
        My Profile
      </h1>
      <div className="flex mb-10 px-5 gap-10 items-center justify-start ">
        <img
          className="z-[10] w-[200px] h-[200px] border-zinc-400 lg:border-[4px] shadow-2xl rounded-full"
          src={user.photoURL}
          alt=""
        />
        <div className="bg-base-100 bg-opacity-70 w-full p-4 rounded-2xl">
          <div className="description gap-3 text-xl flex justify-center flex-col text-left mb-4">
            <p className="z-[10]">
              <strong>Name :</strong> {user.displayName}
            </p>
            <p className="z-[10]">
              <strong>Email :</strong> {user.email}
            </p>
            <p className="z-[10]">
              <strong>Gender :</strong> {userDetails.gender}
            </p>
            <p className="z-[10]">
              <strong>Address :</strong> {userDetails.address}
            </p>
            <p className="z-[10]">
              <strong>Contact no :</strong> {userDetails.contactNo}
            </p>
            <div className="z-[10]">
              <div
                onClick={() => window.my_modal_3.showModal()}
                className="btn btn-sm rounded-xl bg-stone-700 hover:bg-stone-800"
              >
                Update Profile Info
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute lg:bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-base-300"></div>
      <dialog id="my_modal_3" className="modal text-white">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default MyProfile;
