import React from 'react'
import styled from 'styled-components'
import img from './gemlogo.jpeg'

const HeaderComp = () => {
    return (
        <Container>
            <Wrapper>
                <Logo src = {img}/>
                <Navigator>
                    <BoxHolder>
                    <Box clr1><NavIcon clr>Home</NavIcon> </Box>
                    <Box><NavIcon >Service</NavIcon> </Box>
                    <Box><NavIcon >Video</NavIcon> </Box>
                    <Box><NavIcon >Contact</NavIcon> </Box>
                    </BoxHolder>
                </Navigator>
                <Button>Buy Product</Button>
            </Wrapper>
        </Container>
    )
}

export default HeaderComp;

const Button=styled.button`
width:100px;
height: 40px;
margin: 20px;
border-radius: 10px;
border: 2px solid white;
outline: none;
background-color: transparent;
color:white;
font-weight: bold;
font-size: 13px;
transition:all 400ms;
transform: scale(1);

:hover{
    transform: scale(1.05);
    cursor: pointer;
}
`;
const BoxHolder =styled.div`
width: 100%;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
`;
const Logo =styled.img`
width: 120px;
height: 70px;
margin: 10px;
object-fit: contain;
`;
const Navigator =styled.div`
display: flex;
flex: 1;

`;
const NavIcon =styled.div`
font-weight: bold;
font-size: 15px;
letter-spacing: 1px;
color: white;
text-transform: uppercase;
transition: all 400ms;
transform: scale(1);

:hover{
    cursor:pointer;
    transform: scale(1.05);
    color: ${({clr}) => (clr ? "black":"white")} 
}
`;
const Box =styled.div`
width: 100px;
height:50px;
margin: 10px;
border: none;
display: flex;
align-items: center;
justify-content: center;
background-color: transparent;
border-radius: 10px;
transition: all 400ms;
transform: scale(1);

:hover{
    transform: scale(1.05);
    cursor:pointer;
    background-color: ${({bg}) => (bg ? "transparent":"rgba(232, 232, 232, 1)")} 

}
`;
const Container =styled.div`
width: 100%;
height: 80px;
color: white;
background-color: #1a1a1a;

`;
const Wrapper =styled.div`
width: 100%;
height: 80px;
display: flex;
align-items:center;
justify-content: space-between;
font-family: san-ser;

`;