# PMBIA - Client Side

Welcome to the client-side repository of the PMBIA (Professional Mountain Biking Instructors' Association) website.

## Website Features

1. **Visually Appealing Design:** The website is designed with a unique and visually appealing layout, ensuring proper alignment, color contrast, and customization of component libraries.
<p align="center">
  <img src="public/visually-appealing-design-1.png" alt="Banner"/>
</p>

<br/>

2. **Dynamic Home Page:** The homepage features a top slider section, popular classes section, popular instructors section, and an extra section with animations.
<p align="center">
   <img src="public/dynamic-home-page.png" width="450" alt="Home 1"/>
</p>

<br/>

3. **Responsive Navigation Bar:** The navbar includes the website logo, Home, Instructors, Classes, Dashboard, and User Profile Picture. It dynamically shows the Login button or user profile picture based on user authentication status.
<p align="center">
   <img src="public/responsive.png" width="200" alt="Home 1"/>
</p>

<br/>

4. **Registration & Login System:** The website supports user registration and login with fields for name, email, password, photo URL, and optional fields like gender, phone number, and address. Social login is also integrated.
<p align="center">
   <img src="public/login.png" alt="Home 1"/>
</p>
<p align="center">
   <img src="public/registration-1.png"  alt="Home 1"/>
</p>
<p align="center">
   <img src="public/registrations-2.png" alt="Home 1"/>
</p>

<br/>

5. **Interactive Dashboard:** Separate dashboards for students and instructors with functionalities like selecting and enrolling in courses, managing courses, and courses payments.
<p align="center">
   <img src="public/dashboard-1.png" alt="Home 1"/>
</p>
<p align="center">
   <img src="public/dashboard-2.png" alt="Home 1"/>
</p>
<p align="center">
   <img src="public/dashboard-3.png" alt="Home 1"/>
</p>

<br/>

## Live Deployment

Check out the live site: https://pmbia-55816.web.app/

## Used Packages/Technologies

- **React**: Core library for building user interfaces
- **React Router**: For routing and navigation
- **Tailwind CSS**: Utility-first CSS framework
- **DaisyUI**: Tailwind CSS components
- **Axios**: For making HTTP requests
- **Firebase**: For authentication
- **Tanstack Query (React Query)**: For data fetching and state management
- **JWT**: For authentication
- **Environment Variables**: For configuration
- **Stripe**: For payment processing
- **SweetAlert2**: For beautiful alerts
- **React Hook Form**: For handling form validation
- **Emotion**: For styling components
- **Moment**: For date manipulation
- **Swiper**: For creating sliders
- **React Toastify**: For toast notifications
- **React Icons**: For icons
- **React Leaflet**: For interactive maps
- **React Simple Typewriter**: For typewriter effects
- **React Awesome Reveal**: For animations

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Tanzeebul-Tamim/PMBIA-client-assignment-12
   ```
2. Install dependencies:
   ```sh
   cd summer-camp-client
   npm install
   ```
3. Create a `.env` file and add your environment variables:
   ```sh
   REACT_APP_API_URL=your-api-url
   MONGODB_URI=your-mongodb-uri
   ```

### Running the Project

```sh
npm run dev
```

## Contributing

Feel free to contribute by submitting a pull request. Please ensure that your code follows the project's coding standards and includes relevant tests.
