import React from 'react'
import styled from 'styled-components'

 const Comp1 = () => {
    return (
        <Container>
            <Wrapper>
                <Content>
                    <Title>Healthy and Fresh Food For You</Title>
                    <Desc>Created for lovers of healthy delicious food and non-obvious food</Desc>
                    <Button>Check Menu</Button>
                </Content>
                <ImageViwer>
                    <Image/>
                </ImageViwer>
            </Wrapper>
        </Container>
    )
}

export default Comp1;

const Content =styled.div`
width: 500px;
display: flex;
flex-direction: column;
margin: 50px;
`;
const Title =styled.div`
font-size: 50px;
font-weight: 900;
line-height: 1.3;
`;
const Desc =styled.div`
width: 350px;
font-weight: bold;
margin-top: 20px;
margin-bottom: 20px;
font-size: 18px;
`;
const Button =styled.button`
width: 200px;
height: 50px;
outine: none;
border:0;
border-radius: 5px;
background-color: #f19a33;
display: flex;
justify-content: center;
align-items: center;
font-weight: bold;
color:white;
letter-spacing: 1.5px;
font-size: 18px;
box-shadow: rgb(0 0 0 /39%) 0px 16px 10px -10px;
transition: all 350ms;
transform: scale(1);

:hover{
    box-shadow: rgb(0 0 0 /19%) 0px 20px 30px -10px,
     rgb(0 0 0 /43%) 0px 16px 10px -10px;
    cursor: pointer;
    transform: scale(0.96);
}

`;
const ImageViwer =styled.div`
width:400px;
height: 400px;
Background-color: green;
`;
const Image =styled.img`
`;
const Container =styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
color: black;
background-image: linear-gradient(#b6cba7,#fafafa);
`;
const Wrapper =styled.div`
width: 100%;
height: 600px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: ;
`;

