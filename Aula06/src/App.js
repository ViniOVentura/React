import {Box, Button} from '@mui/material'
import axios from "axios"
import { useState } from 'react'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import escobar from './escobar.jpg';

function App() {

const [dados, setDados] = useState([])
const Carregar = async () => {

  var url = "https://jsonplaceholder.typicode.com/posts"
  await axios.get( url )
       .then(data => {
       setDados(data.data)

  })
}  
// var informacoes = dados.map((item,key) => {
//   return(
//     <div key={key}>
//       <h1>{item.title}</h1>
//       <p>{item.body}</p>
//     </div>
//   )
// })
var informacoes = dados.map((item,key) => {
  return(
    <Box style={{marginBottom:'3px', width: '40vw'}}>

    <Card key={key} sx={{backgroundColor: "#FF9B00" }}>
    <CardContent>
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {item.id}
      </Typography>
      <img src={escobar}/>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {item.title}
      </Typography>
    </CardContent>
  </Card>
    </Box>
  )
})
  return (
    <div>
      <h1>Teste</h1>
      <Button 
      variant='contained'
      onClick={() => {Carregar()}}>
        Carregar
      </Button>
      <hr/>
      {informacoes}
      {/* {
        dados.map((item,key) => {
          return(
            <div key={key}>
              <h1>{item.title}</h1>
              <p>{item.body}</p>
            </div>
          )
        })
      } */}
    </div>
  );
}

export default App;
