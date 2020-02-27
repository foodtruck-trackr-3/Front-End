import React from "react";
import styled from "styled-components";
import DrawerToggleButton from "../sideDrawer/DrawerToggleButton";

const Toolbar = ({ drawerClickHandler, drawerClose }) => {
    const ToolbarHeader = styled.header`
        background-color: white;
        position: fixed;
        width: 100vw;
        height: 56px;
        left: 0;
        top: 0;
    `;

    const ToolbarNavigation = styled.nav`
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        padding: 0 1rem;
    `;

    const ToolbarNavigationItems = styled.div `
        a {
            color: black;
            text-decoration: none;
            :hover {
                background-color: gray;
            }
        }
        ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
        }

        li {
            padding: 10px;
            margin: 0 0.5rem;
            :hover {
                background-color: gray;
            }
        }
    `;

    const ToolbarLogo = styled.div `
        margin-left: 1rem;
        a {
            color: orange;
            text-decoration: none;
            font-size: 1.5rem;
        }
    `;

    const Spacer = styled.div`
        flex: 1;
    `;

    return (
        <ToolbarHeader>
            <ToolbarNavigation>
                <div />
                <DrawerToggleButton drawerClickHandler={drawerClickHandler} />
                <ToolbarLogo>
                    <a href="/">The Logo Here</a>
                </ToolbarLogo>
                <Spacer />
            <ToolbarNavigationItems>
                <ul>
                    <li>
                        {" "}
                        <a href="#">Sign In</a>
                    </li>
                    <li>
                        <a href="#">Log In</a>
                    </li>
                </ul>
            </ToolbarNavigationItems>
          </ToolbarNavigation>
        </ToolbarHeader>
    )
}


export default Toolbar;