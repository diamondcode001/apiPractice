import React from 'react'
import styled from 'styled-components'
import {GiLetterBomb} from 'react-icons/gi'

const ContactSection = () => {
    return (
        <Container>
            <Wrapper>
               <NewsHolder>
               <NewsWrap>
                   <span><GiLetterBomb/></span>
                    <Title>Newsletter</Title>
                    <Desc>Subscribe to our Newsletter and stay updated</Desc>
                        <ButtonBox>
                        <Input  placeholder='Enter Your Email'/>
                        <Button>Subscribe</Button>
                        </ButtonBox>
                </NewsWrap>
                   </NewsHolder>
            </Wrapper>
        </Container>
    )
}

export default ContactSection;

const Input =styled.input`
border: 2px solid lightgray;
outline: none;
border-radius: 30px;
margin-right: 10px;
width: 250px;
height: 45px;
background-color: lightgray;
padding-left: 15px;

`;
const ButtonBox=styled.div`
width: 500px;
height: 50px;
display: flex;
justify-content: space-between;
align-items: center;

`;
const Button =styled.button`
border: 2px solid lightgray;
outline: none;
border-radius: 30px;
width: 150px;
height: 50px;
background-color: #52ab98;
color: white;
font-size: 15px;
font-weight: bold;
`;
const Desc =styled.div`
font-size: 20px;
text-align: center;
margin-bottom: 40px;

`;
const Title =styled.div`
font-size: 30px;
font-weight: bold;
text-transform: uppercase;
letter-spacing: 1px;
text-align: center;
margin-top: 30px;
margin-bottom: 30px;
`;

const NewsHolder =styled.div`
width: 50%;
height:350px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 20px;
margin-top: 80px;
background-color: white;
`;
const NewsWrap =styled.div`

span{
    font-size: 100px;
    display: flex;
    justify-content: center;
}

`;
const Container =styled.div`
width: 100%;
height: 100%;
min-height: 80vh;
background-color: #52ab98;
color: black;

`;
const Wrapper =styled.div`
display: flex;
justify-content: center;
width: 100%;
height: 100%;



`;