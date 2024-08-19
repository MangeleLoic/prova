
import './App.css';
import ButtonComponent from './components/NewComponent';
import ImageComponent from './components/ImageComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <ButtonComponent cssClass='text-style'/>

        <ImageComponent src='assets/download.jfif' alt= 'contea' />
      </header>
    </div>
  );
}

export default App;
