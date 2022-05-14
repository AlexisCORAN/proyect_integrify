import { Button, Card, CardActions, CardContent, CardHeader, Typography, Backdrop, CircularProgress } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const FullCard = ({error, brewery, loading}) => {

    if (error) {
        return (
            <div>{loading ? <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open>
                <CircularProgress color="inherit" />
            </Backdrop> : <Card elevation={1}>
                <CardContent>
                    <Typography  align="center" variant="body3" color="textsecondary">
                            {error}
                        </Typography>
                </CardContent>
            </Card>}</div>
        );
    }
    return (<div>
        
        {!loading ? <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open>
            <CircularProgress color="inherit" />
        </Backdrop> : <Card elevation={1} key={brewery.id}>
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
                    <br/>
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
            </Card>}
        
    </div>);
}
 
export default FullCard;
