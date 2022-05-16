import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import FullCard from "../Components/FullCard";

function BrewDetail() {
    const params = useParams();
    const [brewery, setBrewery] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        const FetchData = async () => {
            const response = await fetch(`https://api.openbrewerydb.org/breweries/${params.id}`)
            if (!response.ok) {
                throw new Error(`An error has occured: ${response.status}`);
            }
            const brewery =  await response.json()
            setBrewery(brewery);
            setLoading(true);
        }
        FetchData().catch(err => {
            setError(err.message);
            setBrewery(null);

          });
    },[params.id]);


    return ( 
        <Container className="container" maxWidth="sm" style={{
            marginTop: "auto",
            marginBottom: "auto",
            height: "100%",
        }}>
            <FullCard error={error} brewery={brewery} loading={loading}></FullCard>
        </Container>
    );

}

export default BrewDetail;
