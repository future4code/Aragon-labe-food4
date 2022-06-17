import { useNavigate } from "react-router-dom"
import { goToDetailsPage } from "../../routes/cordinator"

function RestaurantCard(props) {

const navigate = useNavigate()

    return (
        <>
            <section
                onClick={() => goToDetailsPage(navigate, props.restaurant?.id)}
                    key={props.restaurant?.id}>
                <img width={"50px"} src={props.restaurant?.logoUrl} alt= {`logo do restaurante ${props.restaurant?.name}`}/>
                <p>{props.restaurant?.name}</p>
                {props.isDetail===true && <p>{props.restaurant?.category}</p>}
                <p>{props.restaurant?.deliveryTime - 10}-{props.restaurant?.deliveryTime} min</p>
                <p>Frete R$ {props.restaurant?.shipping},00</p>
                {props.isDetail===true && <p>{props.restaurant?.address}</p>}

            </section>
        </>
    )
}

export default RestaurantCard