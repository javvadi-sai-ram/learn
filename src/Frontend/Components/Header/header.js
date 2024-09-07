import React from 'react';
import { useSelector } from 'react-redux';
import {
  HeaderDiv,
  ProfilePic,
  Details,
  DetailTitle,
  DetailData,
  DetailDiv,
  StyledFontAwesomeIcon,
  ContactIcons,
  EachIcon
} from "./StyledComponent";
import {  faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt,faEnvelope } from '@fortawesome/free-solid-svg-icons';  // Correct package

function Header() {
  const resume = useSelector((state) => state.saiResume);

  return (
    <div>
      {resume.data && (
        <HeaderDiv>
          <DetailDiv>
            <Details>{resume.data.personal.name}</Details>
            <DetailTitle>{resume.data.personal.title}</DetailTitle>
            <DetailData>{resume.data.personal.Data}</DetailData>
            <ContactIcons>
              <EachIcon href="tel:+1234567890" target="_blank" rel="noopener noreferrer">
                <StyledFontAwesomeIcon icon={faMobileAlt} />  {/* Mobile icon */}
              </EachIcon>
              <EachIcon href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
                <StyledFontAwesomeIcon icon={faWhatsapp} />
              </EachIcon>
              <EachIcon href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
                <StyledFontAwesomeIcon icon={faEnvelope} />  {/* Email icon */}
              </EachIcon>
            </ContactIcons>
          </DetailDiv>
          <ProfilePic src={`${process.env.PUBLIC_URL}/images/319-removebg-preview.jpg`} alt="Logo" />
        </HeaderDiv>
      )}
    </div>
  );
}

export default Header;
