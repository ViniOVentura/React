import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Principal = () => {
    const [dados, setDados] = useState([])

    useEffect(() => {
        
    }, [dados])

    const Carregar = async () => {
        await axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(ret => {
                setDados(ret.data)
            })
    }

    var cards =dados.map(item => {
            return (
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {item.title}
                        </Typography>
                        <Typography variant="body2">
                            {item.body}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            )
        })

    return (
        <div>
            <h1>Principal</h1>
            <Link to="/app">Clique aqui</Link>
            <br />
            <Button
                variant="contained"
                onClick={Carregar}
            >
                Carregar
            </Button>
            <hr></hr>
            { cards }
        </div>
    )
}

export default Principal