import React, { useState } from 'react'
import {DetailHeader,DropDownMenu,HeaderList,EachList,ShortName} from "./StyledComponent.js"
import { useNavigate } from 'react-router-dom'



function DetailsHeader(){
    const [isMenuOpen, SetIsMenuOpen]=useState(false)
    const Navigate=useNavigate()

    const toggleMenu=()=>{
        SetIsMenuOpen(!isMenuOpen)

    }

    const navigate_About=(value)=>{
        console.log(value)
        Navigate(`/Ram/${value}`)
    }

    return(
        <DetailHeader>
            <ShortName>
                Ram Javvadi
            </ShortName>
            <DropDownMenu onClick={toggleMenu}>Drop Down Menu</DropDownMenu>
            <HeaderList menuopen={(isMenuOpen)?'open':'closed'}>
                <EachList onClick={() => navigate_About('home')}>Home</EachList>
                <EachList onClick={() => navigate_About('CodeContent')}>Code content</EachList>
                <EachList> Contact</EachList>
                <EachList onClick={() => navigate_About('About')}>About</EachList>
            </HeaderList>   
        </DetailHeader>
    )
}



export default DetailsHeader
