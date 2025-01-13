import './App.css';
import React, { useState, useEffect } from "react";
import SettingsTableMain from './components/SettingsTable/SettingsTableMain';
import './components/SettingsTable/SettingsTableAdd'
import SettingsTableAdd from './components/SettingsTable/SettingsTableAdd';
import Poster from './components/Poster/Poster'

function App() {

  const [isVertical, setIsVertical] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsVertical(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
    <div className={isVertical? 'main-window-wrapper-vertical' : 'main-window-wrapper'}>
      <article className='poster'>
        <Poster/>
      </article>      
      <div className='poster-settings'>
        <header>
          <h1> Poster generator</h1>
          <p className='grey-text'> &gt; Press space to generate poster </p>
          <p className='grey-text'> &gt; Check a marker in the table to freeze the specified setting.  </p>
        </header>
        <main className='poster-settings-body'>
            <SettingsTableMain/>
            <SettingsTableAdd/>
            <label htmlFor="button">
            <button className='button-clear'> Clear all Marks </button>
            </label>
        </main>
        <footer>
        <p className='grey-text'>Created by Sema Zorin in 2024</p>
        </footer>
      </div>
       
    </div>
    </>
  )
}

export default App
