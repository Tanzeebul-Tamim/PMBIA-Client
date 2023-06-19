// save a user to database
export const saveUser = (user) => {
  const currentUser = {
    ...user,
    role: "Student",
  };

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

// save a user to database via social login
export const saveUserViaSocial = (user) => {
  let currentUser = {};

  getUserData(user.email).then((userDetails) => {
    if (userDetails.role == "Instructor" || userDetails.role == "Admin") {
      currentUser = {
        name: user.displayName,
        image: user.photoURL,
        email: user.email,
      };
    } else {
      currentUser = {
        name: user.displayName,
        image: user.photoURL,
        email: user.email,
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
