import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import RestaurantCard from "../../components/restaurantCard/RestaurantCard";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { goToLoginPage } from "../../routes/cordinator";
import {HomeStyle} from "../homePage/styled";
import { Box, Container } from "@mui/material";
import logo from "../../assets/logo-rappi4-invert3x.png";

function HomePage() {
  const context = useContext(GlobalStateContext);

  const { profile, restaurants } = context.states;

  const { getProfile, getRestaurants } = context.getters;

  const [ search, setSearch ] = useState("")

  const [ filter, setFilter ] = useState("")

  const navigate = useNavigate();

  const token = localStorage.getItem("token")

  useEffect(() => {
    if(!token) {
        goToLoginPage(navigate)
    }

  }, []);

  useEffect(() => {
  getProfile(navigate)
    getRestaurants()
  },[]);

  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  const onChangeFilter = (e) => {
    setFilter(e.target.value)
  }

  const showRestaurants = restaurants? restaurants
  .filter((restaurant) => {
   const textSearch = search.toLowerCase()
   const restaurantsFiltered = restaurant.name.toLowerCase()
   const descriptionFiltered = restaurant.description.toLowerCase()
   return restaurantsFiltered.includes(textSearch) || descriptionFiltered.includes(textSearch)
  })
  // .filter((restaurant) => {
  //   if (filter) {
  //     return restaurant.category === filter
  //   } else {
  //     return restaurant
  //   }
  // })
  .map((restaurant) => {
    return (
        <RestaurantCard
        key={restaurant.id} 
        restaurant={restaurant}
        isDetail = {false}
        />
    )
  }):<p>carregando...</p>

  return (
    <HomeStyle>
    <Container component="main" maxWidth="xs">
      <img src={logo} alt="Logo do Rappi4" />

      <Box
        sx={{
          m: 2,
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >    <Header currentPage={"home"}/>
    <input 
    placeholder="Pesquisar Restaurante" 
    value={search}
    onChange={onChangeSearch}
    />
    
    {/* <ul> */}
      {/* <input type="button" value={"Arabe"} onChange={onChangeFilter} placeholder="Árabe"/>  */}
      {/* <li><input type="button">Asiática</input></li> 
      <li><input type="button">Baiana</input></li>
      <li><input type="button">Carnes</input></li> 
      <li><input type="button">Hambúrguer</input></li> 
      <li><input type="button">Italiana</input></li> 
      <li><input type="button">Mexicana</input></li>
      <li><input type="button">Petiscos</input></li>
      <li><input type="button">Sorvetes</input></li>
    </ul> */}
    {showRestaurants}

    <Footer />
                </Box>
                </Container>
              </HomeStyle>
            );
          }
  
export default HomePage;
