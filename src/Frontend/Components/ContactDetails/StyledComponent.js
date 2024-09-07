import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const media = {
    mobile: `(max-width: 767px)`,
    desktop: `(min-width: 768px)`,
  };
  

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    `;

const ContactDetailsName=styled.div`
flex:1;
text-align:center;
@media ${media.mobile} {
    display: none;
}

`
const SocialLinks=styled.div`
color:white;
/* border:1px solid white;  */
padding: 20px;
display: flex;
@media ${media.mobile}{
    margin-top:4%;
    justify-content:space-evenly ;
}
`
const LinkDetails=styled.div`
flex:1;
display:flex;
justify-content: space-around;
`
export {SocialLinks,StyledFontAwesomeIcon,ContactDetailsName,LinkDetails}