import React from 'react'
import styled from 'styled-components'
import img from '../NewComp/proimg.jpg'

const HeroSection = () => {
    return (
        <Container>
            <Wrapper>
            <BoxContent>
                    <Title>Ajayi-Obisesan Tofunmi</Title>
                    <Desc>I finished from Lagos State University. I'm 
                        currently on internship at Lofty Inc as a team member working 
                        on a project. i am alsoan Entreprenuer and Activist.
                        I love singing acting and reading.
                    </Desc>
                    <Div>
                    <Button>View CV</Button>
                    <Button>Button</Button>
                    </Div>
                </BoxContent>
                 <ImageMother>
                    <ImageHolder><Image src= {img}/></ImageHolder>
                </ImageMother>
            </Wrapper>
        </Container>
    )
}

export default HeroSection;


const Div = styled.div``;

const Title =styled.div`
font-size: 25px;
font-weight: bold;
text-transform: uppercase;
text-align: center;
margin-bottom: 20px;
`;
const Desc =styled.div`
font-size: 20px;
margin-bottom: 40px;
color: #1a1a1a;
text-spacing: 1px;
text-align: center;

`;
const BoxContent =styled.div`
width: 400px;
margin: 30px;
`;
const Button =styled.button`
margin: 0 10px;
margin-left: 50px;
width: 100px;
height: 40px;
background-color: transparent;
color: black;
font-weight: bold;
border: 2px solid white;
border-radius: 10px;
transition: all 400ms;
transform: scale(1);

:hover{
    cursor:pointer;
    transform: scale(1.05);
    border: 2px solid black;
    color: ${({clr}) => (clr ? "black":"lightgray")};
}
`;
const ImageMother =styled.div`
width: 500px;
height: 500px;
position: relative;

`;
const ImageHolder =styled.div`
width: 450px;
height: 450px;
right: -150px;
bottom: 40px;
position: absolute;
background-color: white;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
`;
const Image =styled.img`
width: 450px;
height: 450px;
border-radius: 50%;
object-fit: cover;
position: absolute;
bottom: -30px;
right: 150px;
`;
const Container =styled.div`
width: 100%;
height: 100%;
min-height: 80vh;
background-image: linear-gradient(80deg,#de5499,#52ab98);
`;
const Wrapper =styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;

`;