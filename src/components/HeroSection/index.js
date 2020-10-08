import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElements'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'

function HeroSection() {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover); 
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay looped muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1> Virtual Baking Made Easy</HeroH1>
                <HeroP>
                    Sing up for a new account today and receive $250 in credit towards your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
