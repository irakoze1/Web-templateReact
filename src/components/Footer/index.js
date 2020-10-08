import React from 'react'
import {FaFacebook,FaInstagram,FaYoutube,FaTwitter,FaLinkedin} from 'react-icons/fa'
import {
    FooterContainer,FooterWrap, FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle, FooterLink,SocialMedia,SocialMediaWrap,SocialLogo,WebsiteRights,SocialIcons,SocialIconLink
} from './FooterElements'
import {animateScroll as scroll} from 'react-scroll'

const Footer =  () => {
    const toggleHome = () =>{
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us
                            </FooterLinkTitle>
                               <FooterLink to="/signin">How It Work Us</FooterLink> 
                               <FooterLink to="/signin">Testimonials</FooterLink> 
                               <FooterLink to="/signin">Carrers </FooterLink> 
                               <FooterLink to="/signin">Investors</FooterLink> 
                               <FooterLink to="/signin">Terms of Service</FooterLink> 
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos
                            </FooterLinkTitle>
                               <FooterLink to="/signin">How It Work Us</FooterLink> 
                               <FooterLink to="/signin">Testimonials</FooterLink> 
                               <FooterLink to="/signin">Carrers </FooterLink> 
                               <FooterLink to="/signin">Investors</FooterLink> 
                               <FooterLink to="/signin">Terms of Service</FooterLink> 
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us
                            </FooterLinkTitle>
                               <FooterLink to="/signin">How It Work Us</FooterLink> 
                               <FooterLink to="/signin">Testimonials</FooterLink> 
                               <FooterLink to="/signin">Carrers </FooterLink> 
                               <FooterLink to="/signin">Investors</FooterLink> 
                               <FooterLink to="/signin">Terms of Service</FooterLink> 
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media
                            </FooterLinkTitle>
                               <FooterLink to="/signin">How It Work Us</FooterLink> 
                               <FooterLink to="/signin">Testimonials</FooterLink> 
                               <FooterLink to="/signin">Carrers </FooterLink> 
                               <FooterLink to="/signin">Investors</FooterLink> 
                               <FooterLink to="/signin">Terms of Service</FooterLink> 
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Dolla
                        </SocialLogo>
                        <WebsiteRights>Dolla @ {new Date().getFullYear()}</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_brank" aria-label="Facebook">
                             <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_brank" aria-label="Instagram">
                             <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_brank" aria-label="Youtube">
                             <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_brank" aria-label="Twiiter">
                             <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_brank" aria-label="LinkedIn">
                             <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer 
