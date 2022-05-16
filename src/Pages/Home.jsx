import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import {Button, Container, TextField } from '@mui/material';
import PreviousCard from '../Components/PreviousCard';
import { useSearchParams } from "react-router-dom";
const Home = () => {
  const [breweries, setBreweries] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  let searchValue = searchParams.get("filter") || "";

  useEffect(() => {
      
    const FetchData = async () => {
      const response = await fetch(`https://api.openbrewerydb.org/breweries/`)
      if (!response.ok) {
        throw new Error(`An error has occured: ${response.status}`);
      }
      const data =  await response.json();
      setBreweries(data);
    }

    FetchData().catch(err => {
      setError(err.message);
    });
  },[]);

  const handleChange = (e) => {
    let filter = e.target.value;
    if (filter) {
      setSearchParams({filter});
    } else {
      setSearchParams({});
    }
  }

  return (
      <Container>
        <div style={{
           maxWidth: "50%",
           marginRight: "auto",
           marginLeft: "auto"
         }}>
            <form 
            style={{
          display: "flex",
          flexDirection: "row",
          padding: 20,
        }}>
          <TextField
          placeholder="City"
          type="text"
          value={searchValue}
          onChange={handleChange}
          style={{
            flexGrow: "2"
          }}
          />
          <Button variant="contained" disableElevation> Search </Button>
          </form>
        </div>
       
        {error && <p style={{
          textAlign:"center"
        }}>{error}</p>}
        <Grid container spacing={4} style={{
          marginBottom: "30px"
        }}>
          
          {breweries.filter((b) => {
                    let filter = searchParams.get("filter");
                    if (!filter) return true;
                    let city = b.city.toLowerCase();
                    return city.includes(filter.toLowerCase());
                }).map((b) => (
            <Grid item key={b.id} xs={12} md={6} lg={4}>
              <PreviousCard id={b.id} name={b.name} brewery_type={b.brewery_type} city={b.city} state={b.state}></PreviousCard>
            </Grid>
          ))}
        </Grid>
      </Container>
      );
}
 
export default Home;
