import './App.css';
import HeadlineComponent from './components/HeadlineComponent';
import HeroComponent from './components/HeroComponent/HeroComponent';
import Navbar from './components/NavbarComp/Navbar';
import TopRatedMenuComp from './components/TopRatedMenuComp';

function App() {
  return (
    <div>
      <Navbar />
      <HeroComponent />
      <HeadlineComponent />
      <TopRatedMenuComp />
    </div>
  );
}

export default App;
