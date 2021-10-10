import React from 'react'
import styled from 'styled-components'
import HeaderCompt from './HeaderCompt';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import Comp3 from './Comp3';


const HomePage = () => {
    return (
       <Container>
           <Wrapper>
               <HeaderCompt/>
               <Comp1/>
               < Comp2/>
               <Comp3/>
           </Wrapper>
       </Container>
    )
}

export default HomePage;

const Container =styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
background-color:lightgray;
z-index: -10;
`;
const Wrapper =styled.div`
display: flex;
flex-direction: column;
`;