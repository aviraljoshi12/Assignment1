
import './App.css';
import AppComponent from './Components/AppComponent';
import FirstComponent from './Components/FirstComponent';
import NamedComponent from './Components/NamedComponent';
import SecondComponent from './Components/SecondComponent';
import TweetComponent from './Components/TweetComponent';
import Appp from './Components/Appp';

function App() {
  return (
    <div className="App">
     <FirstComponent />
     <SecondComponent />
     <NamedComponent name="Aviral"/>
    
     <AppComponent />

     <Appp />

    


    </div>
  );
}

export default App;
