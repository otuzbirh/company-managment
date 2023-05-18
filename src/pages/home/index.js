import React from "react";
import { Container, Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";
import FullScreenLayout from "../../components/layout/full-screen/fullScreenLayout";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setIsAuthenticated,
  setToken,
  setName,
  setTokenId,
  setEmail,
  setPicture,
} from "./../../store/store";
import GoogleLoginComponent from "../../components/common/GoogleLogin";

const HomeContainer = styled(Container)(({ theme }) => {
  return {
    minHeight: "100vh",
    minWidth: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgrounColor: "#ffffff !important",
    zIndex: 22,
  };
});

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const responseMessage = (response) => {

    console.log(response.tokenId)

    setTimeout(() => {
      navigate("/application/companies");
    }, 1000);
    dispatch(setIsAuthenticated(true));
    dispatch(setToken(response.accessToken));
    dispatch(setTokenId(response.tokenId));
    dispatch(setName(response.profileObj.name));
    dispatch(setEmail(response.profileObj.email));
    dispatch(setPicture(response.profileObj.imageUrl));

    localStorage.setItem("token", response.tokenId);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <FullScreenLayout>
      <HomeContainer>
        <Paper
          sx={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            borderRadius: "20px",
          }}
          elevation={3}
        >
          <Typography
            variant="h4"
            component="h1"
            align="center"
            color="textPrimary"
            margin={1}
          >
            Ovo je aplikacija za menadžment kompanija.
          </Typography>
          <Typography
            variant="h4"
            component="h1"
            align="center"
            color="textPrimary"
            margin={1}
          >
            Molim vas ulogujte se preko Googla.
          </Typography>

          <GoogleLoginComponent
            responseSuccess={responseMessage}
            responseError={errorMessage}
          />
        </Paper>
      </HomeContainer>
    </FullScreenLayout>
  );
};

export default Home;
