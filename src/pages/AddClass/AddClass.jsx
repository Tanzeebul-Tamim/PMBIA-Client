import { useState } from "react";
import DashboardPageTitle from "../../shared_components/DashboardPageTitle/DashboardPageTitle";

const AddClass = () => {
  const [imageButtonText, setImageButtonText] = useState("Upload Image");
  const handleImageButtonText = (image) => {
    const imageName = image.name;
    if (imageName.length > 40) {
      setImageButtonText(`${image.name.slice(0, 10)} . . . .`);
    } else {
      setImageButtonText(imageName);
    }
  };

  return (
    <div>
      <DashboardPageTitle title={"Add a Course"} />
      <div className="flex justify-center">
        <form className="flex flex-col bg-base-100 py-5 rounded-2xl bg-opacity-50 description">
          <div className="card-body">
            <div className="flex justify-between gap-2">
              <div className="form-control z-[10]">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control z-[10]">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  className="input input-bordered"
                />
              </div>
            </div>

            <div className="flex justify-between gap-2">
              <div className="form-control z-[10]">
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
              <div className="form-control z-[10]">
                <label className="label">
                  <span className="label-text">Contact no</span>
                </label>
                <input
                  type="text"
                  name="contact"
                  placeholder="Enter your contact no"
                  className="input input-bordered"
                />
              </div>
            </div>

            <div className="form-control mt-6 z-[10]">
              <button
                type="submit"
                className="btn btn-md text-md rounded-md bg-base-200 hover:bg-stone-800"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
