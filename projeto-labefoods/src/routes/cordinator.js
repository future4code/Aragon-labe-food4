export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToSplashScreen = (navigate) => {
    navigate("/splash")
}

export const goToLoginPage = (navigate) => {
    navigate("/login")
}

export const goToSignUpPage = (navigate) => {
    navigate("/signup")
}

export const goToProfilePage = (navigate) => {
    navigate("/profile")
}

export const goToAddressPage = (navigate) => {
    navigate("/address")
}

export const RestaurantsDetailsPage = (navigate, id) => {
    navigate(`/restaurant/${id}`)
}

export const CartPage = (navigate) => {
    navigate("/cart")
}

export const EditAddressPage = (navigate) => {
    navigate("/editaddress")
}

export const EditProfilePage = (navigate) => {
    navigate("/editprofile")
}

export const ErrorPage = (navigate) => {
    navigate("*")
}