import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RestaurantCard from "../components/RestaurantCard";
import { GlobalStateContext } from "../global/GlobalStateContext";
import { goToAddressPage, goToHomePage, goToLoginPage } from "../routes/cordinator";

function HomePage() {
  const context = useContext(GlobalStateContext);

  const { profile, restaurants } = context.states;

  const { getProfile, getRestaurants } = context.getters;

  const [ search, setSearch ] = useState("")

  const navigate = useNavigate();

  const token = localStorage.getItem("token")

  useEffect(() => {
    if(!token) {
        goToLoginPage(navigate)
    }
  }, []);

  useEffect(() => {
    getProfile();
    getRestaurants()
  },[]);

//   useEffect(() => {
//     if(profile.user?.hasAddress === true) {
//         goToHomePage(navigate)
//     } else if (profile.user?.hasAddress !== true) {
//         goToAddressPage(navigate);
//       }
//   },[])

  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  const showRestaurants = restaurants? restaurants
  .filter((restaurant) => {
   const textSearch = search.toLowerCase()
   const restaurantsFiltered = restaurant.name.toLowerCase()
   const descriptionFiltered = restaurant.description.toLowerCase()
   return restaurantsFiltered.includes(textSearch) || descriptionFiltered.includes(textSearch)
  })
  .map((restaurant) => {
    return (
        <RestaurantCard 
        key={restaurant.id} 
        restaurant={restaurant}
        />
    )
  }):<p>carregando...</p>

  return (
    <>
    <input 
    placeholder="Pesquisar Restaurante" 
    value={search}
    onChange={onChangeSearch}
    />
    {showRestaurants}
    </>
  )
}

export default HomePage;
