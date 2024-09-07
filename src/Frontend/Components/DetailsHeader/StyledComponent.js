import styled from "styled-components";

const media = {
  mobile: `(max-width: 767px)`,
  desktop: `(min-width: 768px)`,
};

// Checkbox for handling click on mobile devices


const DetailHeader = styled.div`
  color: white;
  @media ${media.desktop} {
    display: flex;
  }
`;

const DropDownMenu = styled.label`
  @media ${media.desktop} {
    display: none;
  }
  @media ${media.mobile} {
    display: block;
    position: relative;
    border: 1px solid white;
    text-align: center;
    cursor: pointer;
  }
`;

const HeaderList = styled.ul`
  @media ${media.desktop} {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  @media ${media.mobile} {
    display: ${(props)=>{
       if(props.menuopen==='open'){
        return 'block'
       }
       else{
        return 'none'
       }
    }};
    flex-direction: column;
    position: relative;
    margin: 0 auto;
    left: 0;
    right: 0;
    text-align: center;
    border: 1px solid white;
  }
`;


const EachList = styled.li`
  list-style-type: none;
`;

const ShortName = styled.p`
  @media ${media.desktop} {
    flex: 1;
  }
  text-align: center;
`;



export { DetailHeader, HeaderList, EachList, ShortName, DropDownMenu };
