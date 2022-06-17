import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import SignupPage from "../pages/signupPage/SignupPage";
import ProfilePage from "../pages/profilePage/ProfilePage";
import AddressPage from "../pages/addressPage/AddressPage";
import DetailsPage from "../pages/detailsPage/DetailsPage";
import CartPage from "../pages/cartPage/CartPage";
import EditAddressPage from "../pages/editAddressPage/EditAddressPage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import SplashScreen from "../pages/splashScreen/SplashScreen";
import LoginPage from "../pages/loginPage/LoginPage";
import EditProfilePage from "../pages/editProfilPage/EditProfilePage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={"/splash"} element={<SplashScreen />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/signup"} element={<SignupPage />} />
        <Route path={"/profile"} element={<ProfilePage />} />
        <Route path={"/address"} element={<AddressPage />} />
        <Route path={"/restaurant/:id"} element={<DetailsPage />} />
        <Route path={"/cart"} element={<CartPage />} />
        <Route path={"/editaddress"} element={<EditAddressPage />} />
        <Route path={"/editprofile"} element={<EditProfilePage />} />
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
