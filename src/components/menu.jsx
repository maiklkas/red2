import React from "react";
import {SideNav, Icon, SideNavItem, Button} from "react-materialize";


export const Menu = () => (

    <div>

        <SideNav
            options={{
                draggable: true,
                edge: 'right',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
            trigger={<Button node="button">SIDE NAV DEMO</Button>}
        >

            <SideNavItem
                href="#!icon"
                icon={<Icon>cloud</Icon>}
            >
                First Link With Icon
            </SideNavItem>
            <SideNavItem href="#!second">
                Second Link
            </SideNavItem>
            <SideNavItem divider />
            <SideNavItem subheader>
                Subheader
            </SideNavItem>
            <SideNavItem
                href="#!third"
                waves
            >
                Third Link With Waves
            </SideNavItem>
        </SideNav>
    </div>
)
