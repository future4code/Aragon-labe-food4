import { useNavigate } from "react-router-dom"
import { goToDetailsPage } from "../../routes/cordinator"
import { RestaurantCardStyle } from "./styled"

function RestaurantCard(props) {

const navigate = useNavigate()

    return (
        <RestaurantCardStyle className="container__restaurant-card"
        onClick={() => goToDetailsPage(navigate, props.restaurant?.id)}
            key={props.restaurant?.id}>

            
                <main>
                <img className="logo__card"
                src={props.restaurant?.logoUrl} 
                alt= {`logo do restaurante ${props.restaurant?.name}`}
                />
                <section>
                <p>{props.restaurant?.name}</p>

                {props.isDetail===true && <p>{props.restaurant?.category}</p>}
               
                <p>{props.restaurant?.deliveryTime - 10}-{props.restaurant?.deliveryTime} min</p>
                </section>
                <section >
                <p>Frete R$ {props.restaurant?.shipping},00</p>
                </section>
                {props.isDetail===true && <p>{props.restaurant?.address}</p>}
                </main>

        </ RestaurantCardStyle>
    )
}

export default RestaurantCard