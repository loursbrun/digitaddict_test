import React from 'react';
import './App.css';
import { createMedia } from "@artsy/fresnel";
import MobileMenu from './components/MobileMenu';

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

      {/* <MediaContextProvider>
          <Media at="mobile">
            <MobileMenu styles={{float:"right"}} /> 
          </Media>
          <Media at="tablet">
            tablet
          </Media>
          <Media greaterThanOrEqual="desktop">
            desktop
          </Media>
      </MediaContextProvider> */}

const FixedMenuLayout = () => (
      <div>
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
          Project Name
        </Menu.Item>
            <Menu.Item as='a'>Home</Menu.Item>

            <Dropdown item simple text='Dropdown'>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Header Item</Dropdown.Header>
                <Dropdown.Item>
                  <i className='dropdown icon' />
                  <span className='text'>Submenu</span>
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>

        <Container text style={{ marginTop: '7em' }}>
          <Header as='h1'>Semantic UI React Fixed Template</Header>
          <p>This is a basic fixed menu template using fixed size containers.</p>
          <p>
            A text container is used for the main container, which is useful for single column layouts.
      </p>












        </Container>

        <Segment vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
          <Container textAlign='center'>
            <Grid  stackable>
              <Grid.Column width={3}>
                <List link >
                  <List.Item as='a' simple ><p className="list-item">Logo</p></List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <List link >
                  <List.Item as='a'><p className="list-item">qui sommes-nous ?</p></List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <List link >
                  <List.Item as='a'><p className="list-item">Mentions légales</p></List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <List link >
                  <List.Item as='a'><p className="list-item">plan du site</p></List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <List link >
                  <List.Item as='a'><p className="list-item">contact</p></List.Item>
                </List>
              </Grid.Column>
            </Grid>

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
        </Segment>
      </div>

    </div>
  );
}

export default App;
