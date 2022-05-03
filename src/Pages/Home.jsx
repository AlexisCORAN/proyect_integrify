import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Grid from '@mui/material/Grid';
import {Container} from '@mui/material';
import PreviousCard from '../Components/PreviousCard';
const Home = () => {
  const [brewery, setBrewery] = useState([]);

  useEffect(() => {
      const FetchData = async () => {
          const response = await fetch(`https://api.openbrewerydb.org/breweries/`)
          const brewery =  await response.json()
          setBrewery(brewery);
          console.log(brewery);
      }
      FetchData();
  },[]);

    return (
      
      <Container>
        <Header></Header>
        <Grid container spacing={4} style={{
          marginBottom: "30px"
        }}>
          {brewery.map(({id, name, brewery_type, city}) => (
            <Grid item key={id} xs={12} md={6} lg={4}>
              <PreviousCard id={id} name={name} brewery_type={brewery_type} city={city}></PreviousCard>
            </Grid>
          ))}
        </Grid>
      </Container>);
}
 
export default Home;