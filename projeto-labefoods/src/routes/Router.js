import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdressPage from "../pages/AdressPage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import SignupPage from "../pages/SignupPage";
import RestaurantsPage from "../pages/RestaurantsPage";
import SplashScreen from "../pages/SplashScreen";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<RestaurantsPage />}/>
        <Route path={"/splash"} element={<SplashScreen />}/>
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/signup"} element={<SignupPage />} />
        <Route path={"/profile"} element={<ProfilePage />} />
        <Route path={"/address"} element={<AdressPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router
