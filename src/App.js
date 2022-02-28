import React from 'react';
import Accueil from './components/page/Accueil';
import './App.css';

function App() {
  return (
    <div className="App">
       <Accueil />
       <a href="#" className="lien_menu">About</a>
       <a href="#" className="lien_menu">Help Center</a>
       <a href="#" className="lien_menu">Terms of Service</a>
       <a href="#" className="lien_menu">Privacy Policy</a>
       <a href="#" className="lien_menu">Cookie Ploicy</a>
       <a href="#" className="lien_menu">Ads Info</a>
       <a href="#" className="lien_menu">Blog</a>
       <a href="#" className="lien_menu">Status</a>
       <a href="#" className="lien_menu">Careers</a>
       <a href="#" className="lien_menu">Brand Resources</a>
       <a href="#" className="lien_menu">Advertissing</a>
       <a href="#" className="lien_menu">Marketing</a>
       <a href="#" className="lien_menu">Twitter for Business</a>
       <a href="#" className="lien_menu">Developers</a>
       <a href="#" className="lien_menu">Directory</a>
       <a href="#" className="lien_menu">Settings</a>
       
       <p className="dev_by">© 2021 Twitter, Inc.</p>
    </div>
  );
}

export default App;
