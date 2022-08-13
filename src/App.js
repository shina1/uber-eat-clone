import './App.css';
import HeadlineComponent from './components/HeadlineComponent';
import HeroComponent from './components/HeroComponent/HeroComponent';
import Navbar from './components/NavbarComp/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <HeroComponent />
      <HeadlineComponent />
    </div>
  );
}

export default App;
