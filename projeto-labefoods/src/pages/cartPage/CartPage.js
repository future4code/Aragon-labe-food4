import { useContext, useEffect } from "react"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import { GlobalStateContext } from "../../global/GlobalStateContext"
import { convertPrice } from "../../utils/convertPrice"
import { CartStyle } from "./Styled"
import { Box, Container } from "@mui/material"
import logo from "../../assets/logo-rappi4-invert3x.png"


function CartPage () {
    const context = useContext(GlobalStateContext)

    const { orders } = context.states

    const showOrders = orders.map((order) => {
        return(
            <section key={order.products.id}>
                <img src = {order.products.photoUrl} alt={`imagem de ${order.products.name}`}/>
                <p>{order.products.name}</p>
                <p>{order.products.description}</p>
                <p>{convertPrice(order.products?.price)}</p>
                <p>{order.quantity}</p>
            </section>
        )
    })
    return (
        <CartStyle>
        <Container component="main" maxWidth="xs">
  
          <Box
            sx={{
              m: 2,
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
<Header currentPage={"cart"}/>
        {orders.products &&
        <div>

        <img src={orders.products.photoUrl} width={"100px"}/>
        <p>{orders.products.name}</p>
        <p>{orders.products.description}</p>
        <p>{convertPrice(orders.products.price)}</p>
        </div>
        }
        <section className="container__cart-order">
        {showOrders}
        </section>
       
        </Box>
        </Container>
        <Footer /> 
      </CartStyle>        
    );
}

export default CartPage