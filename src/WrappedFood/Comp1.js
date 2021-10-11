import React from 'react'
import styled from 'styled-components'
import img from '../asserts/food1.png'

 const Comp1 = () => {
    return (
        <Container>
            <Wrapper>
                <Content>
                    <Title>Healthy & Fresh Food For You</Title>
                    <Desc>Created for lovers of healthy delicious food and non-obvious food</Desc>
                    <Button>Check Menu</Button>
                </Content>
               <ImageHolder>
               <ImageViwer>
                    <Image src={img}/>
                </ImageViwer>
               </ImageHolder>
            </Wrapper>
        </Container>
    )
}

export default Comp1;

const ImageHolder =styled.div`
width: 100%;
height: 100%;
position: relativ;
overflow: hidden;
`;
const Content =styled.div`
width: 500px;
height: 400px;
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
width: 900px;
height: 900px;
Background-color: #397546;
border-radius: 50%;
position: absolute;
right: -70px;
top: -200px;
`;
const Image =styled.img`
width: 500px;
height: 500px;
object-fit: contain;
position: absolute;
top: 250px;
left: -70px;
transform: scale(1);

:hover{
    transform: scale(0.93);
}
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
`;

