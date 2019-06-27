import React from 'react'
import { Container, Card, CardDeck, Image, CardColumns } from 'react-bootstrap'


export default function Cards(props) {
    return (
        <div>
            <Container>
                <CardColumns>
                    {props.images.map(meme => (
                        // console.log({ meme })
                        <Card key={meme.id} onClick={() => props.handleClick(meme.id)} >
                            <Card.Img  src={meme.image} style={{ height: "200px", width:'100%'}} />


                        </Card>


                    ))}

                </CardColumns>
            </Container>
        </div>
    )
}
