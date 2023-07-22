import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";
const Component = styled(Box)`
  padding: 10px;
  background-color: #f2f2f2;
`;

const Home = () => {
  const { products } = useSelector((state) => state.getProducts);
  console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <NavBar />
      <Component>
        <Banner />
        <MidSlide products={products} title="Deal of the day" timer={true} />
        <MidSection />
        <Slide products={products} title="Discount for you" timer={false} />
        <Slide products={products} title="Suggesting items" timer={false} />
      </Component>
    </>
  );
};

export default Home;
