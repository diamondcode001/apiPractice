import React from 'react'
import styled from 'styled-components'
import logo from '../asserts/wraplogo.png'

 const HeaderCompt = () => {
    return (
       <Container>
           <Wrapper>
               <Logo src= {logo}/>
               <Navigation>
                   <Nav>About us</Nav>
                   <Nav>Menu</Nav>
                   <Nav>Contact</Nav>
               </Navigation>
           </Wrapper>
       </Container>
    )
}

export default HeaderCompt;

const Logo =styled.img`
Width: 200px;
height: 50px;
object-fit: contain;
margin-left: 20px;
`;
const Navigation =styled.div`
display: flex;
margin-right: 20px;

`;
const Nav =styled.div`
margin: 30px;
font-weight: 900;
font-size: 22px;
transition: all 250ms;

:hover{
    color: #f19a33;
    cursor: pointer;
}
`;
const Container =styled.div`
z-index: 10;
width: 100%;
height: 100px;
background-color: #fff;
color: black;
box-shadow: rgb(0 0 0 / 29%) 0px 26px 30px -10px;
`;
const Wrapper =styled.div`
width: 100%;
height: 100px;
display: flex;
align-items: center;
justify-content: space-between;
`;