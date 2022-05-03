import { Card, CardHeader, CardContent, Typography, Button, CardActions} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import React from "react";

const PreviousCard = ({id, name, brewery_type, city}) => {
    return (
        <div>
            <Card elevation={1} key={id}>
                <CardHeader title={name} subheader={brewery_type}>
                </CardHeader>
                <CardContent>
                    <Typography variant="body3" color="textsecondary">
                        City: {city}
                    </Typography>
                    <CardActions>
                        <Button to={`/${id}`} size="small" component={RouterLink}>More</Button>
                    </CardActions>
                </CardContent>
            </Card>
        </div>
    );
}
 
export default PreviousCard;
