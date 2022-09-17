import './App.css';
import CategoryComp from './components/CategoryComp';
import FooterComp from './components/FooterComp';
import HeadlineComponent from './components/HeadlineComponent';
import HeroComponent from './components/HeroComponent/HeroComponent';
import Navbar from './components/NavbarComp/Navbar';
import SubscriptionComp from './components/SubscriptionComp';
import TopRatedMenuComp from './components/TopRatedMenuComp';

function App() {
  return (
    <div>
      <Navbar />
      <HeroComponent />
      <HeadlineComponent />
      <TopRatedMenuComp />
      <CategoryComp />
      <SubscriptionComp />
      <FooterComp />
    </div>
  );
}

export default App;
