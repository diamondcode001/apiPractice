import React from 'react'
import styled from 'styled-components'
import{FaFacebookF} from 'react-icons/fa'
import{BsInstagram,BsTwitter} from 'react-icons/bs'
import{AiFillYoutube} from 'react-icons/ai'

const FooterSection = () => {
    return (
        <Container>
            <Wrapper>
            <Title>You Can Find Us At</Title>
            </Wrapper>
            <FooterTop>
                <IconBox><FaFacebookF/></IconBox>
                <IconBox><BsInstagram/></IconBox>
                <IconBox><BsTwitter/></IconBox>
                <IconBox><AiFillYoutube/></IconBox>
            </FooterTop>
            <FooterCenter>
            <Header>Product</Header>
            <Sub>
                <HeaderSub>Project</HeaderSub>
                </Sub>
            </FooterCenter>
            <FooterLast>last</FooterLast>
        </Container>
    )
}

export default FooterSection;

const HeaderSub =styled.div``;
const Sub =styled.div``;
const Header =styled.div`
font-size: 20px;
font-weight: bold;
`;
const Title =styled.div`
font-size: 30px;
font-weight: bold;
`;
const IconBox=styled.div`
width: 70px;
height: 40px;
font-size: 30px;
background-color: white;
color: black;
margin: 10px;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;

`;
const FooterTop =styled.div`
width: 100%;
height: 55px;
display: flex;
justify-content: center;
align-items: center;

`;
const FooterCenter =styled.div`
width: 100%;
height: 250px;
background-color: blue;
display: flex;
justify-content: space-around;
`;
const  FooterLast=styled.div`
width: 100%;
height: 80px;;
background-color: pink;
`;
const Container =styled.div`
width: 100%;
height: 100%;
min-height: 70vh;
background-color: #1a1a1a
color: white;
`;
const Wrapper =styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 55px;

`;