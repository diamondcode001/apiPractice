import React from 'react'
import styled from 'styled-components';
import data from './data.json';
import {useState, useEffect} from 'react'
import { useParams} from 'react-router-dom'

const MovieDetail = () => {
    const {id}= useParams();

    const [MyData, setMyData] = useState ();

    useEffect(()=> {
        setMyData (data[id-1]);
        });
    return (

       <Container>
           <Background src = {"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B409C2A425D58C32D822EB633C7CAE3DC910DC2FC62D2B1807A0BB092C531E9A/scale?width=1440&aspectRatio=1.78&format=jpeg"
}/>
            <Wrapper>
              props
           </Wrapper>
       </Container> 
    )
}

export default MovieDetail;


const Sub =styled.div``;
const Image =styled.img`
width: 500px;
height: 300px;
background-color: red;
`;
const Desc =styled.div``;
const Title =styled.div`
font-size: 30px;
font-weight: 900;
text-transform: uppercase;
margin-bottom:
`;
const Div = styled.div``;
const Background =styled.img`
width: 100%;
height: 100vh;
position: relative;
object-fit: cover;
`;
const Container =styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
`;
const Wrapper =styled.div`
position: absolute;
top: 0;
bottom: 0;
display:flex;
flex-direction: column;
font-size: 100px;
padding-top: 300px;
`;