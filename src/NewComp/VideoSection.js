import React from 'react'
import styled from 'styled-components'
import vid from './provid.mp4'

const VideoSection = () => {
    
    return (
        <Container>
            <Wrapper>
                <VideoWrap>
                <Video src ={vid}  controls loops autoplay />
                    </VideoWrap>
        </Wrapper>
        </Container>
    )
}

export default VideoSection;

const VideoWrap =styled.div`
display: flex;
justify-content: center;
`;
const Video =styled.video`
width: 90%;
height: 90%;
min-height: 80vh;
margin: 0 auto;
object-fit: cover;
`;
const Container =styled.div`
width: 100%;
height: 100%;
min-height: 80vh;
color: white;
`;
const Wrapper =styled.div`
display: flex;
justify-content: center;
`;