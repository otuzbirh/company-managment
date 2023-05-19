import React from "react";
import ShowMoreText from "../../../components/show-text";
import { Paper } from "@mui/material";

const ShowText = () => {
  const longText =
    "React is a popular JavaScript library for building user interfaces. It was developed by Facebook and released as an open-source project in 2013. Since then, it has gained immense popularity among developers due to its simplicity, performance, and reusability. In this article, we will explore the key features and benefits of the React framework.Component-Based Architecture One of the fundamental concepts of React is its component-based architecture. A React application is composed of reusable and self-contained components. These components encapsulate the UI logic and can be composed together to build complex user interfaces. The component-based approach promotes code reusability, modularity, and maintainability.";
  const maxLength = 30;

  return (
    <Paper elevation={2} sx={{width: '95%', height: '60%',  display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: 2}}>

      <ShowMoreText text={longText} maxLength={maxLength} />
    </Paper>
  );
};

export default ShowText;
