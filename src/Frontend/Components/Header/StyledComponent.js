// import styled from '@emotion/styled'
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const media = {
    mobile: `(max-width: 767px)`,
    desktop: `(min-width: 768px)`,
  };
  
  
  
 


const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    width:50px;
    padding: 4px;
    margin: 4px;
    `;


const HeaderDiv = styled.div`
/* border:1px solid white; */
color:white;
display:flex;
justify-content:space-around;
align-items:center;
@media ${media.desktop} {
padding: 3%;
}
@media ${media.mobile} {
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
}
`;

const DetailDiv=styled.div`
@media ${media.desktop} {
  display: flex;
  flex-direction: column;
width: 400px;
}
@media ${media.mobile} {
      order: 2;
}

`
const ProfilePic=styled.img `
    width: 30%;
    border-radius:60% 15%;
    position:relative;
    opacity:0.4;
    @media ${media.mobile} {
      order: 1;
}
`

const Details=styled.div`
    font-size: 60px;
    position:relative;
    opacity:0.7;
    font-family: "Times New Roman", Times, serif;
    @media ${media.mobile} {
    font-size: 40px;
      margin-top: 4%;
    }
`

const DetailTitle=styled.div`
font-size: 30px;
color: brown;
padding: 2%;
font-family: "Times New Roman", Times, serif;
@media ${media.mobile} {
  margin-top:4%;
}
`


const DetailData=styled.div`
opacity: 0.7;
padding: 2%;
font-family: "Times New Roman", Times, serif;
@media ${media.mobile} {
  margin-top:4%;
}
`

const ContactIcons=styled.div`
/* border: 1px solid white; */
margin-top: 4%;
`

const EachIcon=styled.a`

`

export  {EachIcon,StyledFontAwesomeIcon,HeaderDiv,DetailDiv,ProfilePic,Details,DetailTitle,DetailData,ContactIcons} ;