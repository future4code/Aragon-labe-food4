import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SplashScreen from "../pages/SplashScreen";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import ProfilePage from "../pages/ProfilePage";
import AdressPage from "../pages/AdressPage";
import RestaurantsDetailsPage from "../pages/RestaurantsDetailsPage";
import CartPage from "../pages/CartPage";
import EditAddressPage from "../pages/EditAddressPage";
import EditProfilePage from "../pages/EditProfilePage";
import ErrorPage from "../pages/ErrorPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={"/splash"} element={<SplashScreen />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/signup"} element={<SignupPage />} />
        <Route path={"/profile"} element={<ProfilePage />} />
        <Route path={"/address"} element={<AdressPage />} />
        <Route path={"/restaurant/:id"} element={<RestaurantsDetailsPage />} />
        <Route path={"/cart"} element={<CartPage />} />
        <Route path={"/editaddress"} element={<EditAddressPage />} />
        <Route path={"/editprofile"} element={<EditProfilePage />} />
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;