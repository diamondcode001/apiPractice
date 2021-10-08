import React from 'react'
import styled from 'styled-components'
import data from './data.json'

const ServiceSection = () => {
    return (
        <Container>
            <Wrapper> 
           {data.map((diamond) => (
                <Card key={diamond.id}>
                <Image src={diamond.img}/>
                <Content>
                    <Title>{diamond.title}</Title>
                    <Desc>{diamond.desc}</Desc>
                </Content>
            </Card>
           ))}
            </Wrapper>
        </Container>
    )
}

export default ServiceSection;

const Desc =styled.div`
font-size: 20px;
font-weight: bold;
text-align: center;
margin: 15px;
`;
const Title =styled.div`
font-size: 30px;
font-weight: bold;
text-align: center;
text-transform: uppercase;
`;
const Card =styled.div`
width: 300px;
height: 500px;
background-color: lightblue;
margin: 20px;
border-radius: 20px;
border: 3px solid white;
transition: all 400ms;
transform: scale(1);

:hover{
    transform: scale(1.03);
    border: 3px solid black;
}

`;
const Content =styled.div`
color: black;
font-family: poppins;
`;
const Image =styled.img`
width: 100%;
height: 50%;
border-radius: 20px;
object-fit: cover;
background-color: pink;
`;
const Container =styled.div`
width: 100%;
height: 100%;
min-height: 80vh;
background-color: lightgreen;
`;
const Wrapper =styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`;