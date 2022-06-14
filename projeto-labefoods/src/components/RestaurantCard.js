function RestaurantCard (props) {

    

return (
    <>
    <section key={props.restaurant.id}>
            <img width={"50px"} src={props.restaurant.logoUrl}/>
            <p>{props.restaurant.name}</p>
            <p>{props.restaurant.deliveryTime-10}-{props.restaurant.deliveryTime} min</p>
            <p>Frete R$ {props.restaurant.shipping},00</p>

        </section>
    </>
)
}

export default RestaurantCard