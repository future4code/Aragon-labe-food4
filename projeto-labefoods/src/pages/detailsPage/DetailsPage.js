import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import RestaurantCard from "../../components/restaurantCard/RestaurantCard";
import ProductsCard from "../../components/productsCard/ProductsCard";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { goToLoginPage } from "../../routes/cordinator";
import { DetailsStyle } from "./Styled";
import { Box, Container } from "@mui/material";

function DetailsPage() {
  const context = useContext(GlobalStateContext);

  const { getRestaurantDetails } = context.getters;

  const { details, orders } = context.states;

  const { setOrders } = context.setters;

  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    if (!token) {
      goToLoginPage(navigate);
    }
  }, []);

  useEffect(() => {
    getRestaurantDetails(params.id);
    console.log(details);
  }, []);

  const showProducts =
    details.restaurant &&
    details.restaurant.products.map((product) => {
      return (
        <>
          <ProductsCard
            product={product}
            restaurant={details.restaurant}
            key={product.id}
          />
        </>
      );
    });

  return (
    <DetailsStyle>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            m: 2,
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Header currentPage={"details"} />
          <RestaurantCard restaurant={details.restaurant} isDetail={true} />
          <section className="container__card-products">{showProducts}</section>
          
        </Box>
      </Container>
      <Footer />
    </DetailsStyle>
  );
}

export default DetailsPage;
