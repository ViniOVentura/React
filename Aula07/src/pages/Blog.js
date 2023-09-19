import {Box, Button} from '@mui/material'
import axios from "axios"
import { useState, useEffect } from 'react'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import escobar from '../assets/escobar.jpg';
import ModalComments from '../components/ModalComments';

function Blog() {

  const [dados, setDados] = useState([])
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState([])
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

const CarregarComentarios = async (id) => {
    var url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    await axios.get(url)
    .then(data => {
      setComments(data.data)
    })
}

useEffect(()=>{
  Carregar()
},[])
  
const Carregar = async () => {
  
  var url = "https://jsonplaceholder.typicode.com/posts"
  await axios.get( url )
       .then(data => {
       setDados(data.data)

  })
}  


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
      <Button onClick={() => {handleOpen()}}>Comentários</Button>
    </CardContent>
  </Card>
    </Box>
  )
})
  return (
    <div>
      <ModalComments open={open}  handleClose={handleClose} />
      <h1>Teste</h1>
      <Button 
      variant='contained'
      onClick={() => {Carregar()}}>
        Carregar
      </Button>

      <hr/>
      {informacoes}
    </div>
  );
}

export default Blog;
