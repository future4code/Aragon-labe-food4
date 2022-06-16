import { useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import RestaurantCard from "../components/RestaurantCard"
import ProductsCard from "../components/ProductsCard"
import { GlobalStateContext } from "../global/GlobalStateContext"
import { goToLoginPage } from "../routes/cordinator"

function DetailsPage() {

    const context = useContext(GlobalStateContext)

    const { getRestaurantDetails } = context.getters

    const {details, order} = context.states

    const {setOrder} = context.setters

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

    const getProductOrder = (id, quantity) => {
        const newOrder = {
        products:    [   
                ...order.products,
                {
                id: id,
                quantity: quantity
                }
            ]
        }
        console.log(newOrder)
    }

    const showProducts = details.restaurant && details.restaurant.products.map((product) => {
        return (
            <ProductsCard
            product={product} 
            key={product.id}
            getProductOrder={getProductOrder}
            />
        )
    })

    return (
        <>
        <Header currentPage={"details"}/>
        <RestaurantCard
        restaurant={details.restaurant}
        isDetail={true}
        />
        {showProducts}

        <Footer />
        </>

    )
}

export default DetailsPage