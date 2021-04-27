import './App.css';
import Hero from './Components/Hero/Hero';
import WhiteSection from './Components/WhiteSection/WhiteSection';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero heroBannersrc="./Images/hero-vector.png" />
      <WhiteSection />
    </div>
  );
}

export default App;
