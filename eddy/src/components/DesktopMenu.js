import React from "react";
import logoImage from '../img/logo.png';

import 'semantic-ui-css/semantic.min.css';
import {
    Container,
    Image,
    List,
    Menu
} from 'semantic-ui-react'

export default props => {
    return (
        <Container textAlign='center' style={{ marginTop: "1em" }} >



            <Menu borderless className="menu-desktop">
                <Menu.Item >
                     <Image src={ logoImage } size='small' className="logo-menu-desktop"/>
                 </Menu.Item>
              
                 <Menu.Menu position='right'>
                 <Menu.Item>
                    <List link >
                    <List.Item as='a'><p className="list-item desktop-link">étude en ligne</p></List.Item>
                    </List>
                 </Menu.Item>
                 <div style={{margin:"auto"}}>I</div>
                 <Menu.Item>
                    <List link >
                    <List.Item as='a'><p className="list-item desktop-link">guides</p></List.Item>
                    </List>
                 </Menu.Item>
                 <div style={{margin:"auto"}}>I</div>
                 <Menu.Item>
                    <List link >
                    <List.Item as='a'><p className="list-item desktop-link">actualités</p></List.Item>
                    </List>
                 </Menu.Item>
                 <div style={{margin:"auto"}}>I</div>
                 <Menu.Item>
                    <List link >
                    <List.Item as='a'><p className="list-item desktop-link">qui sommes-nous ?</p></List.Item>
                    </List>
                 </Menu.Item>
                 <div style={{margin:"auto"}}>I</div>
                 <Menu.Item>
                    <List link >
                    <List.Item as='a'><p className="list-item desktop-link">contact</p></List.Item>
                    </List>
                 </Menu.Item>
                
                </Menu.Menu>
            </Menu>

        </Container>
    );
};




