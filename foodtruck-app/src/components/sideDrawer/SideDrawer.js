import React from 'react';
import styled from 'styled-components';

const StyledSideDrawer = styled.div `
    display:flex;
    height:100vh;
    background-color: #CF3E4D;
    box-shadow: 2px 0px 5px rgba(0,0,0,0.5);
    top:0;
    left:0;
    width: 300px;
    position: fixed;
    color: white;
    z-index: 200;
    justify-content: center;
    transform: translateX(${props => (props.show ? "0" : "-100%")});
    transition: all .4s ease-in-ou;

    ul{
        width: 200px; 
        height:100%;
        list-style:none;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    li{
        padding: 10px;
        :hover{
            cursor: pointer;
            background-color: #F2F5F0;
            color: black;
        }
    }
    
`

const SideDrawer = ({ show, close }) => {

    return (
        <StyledSideDrawer show={show} onClick={close}>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                </ul>
            </nav>
        </StyledSideDrawer>
    )
}

export default SideDrawer