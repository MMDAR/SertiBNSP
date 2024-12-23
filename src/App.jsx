import './App.css'
// import'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer'
import Header from './components/Header'
import Services from './components/Services';
import Navbar from './components/Navbar'
import React, {useContext, createContext} from 'react';
import Portfolio from './components/Portfolio';

const UserContext = createContext();
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

function UserProfile(){
  const user = useContext(UserContext);
  return (
    <div>
      <h2>User Profile</h2>
      <p>Welcome, {user.name}!</p>
    </div>
  )
}

export default App;