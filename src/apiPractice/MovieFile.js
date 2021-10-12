import React from 'react'
import styled from 'styled-components';
import data from './data.json';
import {Link} from 'react-router-dom'

const MovieFile = () => {
    return (
      <Container>
          <Wrapper>
            {data?.map((props,i)=>(
              <Card key ={i} to={`/detail/${props}`}>
              <Image src = {props.cardImg }/>
                <Div/>

              <Name>{props.title}</Name>
            </Card>
            ))};
          </Wrapper>
      </Container>
    );
};

export default MovieFile;

const Div =styled.div`
width: 450px;
height: 500px;
border-radius: 10px;
background-color: rgba(0, 0, 0, 0.5);
position: absolute;
left: 0;
top: 0;

:hover{
  background-color: rgba(0, 0, 0, 0);
}
`;

const Card =styled(Link)`
width: 450px;
height: 500px;
background-color: lightgray;
border-radius: 10px;
position: relative;
transition: all 350ms;
transform: scale(1);
margin: 10px;

:hover{
  cursor: pointer;
  transform: scale(1.01);
  box-shadow: 2px 2px 7px 1px rgba(0, 0, 0, 0.6);
}
`;
const Name =styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0px;
left: 0px;
padding-bottom: 10px;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
margin: 0 10px;
color: white;
font-size: 20px;
font-weight: 300;
transition: all 350ms;
opacity: 0;

:hover{
  opacity: 1;

}
`;

const Image =styled.img`
width: 100%;
height: 100%;
border-radius: 10px;
object-fit: cover;
`;

const Container =styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
background-color: white;
padding-top: 50px;
color: white;
`;
const Wrapper =styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`;