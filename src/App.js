import logo from './logo.svg';
import './App.css';
import HomeComponent from './components/HomeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'

function App() {
  return (
    <div>
      <HeaderComponent />
      <HomeComponent/>
      <FooterComponent />
    </div>
  );
}

export default App;