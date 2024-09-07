import React from 'react';
import {SocialLinks,StyledFontAwesomeIcon,ContactDetailsName,LinkDetails} from "./StyledComponent.js"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';



const ContactDetails = () => {
    return (
        <SocialLinks className="social-links">
            <ContactDetailsName>
                {/* Contact Details */}
            </ContactDetailsName>
            <LinkDetails>
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                <StyledFontAwesomeIcon icon={faLinkedin}  />
            </a>
            <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                <StyledFontAwesomeIcon icon={faTwitter}  />
            </a>
            <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
                <StyledFontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
                <StyledFontAwesomeIcon icon={faWhatsapp}  />
            </a>
            </LinkDetails>
        </SocialLinks>
    );
};


export default ContactDetails