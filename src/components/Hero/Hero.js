import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
    return (
        <HeroSection>
            <HeroVideo src="./assets/video-2.mp4" autoPlay muted />
            <Container>
                <MainHeading>AV BOSS MAINTENANCE AND SUPPLIES</MainHeading>
                <HeroText>
                    Here we provide the best of quality supplies and maintenances needed in Bulk
                </HeroText>
                <ButtonWrapper>
                    <Link to="signup">
                        <Button>Get Started</Button>
                    </Link>
                    <Link to="/pricing">
                        <HeroButton>Check New Products</HeroButton>
                    </Link>

                </ButtonWrapper>
            </Container>
        </HeroSection>
    );
};

export default Hero;