import './App.css';
import { createMedia } from "@artsy/fresnel";
import MobileMenu from './components/MobileMenu'; 


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
          <Media at="mobile">
            <MobileMenu/>
          </Media>
          <Media at="tablet">
            tablet
          </Media>
          <Media greaterThanOrEqual="desktop">
            desktop
          </Media>
      </MediaContextProvider>
     
    </div>
  );
}

export default App;
