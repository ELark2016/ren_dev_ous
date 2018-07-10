import LandingPage from "../views/LandingPage/LandingPage.jsx";
import ProfilePage from "../views/ProfilePage/ProfilePage.jsx";
import SignUp from "../views/SignUp/SignUp.jsx";

var indexRoutes = [
  { path: "/", name: "LandingPage", component: LandingPage },
  { path: "/sign-up", name: "SignUp", component: SignUp },
  // { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage }
];

export default indexRoutes;
