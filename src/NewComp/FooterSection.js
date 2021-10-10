import React from 'react'
import styled from 'styled-components'
import {FaFacebookF}from 'react-icons/fa';
import {BsInstagram, BsTwitter}from 'react-icons/bs';
import {AiFillYoutube}from 'react-icons/ai';

const FooterSection = () => {
    return (
        <Container>
            <Wrapper>
                <Section>
                <SubWrap>
                    <Div>You Can find us at</Div>
                </SubWrap>
                <IconBox>
                <IconNav><FaFacebookF/></IconNav>
                <IconNav><BsInstagram/></IconNav>
                <IconNav><AiFillYoutube/></IconNav>
                <IconNav><BsTwitter/></IconNav>
                </IconBox>
                </Section>
                </Wrapper>
                <List>
                    <Title>Product</Title>
                    <Title>Product</Title>
                    <Title>Product</Title>
                    <Title>Product</Title>
                    </List> 
                    <SubList>
                        <Desc>Project</Desc>
                        <Desc>Project</Desc>
                        <Desc>Project</Desc>
                        <Desc>Project</Desc>
                    </SubList>                  
                    <SubList>
                        <Desc>Project</Desc>
                        <Desc>Project</Desc>
                        <Desc>Project</Desc>
                        <Desc>Project</Desc>
                    </SubList>                  
                    <SubList>
                        <Desc>Project</Desc>
                        <Desc>Project</Desc>
                        <Desc>Project</Desc>
                        <Desc>Project</Desc>
                    </SubList>                  
                    <SubList>
                        <Desc>Project</Desc>
                        <Desc>Project</Desc>
                        <Desc>Project</Desc>
                        <Desc>Project</Desc>
                    </SubList>  
                    <Last>
                        <Image/>
                        <CopyRight>Copyright 2021 Diamond</CopyRight>
                        </Last>      
        </Container>
    )
}

export default FooterSection;

const Image =styled.div`
width: 150px;
height: 30px;
background-color:white;
`;
const Last =styled.div`
width: 100%;
height: 80px;
background-color: red;
display: flex;
justify-content: center;
align-items: center;
`;
const CopyRight =styled.div`
font-size: 15px;
`;
const List =styled.div`
display:flex;
justify-content: space-around;

`;
const SubList =styled.div`
display:flex;
justify-content: space-around;
`;

const Desc =styled.div`
font-size: 20px;
text-align: center;
`;
const Div =styled.div``;
const Section =styled.div``;
const SubWrap =styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
const IconBox =styled.div`
display: flex;
justify-content: center;
align-items: center
margin-top: 20px;
`;
const Title=styled.div`
font-size: 30px;
font-weight: bold;
margin-top: 20px;
margin-bottom: 20px;
`;
const IconNav =styled.div`
width: 80px;
height: 50px;
background-color: white;
margin: 5px;
color:black;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
`;
const Container=styled.div`
width: 100%;
height: 100%;
min-height:50vh;
background-color: #1a1a1a
`;
const Wrapper=styled.div`
dispay:flex;
justify-content: center;
`;