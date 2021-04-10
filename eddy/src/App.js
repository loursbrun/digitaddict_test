import React from 'react';
import './App.css';
import { createMedia } from "@artsy/fresnel";
import MobileMenu from './components/MobileMenu';
import logoImage from './img/logo.png';

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


const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    desktop: 1024
  },
})

function App() {
  return (
    <div className="App">

      <MediaContextProvider>
        {/* Header */}
          <Media at="mobile">
            <MobileMenu styles={{float:"right"}} /> 
          </Media>
          <Media at="tablet">
            tablet
          </Media>
          <Media greaterThanOrEqual="desktop">
            desktop
          </Media>

           {/* Content */}
           
         
          <p>
            A text container is used for the main container, which is useful for single column layouts.
          </p>


        

           {/* Footer */}
           
          <Media greaterThanOrEqual="tablet">
          
          <Container textAlign='center'>
            <Grid  stackable>
              <Grid.Column width={3} className="list-column">
                <List link >
                <Image src={ logoImage }/>
                </List>
              </Grid.Column>
              <Grid.Column width={3} className="list-column">
                <List link >
                  <List.Item as='a'><p className="list-item">qui sommes-nous ?</p></List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3} className="list-column">
                <List link >
                  <List.Item as='a'><p className="list-item">Mentions légales</p></List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3} className="list-column">
                <List link >
                  <List.Item as='a'><p className="list-item">plan du site</p></List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3} className="list-column">
                <List link >
                  <List.Item as='a'><p className="list-item">contact</p></List.Item>
                </List>
              </Grid.Column>
            </Grid>
          </Container>
        
          </Media>

          
          <Container textAlign='center'>
            <Divider inverted section />
           
            <Container >
              <p style={{ fontSize: "8px" }}>
                Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager.
              </p>
              <p style={{ fontSize: "8px" }}>
                Aucun versement de quelque nature que ce soit, ne peut être exigé d'un particulier, avant l'obtention d'un ou plusieurs prêts d'argent.
              </p>
              <br />
              <p style={{ fontSize: "8px" }}>
                La diminution du montant des mensualités entraine l'allongement de la durée de remboursement et majore le coût total du crédit. La réduction dépend de la durée restante des prêts rachetés.
              </p>
              <br />
              <br />
              <p style={{ fontSize: "8px" }}>
                eddy® - Tous droits réservés - 2019
              </p>
            </Container>
          </Container>
      

      </MediaContextProvider>


      

    </div>
  );
}

export default App;
