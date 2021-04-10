import React from "react";
import logoImage from '../img/logo.png';

import 'semantic-ui-css/semantic.min.css';
import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Image,
    List,
    Menu,
    Segment,
    Label
  } from 'semantic-ui-react'

export default props => {
  return (
    <Container textAlign='center' style={{marginTop: "1em"}}>
            <Grid  stackable  >
              <Grid  >
                <List link >
                <Image src={ logoImage }/>
                </List>
              </Grid>
             
              <Grid width={2} className="list-column desktop-list-link">
                <List link >
                  <List.Item as='a'><p className="list-item desktop-link">étude en ligne</p></List.Item>
                </List>
              </Grid>
              <Grid  className="list-column desktop-list-link">
               l
              </Grid>
              <Grid width={2} className="list-column desktop-list-link">
                <List link >
                  <List.Item as='a'><p className="list-item desktop-link">guides</p></List.Item>
                </List>
              </Grid>
              <Grid  className="list-column desktop-list-link">
               l
              </Grid>
              <Grid width={2} className="list-column desktop-list-link" >
                <List link >
                  <List.Item as='a' ><p className="list-item desktop-link">actualités</p></List.Item>
                </List>
              </Grid>
              <Grid  className="list-column desktop-list-link">
               l
              </Grid>
              <Grid width={3} className="list-column desktop-list-link"  >
                <List link   >
                  <List.Item as='a' ><p className="list-item desktop-link">qui sommes-nous ?</p></List.Item>
                </List>
              </Grid>
              <Grid  className="list-column desktop-list-link">
               l
              </Grid>
              <Grid width={2} className="list-column desktop-list-link">
                <List link >
                  <List.Item as='a'><p className="list-item desktop-link">contact</p></List.Item>
                </List>
              </Grid>
              
            </Grid>
          </Container>
  );
};




