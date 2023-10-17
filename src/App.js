import './App.css';
import Biography from './Components/Biography';


function App() {
  return (
    <div className="App">
      <header>
        <div className='header-logo'> <img src= {require('./images/header-logo.png')} alt= 'Logo de final fantasy VII Rebirth'/> </div> 
        <div className='header-cloud'>Cloud</div> 
        <div className='header-tifa'>Tifa</div> 
        <div className='header-aerith'>Aerith</div>
      </header>
      <div className='main-container'>
      <h1> Final Fantasy VII remake characters</h1>
      <Biography name='Cloud Strife' 
                role='Ex-SOLDIER' 
                img='1' /*Esta funciona con props que llama a una serie de imagenes en este caso character-1*/ 
                description='An arrogant and proud swordsman at first, Cloud introduces himself to Avalanche as a former member of an elite warrior unit called SOLDIER who has turned mercenary, and uninterested in anything beyond his hired task at hand. Beneath his hardened outer persona is a softer, more caring individual who simply struggles to open up, but is striving to be a hero.'/>
      <Biography name='Tifa Lockhart'
                  role='Avalanche Member'
                  img='2'
                  description='Tifa is the childhood friend of Cloud and the  owner of the 7th Heaven bar in the slums of Midgar and a member of the eco-terrorist group. Tifa is reserved, moral, and empathic, acting as a motherly figure towards her allies when providing encouragement and emotional support. She also serves as the voice of reason grounding them to think things through and do the right thing'/>      
      <Biography name='Aerith Gainsborough'
                 role='Flower Peddler'
                 img='3'
                 description='Aerith is a flower peddler living in the Sector 5 slums, Aerith has been under Shinra surveillance all her life because of her unique background. Capable of sensing the life force, she offers magical support to her comrades. the last of the Cetra, an ancient race with powerful magical abilities, Aerith is upbeat, carefree, and joyful, being flirtatious towards Cloud and compassionate towards others.'/>               
      </div>
    </div>
  );
}

export default App;
