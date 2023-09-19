import { Box, Button} from '@mui/material';
import React, { useState } from 'react';


const Calculator = () => {

    const [value, setValue] = useState('')

    return(
        <Box sx={{
        width:'300px', 
        height:'275px', 
        backgroundColor:'white', 
        borderRadius:'10px',
        padding:'20px'}}>
            <input type='text' value={value} style={{border:'2px solid black', fontSize:21 ,borderRadius:'10px',fontWeight:'bold', height:'30px', width:'282px', alignContent:'center', marginBottom:'10px', marginLeft:'5px' }}/>
            <Box style={{padding:'5px', flexDirection:'row', display:'flex', justifyContent:'space-around'}}>
            <Button variant='contained' color='error' style={{fontWeight:'bold'}} onClick={(e) => setValue('')}>CE</Button>
            <Button variant='contained' color='error' style={{fontWeight:'bold'}} onClick={(e) => setValue(value.slice(0, -1))}>C</Button>
            <Button variant='contained' style={{fontWeight:'bold'}} onClick={(e) => setValue(value + '.')}>.</Button>
            <Button variant='contained' style={{fontWeight:'bold', backgroundColor:'#080090'}} onClick={(e) => setValue(value + '/')}>/</Button>
            </Box>
            <Box style={{padding:'5px', flexDirection:'row', display:'flex', justifyContent:'space-around'}}>
            <Button variant='contained' style={{fontWeight:'bold'}} onClick={(e) => setValue(value + 7)} >7</Button>
            <Button variant='contained' style={{fontWeight:'bold'}} onClick={(e) => setValue(value + 8)}>8</Button>
            <Button variant='contained' style={{fontWeight:'bold'}} onClick={(e) => setValue(value + 9)}>9</Button>
            <Button variant='contained' style={{fontWeight:'bold', backgroundColor:'#080090'}} onClick={(e) => setValue(value + '*')}>*</Button>
            </Box>
            <Box style={{padding:'5px', flexDirection:'row', display:'flex', justifyContent:'space-around'}}>
            <Button variant='contained' style={{fontWeight:'bold'}} onClick={(e) => setValue(value + 4)}>4</Button>
            <Button variant='contained' style={{fontWeight:'bold'}} onClick={(e) => setValue(value + 5)}>5</Button>
            <Button variant='contained' style={{fontWeight:'bold'}} onClick={(e) => setValue(value + 6)}>6</Button>
            <Button variant='contained' style={{fontWeight:'bold', backgroundColor:'#080090'}} onClick={(e) => setValue(value + '-')} >-</Button>
            </Box>
            <Box style={{padding:'5px', flexDirection:'row', display:'flex', justifyContent:'space-around'}}>
            <Button variant='contained' style={{fontWeight:'bold'}} onClick={(e) => setValue(value + 1)}>1</Button>
            <Button variant='contained' style={{fontWeight:'bold'}} onClick={(e) => setValue(value + 2)}>2</Button>
            <Button variant='contained' style={{fontWeight:'bold'}} onClick={(e) => setValue(value + 3)}>3</Button>
            <Button variant='contained' style={{fontWeight:'bold', backgroundColor:'#080090'}} onClick={(e) => setValue(value + '+')}>+</Button>
            </Box>
            <Box style={{padding:'5px', flexDirection:'row', display:'flex', justifyContent:'space-around'}}>
            <Button variant='contained' style={{width:'140px', fontWeight:'bold'}} onClick={(e) => setValue(value + 0)}>0</Button>
            <Button variant='contained' color='success' style={{width:'140px', fontWeight:'bold'}} onClick={(e) => setValue(eval(value))}>=</Button>
            </Box>
        </Box>
    )
}

export default Calculator;