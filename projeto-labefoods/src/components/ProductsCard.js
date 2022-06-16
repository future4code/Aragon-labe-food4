import { convertPrice } from "../utils/convertPrice";

function ProductsCard (props){
    return (
        <section>
            <img src={props.product.photoUrl} width={"50px"} alt={`foto de ${props.product.name}`}/>
            <h3>{props.product.name}</h3>
            <p>{props.product.description}</p>
            <p>{convertPrice(props.product.price)}</p>
            <button onClick={() => props.getProductOrder(props.product.id, 1)} 
            >+</button>
            <p>Quantidade</p>
            <button>-</button>
        </section>
    )
}

export default ProductsCard;