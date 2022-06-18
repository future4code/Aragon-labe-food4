import { useContext, useEffect } from "react"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import { GlobalStateContext } from "../../global/GlobalStateContext"
import { convertPrice } from "../../utils/convertPrice"


function CartPage () {
    const context = useContext(GlobalStateContext)

    const { orders } = context.states

    const showOrders = orders.map((order) => {
        return(
            <section key={order.products.id}>
                <img src = {order.products.photoUrl} width={"100px"} alt={`imagem de ${order.products.name}`}/>
                <p>{order.products.name}</p>
                <p>{order.products.description}</p>
                <p>{convertPrice(order.products?.price)}</p>
                <p>{order.quantity}</p>
            </section>
        )
    })
    return (
        <>
        <Header currentPage={"cart"}/>
        {/* {orders.products &&
        <div>

        <img src={orders.products.photoUrl} width={"100px"}/>
        <p>{orders.products.name}</p>
        <p>{orders.products.description}</p>
        <p>{convertPrice(orders.products.price)}</p>
        </div>
        } */}
        {showOrders}
        <Footer />
        </>
    )
}

export default CartPage