import { Box, Button, Typography, styled } from "@mui/material";
import React, { useState, useContext } from "react";
import { ShoppingCart } from "@mui/icons-material";
import LoginDialog from "../login/loginDialog";
import { LoginContext } from "../../context/DataProvider";
import Profile from "./Profile";

const Wrapper = styled(Box)(({ theme }) => ({
  margin: "0 3% 0 auto",
  display: "flex",
  "& > *": {
    marginRight: "40px !important",
    textDecoration: "none",
    color: "#FFFFFF",
    fontSize: 16,
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      color: "#2874f0",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      marginTop: 10,
    },
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const LoginButton = styled(Button)(({ theme }) => ({
  color: "#2874f0",
  background: "#FFFFFF",
  textTransform: "none",
  fontWeight: 600,
  borderRadius: 2,
  padding: "5px 40px",
  height: 32,
  boxShadow: "none",
  [theme.breakpoints.down("md")]: {
    background: "#2874f0",
    color: "#FFFFFF",
  },
}));

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const CustomButtons = () => {
  const [openLogin, setOpenLogin] = useState(false);

  const { account, setAccount } = useContext(LoginContext);

  const openDialog = () => {
    setOpenLogin(true);
  };
  return (
    <>
      <Wrapper>
        {account ? (
          <Profile account={account} setAccount={setAccount} />
        ) : (
          <LoginButton variant="contained" onClick={() => openDialog()}>
            Login
          </LoginButton>
        )}

        <Typography style={{ marginTop: 4, width: 140 }}>
          Become a seller
        </Typography>
        <Typography style={{ marginTop: 4, width: 20 }}>More</Typography>
        <Container>
          <ShoppingCart />
          <Typography>Cart</Typography>
        </Container>
        <LoginDialog openLogin={openLogin} setOpenLogin={setOpenLogin} />
      </Wrapper>
    </>
  );
};

export default CustomButtons;
