import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

const Header = () => {

const [numero, setNumero] = useState(0)

    function Somar() {
        setNumero(numero + 1)
    };
    return (
        <Box style={{
            width: '100%',
            height: '200px',
            borderBottom: '3px solid white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Typography style={{
                color: 'white',
                fontSize: '48px',
                fontWeight: '900',
                textAlign: 'center'
            }}>
                Teste
            </Typography>
            <Button 
            variant="outlined" 
            onClick={ () => Somar()} 
            style={{
                position:'absolute', 
                top:'0', 
                left:'0'
                }}>
                    Somar
                    </Button>
            <Typography 
            style={{
                color:'white', 
                position:'absolute', 
                right:'0', 
                top:'0'
                }}>
                    Soma = {numero} 
                    </Typography>
        </Box>



    )
};

export default Header;