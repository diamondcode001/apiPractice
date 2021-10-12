import React from 'react'
import styled from 'styled-components';
import HeaderFile from './HeaderFile';
import MovieFile from './MovieFile';
import MovieDetail from './MovieDetail';

const ApiSum = () => {
    return (
      <Container>
          <Wrapper>
              <HeaderFile/>
              <MovieFile/>
              <MovieDetail/>
          </Wrapper>
      </Container>
    )
}

export default ApiSum;

const Container =styled.div``;
const Wrapper =styled.div``;