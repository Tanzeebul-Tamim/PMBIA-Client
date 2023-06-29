// save a user to database
export const saveUser = (user) => {
  const currentUser = {
    ...user,
  };

  fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch(err => console.error(err));
};

// save an instructor to database
export const saveInstructor = (user) => {
  const currentUser = {
    ...user,
    role: 'Instructor'
  };

  fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch(err => console.error(err));
};

// save an instructor to database
export const saveStudent = (user) => {
  const currentUser = {
    ...user,
    role: 'Student'
  };

  fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch(err => console.error(err));
};

// save a user to database via social login
export const saveUserViaSocial = async (user) => {
  let currentUser = {
    name: user.displayName,
    image: user.photoURL,
    email: user.email,
  };

  getUserData(user.email).then((userDetails) => {
    if (userDetails.role == "Instructor" || userDetails.role == "Admin") {
      currentUser = {
        name: userDetails.name,
        image: userDetails.image,
        email: userDetails.email,
        role: "Instructor",
      };
    } else if (userDetails.role == "Student" || !userDetails.role) {
      currentUser = {
        name: userDetails.name,
        image: userDetails.image,
        email: userDetails.email,
        role: "Student",
      };
    }
  });

  fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

// save an instructor to database via social login
export const saveInstructorViaSocial = async (user) => {
  let currentUser = {
    name: user.displayName,
    image: user.photoURL,
    email: user.email,
    role: 'Instructor'
  };

  getUserData(user.email).then((userDetails) => {
    if (userDetails.role == "Instructor" || userDetails.role == "Admin") {
      currentUser = {
        name: userDetails.name,
        image: userDetails.image,
        email: userDetails.email,
        role: "Instructor",
      };
    } else if (userDetails.role == "Student" || !userDetails.role) {
      currentUser = {
        name: userDetails.name,
        image: userDetails.image,
        email: userDetails.email,
        role: "Student",
      };
    }
  });

  fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

// save an student to database via social login
export const saveStudentViaSocial = async (user) => {
  let currentUser = {
    name: user.displayName,
    image: user.photoURL,
    email: user.email,
    role: 'Student'
  };

  getUserData(user.email).then((userDetails) => {
    if (userDetails.role == "Instructor" || userDetails.role == "Admin") {
      currentUser = {
        name: userDetails.name,
        image: userDetails.image,
        email: userDetails.email,
        role: "Instructor",
      };
    } else if (userDetails.role == "Student" || !userDetails.role) {
      currentUser = {
        name: userDetails.name,
        image: userDetails.image,
        email: userDetails.email,
        role: "Student",
      };
    }
  });

  fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

// get user profile
export const getUserData = async (email) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/users/${email}`
  );
  const data = await response.json();
  return data;
};
