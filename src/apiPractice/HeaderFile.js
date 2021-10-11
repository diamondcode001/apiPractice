import React from 'react'
import styled from 'styled-components';

const HeaderFile = () => {
    return (
        <Container>
            <Wrapper>HeaderFile</Wrapper>
        </Container>
    )
}

export default HeaderFile;

const Container =styled.div`
width: 100%;
height: 100px;
background-color: red;
`;
const Wrapper=styled.div`
height: 100px;
display: flex;
align-items: center;
`;
