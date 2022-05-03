import React, { useEffect, useState} from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import { Container, Card, CardHeader, CardContent, Typography, CardActions} from "@mui/material";

function BrewDetail() {
    const params = useParams();
    const [brewery, setBrewery] = useState({});

    useEffect(() => {
        const FetchData = async () => {
            const response = await fetch(`https://api.openbrewerydb.org/breweries/${params.id}`)
            const brewery =  await response.json()
            setBrewery(brewery);
            console.log(brewery);
        }
        FetchData();
    },[params.id]);

    return ( 
    <Container className="container" maxWidth="sm" style={{
        marginTop: "auto",
        marginBottom: "auto",
        height: "100%"
    }}>
        <div>
        <Card elevation={1} key={brewery.id}>
                <CardHeader title={brewery.name} subheader={brewery.brewery_type}>
                </CardHeader>
                <CardContent>
                    <Typography variant="body3" color="textsecondary">
                    Street : {String(brewery.street)}
                    <br/>
                    Adress 2 : {String(brewery.adress_2)}
                    <br/>
                    Adress 3 {String(brewery.adress_3)}
                    <br/>
                    City : {brewery.city}
                    <br/>
                    State : {brewery.state}
                    Postal Code : {String(brewery.postal_code)}
                    <br/>
                    Country : {brewery.country}
                    <br/>
                    Country Province : {String(brewery.country_province)}
                    <br/>
                    Phone : {String(brewery.phone)}
                    <br/>
                    Website : {String(brewery.website_url)}
                    <br/>
                    </Typography>
                    <CardActions>
                        <Button  to="/" variant="contained" component={RouterLink}>Go Back</Button>
                    </CardActions>
                </CardContent>
                </Card>
        </div>
            </Container>
            
         );
}

export default BrewDetail;
