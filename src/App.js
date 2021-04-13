import './App.css';
import tw from 'twin.macro';
import { css } from '@emotion/css'
import 'node-waves/src/scss/waves.scss';

import Home from './components/Home'
import NavBar from './components/NavBar'
import VideoPlayList from './components/VideoPlaylist'
import Property from './components/Property';
import Affiliates from './components/Affiliates';
import Footer from './components/Footer';


function App() {
  return (
    <div className={`${css(tw`font-sans`)} App`}>
      <NavBar />
      <Home />
      <VideoPlayList />
      <Property />
      <Affiliates />
      <Footer />
    </div> 
  );
}

export default App;
