import * as React from 'react'
import {Stack, Button} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';


export default function App() {
    const Teste = () => alert('teste')
  return (
    <Stack spacing={2} direction="row">
      <Button  
      onClick={() => Teste()} 
      variant="text">
        Text
        </Button>
      <Button 
      sx={{backgroundColor:'black'}}
      variant="contained">
        Contained
        </Button>
      <Button variant="outlined">Outlined</Button>
      <Button 
      sx={{backgroundColor:'rgba(0,0,0,0.2)'}}
      variant='contained'>
        <DeleteIcon />
        Deletar
      </Button>
    </Stack>

  );
}