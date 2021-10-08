import React from 'react'
import styled from 'styled-components'
import HeaderComp from './HeaderComp';
import HeroSection from './HeroSection';
import ServiceSection from './ServiceSection';
import VideoSection from './VideoSection';
import ContactSection from './ContactSection';
import FooterSection from './FooterSection';

const SumFile = () => {
    return (
        <Container>
            <Wrapper>
                <HeaderComp/>
                <HeroSection/>
                <ServiceSection/>
                <VideoSection/>
                <ContactSection/>
                <FooterSection/>
            </Wrapper>
        </Container>
    )
}

export default SumFile;;

const Container =styled.div``;
const Wrapper =styled.div``;