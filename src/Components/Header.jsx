import { Button, Container, TextField } from '@mui/material';
import React from 'react';

const Header = () => {
    return ( 
      <Container>
         <div style={{
           maxWidth: "50%",
           marginRight: "auto",
           marginLeft: "auto"
         }}>
         <form style={{
        display: "flex",
        flexDirection: "row",
        padding: 20,
     }}>
        <TextField style={{
          flexGrow: "2"
        }}/>
        <Button variant="contained" disableElevation> Search </Button>
        </form>
         </div>
       
        
      </Container>
     
     );
}
 
export default Header;
