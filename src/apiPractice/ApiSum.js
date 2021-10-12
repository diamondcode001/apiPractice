import React from 'react'
import styled from 'styled-components';
import HeaderFile from './HeaderFile';
import MovieFile from './MovieFile';
import MovieDetails from './MovieDetails';

const ApiSum = () => {
    return (
      <Container>
          <Wrapper>
              <HeaderFile/>
              <MovieFile/>
              <MovieDetails/>
          </Wrapper>
      </Container>
    )
}

export default ApiSum;

const Container =styled.div``;
const Wrapper =styled.div``;