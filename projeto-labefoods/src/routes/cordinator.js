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

export const goToRestaurantsDetailsPage = (navigate, id) => {
    navigate(`/restaurant/${id}`)
}

export const goToCartPage = (navigate) => {
    navigate("/cart")
}

export const goToEditAddressPage = (navigate) => {
    navigate("/editaddress")
}

export const goToEditProfilePage = (navigate) => {
    navigate("/editprofile")
}

export const goToErrorPage = (navigate) => {
    navigate("*")
}

export const goToBack = (navigate) => {
    navigate(-1)
}