import { useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import RestaurantCard from "../components/RestaurantCard"
import RestaurantProductsCard from "../components/RestaurantProductsCard"
import { GlobalStateContext } from "../global/GlobalStateContext"
import { goToLoginPage } from "../routes/cordinator"

function RestaurantsDetailsPage() {

    const context = useContext(GlobalStateContext)

    const { getRestaurantDetails } = context.getters

    const {details} = context.states

    const token = localStorage.getItem("token")

    const navigate = useNavigate()

    const params = useParams()

    useEffect(() => {
        if (!token) { goToLoginPage(navigate) }
    }, [])

    useEffect(() => {
        getRestaurantDetails(params.id)
        console.log(details)
    }, [])
    
    const showProducts = details.restaurant && details.restaurant.products.map((product) => {
        return (
            <RestaurantProductsCard
            product={product} key = {product.id}
            />
        )
    })

    return (
        <>
        {details.restaurant?.name}
        <RestaurantCard
        restaurant={details.restaurant}
        isDetail={true}
        />
        {showProducts}
        </>

    )
}

export default RestaurantsDetailsPage