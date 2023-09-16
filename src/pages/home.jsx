import { Box } from "@mui/material";
import Banner from "../Components/Banner/Banner";
import Services from "../Components/Services/Services";
import { useEffect } from "react";
 


const Home = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}, []);
    return (

      <Box>

        <Banner />

        <Services />
 
      </Box>

    )
}

export default Home;
