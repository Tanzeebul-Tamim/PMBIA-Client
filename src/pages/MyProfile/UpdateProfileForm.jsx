import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { saveUser } from "../../api/authApi";
import { toast } from "react-toastify";

const UpdateProfileForm = ({ userDetails }) => {
  const [imageButtonText, setImageButtonText] = useState("Upload Image");
  const [selectedGender, setSelectedGender] = useState(userDetails.gender || '');
  const { updateUser, user, setLoading } = useContext(AuthContext);

  const handleImageButtonText = (image) => {
    const imageName = image.name;
    if (imageName.length > 40) {
      setImageButtonText(`${image.name.slice(0, 10)} . . . .`);
    } else {
      setImageButtonText(imageName);
    }
  };

  const handleSelectGender = (event) => {
    const selectGender = event?.target?.value;
    setSelectedGender(selectGender);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form?.name?.value;
    const email = user.email;
    const address = form?.address?.value;
    const contactNo = form?.contact?.value;
    const gender = selectedGender;

    const image = form?.image?.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;

    if (image) {
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
          updateUser(name, imageUrl, contactNo)
            .then(() => {
              saveUser(user);
                    toast.success(
                        "Profile Updated",
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
              setLoading(false);
            })
            .catch((err) => {
              console.error(err);
              setLoading(false);
            });
        });
    } else {
      const user = {
        name,
        email,
        contactNo,
        address,
        gender,
      };
      updateUser(name)
        .then(() => {
          saveUser(user);
                toast.success(
                        "Profile Updated",
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
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  };

  return (
    <dialog id="my_modal_3" className="modal text-white description">
      <form onSubmit={handleSubmit} method="dialog" className="modal-box">
        <h1 className="z-[10] text-white text-2xl tracking-[9px] text-center uppercase font-extrabold">
          Update Profile
        </h1>
        <p className="z-[10] mt-1 text-white text-xs text-center">
          Press esc to cancel
        </p>

        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="Enter your name"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              name="address"
              defaultValue={userDetails?.address}
              placeholder="Enter your address"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Contact no</span>
            </label>
            <input
              type="text"
              name="contact"
              defaultValue={userDetails?.contactNo}
              placeholder="Enter your contact no"
              className="input input-bordered"
            />
          </div>

          <div className="flex justify-between">
            <div className="form-control">
              <label className="label">
                <span className="label-text">User image</span>
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
                <span className="label-text">Gender</span>
              </label>
              <label>
                <select
                  onChange={handleSelectGender}
                  name="gender"
                  defaultValue={userDetails.gender}
                  className="input input-bordered select font-light text-base text-gray-400 w-full max-w-xs"
                >
                  <option hidden>Enter your gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </label>
            </div>
          </div>

          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-md text-md rounded-md bg-base-200 hover:bg-stone-800"
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </dialog>
  );
};

export default UpdateProfileForm;
