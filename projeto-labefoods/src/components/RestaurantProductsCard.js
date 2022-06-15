import { convertPrice } from "../utils/convertPrice";

function RestaurantProductsCard (props){
    return (
        <section>
            <img src={props.product.photoUrl} width={"50px"} alt={`foto de ${props.product.name}`}/>
            <h3>{props.product.name}</h3>
            <p>{props.product.description}</p>
            <p>{convertPrice(props.product.price)}</p>
        </section>
    )
}

export default RestaurantProductsCard;