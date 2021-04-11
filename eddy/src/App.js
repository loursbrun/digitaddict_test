import React, { useState } from 'react';
import './App.css';
import { createMedia } from "@artsy/fresnel";
import MobileMenu from './components/MobileMenu';
import DesktopMenu from './components/DesktopMenu';
import logoImage from './img/logo.png';
import fbImage from './img/fb.png';
import twitterImage from './img/twitter.png';

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
  Label,
  Button,
  Card,
  Checkbox,
  Form,
  Radio
} from 'semantic-ui-react'


const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    desktop: 1024
  },
})


function App() {

  // radio button value for genre
  const [value, setValue] = useState("");
  const handleChange = (event, { value }) => setValue(value);


  return (
    <div className="App">

      <MediaContextProvider>
        {/* Header */}
        <Media at="mobile">
          <MobileMenu styles={{ float: "right" }} />
          <Container >
            <Image src={logoImage} size='small' className="image-menu-mobile" />
          </Container>
        </Media>

        <Media greaterThanOrEqual="tablet">
          <DesktopMenu styles={{}} />
        </Media>

        {/* Content */}

        <Container style={{ marginTop: "40px" }}>
          <Header as='h1'>contact</Header>
          <Header as='h6' >Une demande particulière ? Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Header>
          <Form>
            <Form.Field>
              Selected value: <b>{value.value}</b>
            </Form.Field>
            <Form.Group >
              <p style={{ fontSize: "11px", marginLeft: "8px", width: "74px" }}>Civilité</p>
              <Radio
                value='male'
                checked={value === 'male'}
                onChange={handleChange}
              />
              <p style={{ fontSize: "11px", marginLeft: "10px", width: "74px" }}>Monsieur</p>
              <Radio
                value='female'
                checked={value === 'female'}
                onChange={handleChange}
              />
              <p style={{ fontSize: "11px", marginLeft: "10px", width: "74px" }}>Madame</p>

            </Form.Group>
            <Form.Field>
              <input className="input-field" style={{ backgroundColor:"#eaeaea", border:"0px", fontSize:"11px" }} placeholder='nom et prénom' />
            </Form.Field>
            <Form.Group widths='equal'>
              <Form.Field>
                <input className="input-field" style={{ backgroundColor:"#eaeaea", border:"0px", fontSize:"11px" }} placeholder='mon adresse mail' />
              </Form.Field>
              <Form.Field>
                <input className="input-field" style={{ backgroundColor:"#eaeaea", border:"0px", fontSize:"11px" }} placeholder='mon téléphone' />
              </Form.Field>
              <Form.Field>
              </Form.Field>
            </Form.Group>
            <Form.TextArea style={{ backgroundColor:"#eaeaea", border:"0px", fontSize:"11px" }}  rows={5} placeholder='' />

            <br/>
            <Button.Group floated="right">
               <Button className="submit-btn" type='submit'>Envoyer</Button>
             </Button.Group>
             <br/><br/>
          </Form>
        </Container>




          {/* Footer */}
          <Media at="mobile">
            <Container textAlign='center'>
              <br/><br/>
              <Menu.Menu position='right'>
                <Menu.Item>
                  <Button className="share-btn" style={{ backgroundImage: `url(${fbImage}) ` }} />
                  <Button className="share-empty" />
                  <Button className="share-btn" style={{ backgroundImage: `url(${twitterImage}) ` }} />
                </Menu.Item>
              </Menu.Menu>
            </Container>
          </Media>

          <Media greaterThanOrEqual="tablet">

            <Container textAlign='center'>
              <Menu borderless className="menu-desktop">
                <Menu.Item >
                  <Image src={logoImage} size='small' />
                </Menu.Item>

                <Menu.Menu position='right'>

                  <Menu.Item>
                    <List link >
                      <List.Item as='a'><p className="list-item ">qui sommes-nous ?</p></List.Item>
                    </List>
                  </Menu.Item>

                  <Menu.Item>
                    <List link >
                      <List.Item as='a'><p className="list-item ">mentions légales</p></List.Item>
                    </List>
                  </Menu.Item>

                  <Menu.Item>
                    <List link >
                      <List.Item as='a'><p className="list-item ">plan du site</p></List.Item>
                    </List>
                  </Menu.Item>

                  <Menu.Item>
                    <List link >
                      <List.Item as='a'><p className="list-item ">contact</p></List.Item>
                    </List>
                  </Menu.Item>

                </Menu.Menu>
              </Menu>

              <Menu borderless className="menu-desktop">
                <Menu.Menu position='right'>
                  <Menu.Item>
                    <Button className="share-btn" style={{ backgroundImage: `url(${fbImage}) ` }} />
                  </Menu.Item>

                  <Menu.Item>
                    <Button className="share-btn" style={{ backgroundImage: `url(${twitterImage}) ` }} />
                  </Menu.Item>
                </Menu.Menu>
              </Menu>



            </Container>

          </Media>


          <Container textAlign='center'>
            <Divider section className="divider" />

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
