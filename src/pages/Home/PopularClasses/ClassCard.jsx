const ClassCard = () => {
  return (
    <div className="card description rounded-2xl card-compact w-96 bg-base-200 mr-2 ml-2 shadow-xl">
      <div>
        <img
          className="rounded-t-2xl z-0 w-full"
          src="https://img.redbull.com/images/c_crop,x_0,y_0,h_2560,w_3840/c_fill,w_350,h_231/q_auto,f_auto/redbullcom/2023/5/15/sbajrt66mlbxrjm9tcfi/tom-pidcock-xco-world-cup-nove-mesto-2023"
          alt="Shoes"
        />
      </div>
      <div className="card-body">
        <h2 className="card-title">Class Name</h2>
        <p><strong>Instructor Name:</strong> Fabio Wibmer</p>
        <p><strong>Total Course Attendees:</strong> 34</p>
      </div>
    </div>
  );
};

export default ClassCard;
