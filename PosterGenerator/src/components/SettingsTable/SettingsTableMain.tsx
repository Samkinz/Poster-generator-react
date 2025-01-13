import React from 'react'
import './SettingsTableMain.css'

function SettingsTableMain() {
  return (
    <>
    <div className='settings-table-wrapper'>
        <ul>
          <li>settings</li>
          <li>background</li>
          <li>big letters</li>
          <li>texture</li>
          <li>small phrase</li>
        </ul>
        <ul>
          <li>color /</li>
          <li><input type="checkbox" name='backgroundColor'/></li>
          <li><input type="checkbox" name='bigLettersColor'/></li>
          <li><input type="checkbox" name='textureColor'/></li>
          <li><input type="checkbox" name='smallPhraseColor'/></li>
        </ul>
        <ul>
          <li>size  /</li>
          <li><input type="checkbox" name='backgroundColor'/></li>
          <li><input type="checkbox" name='bigLettersColor'/></li>
          <li><input type="checkbox" name='textureColor'/></li>
          <li><input type="checkbox" name='smallPhraseColor'/></li>
        </ul>
        <ul>
          <li>position</li>
          <li><input type="checkbox" name='backgroundColor'/></li>
          <li><input type="checkbox" name='bigLettersColor'/></li>
          <li><input type="checkbox" name='textureColor'/></li>
          <li><input type="checkbox" name='smallPhraseColor'/></li>
        </ul>
        <ul>
          <li>hide /</li>
          <li><input type="checkbox" name='backgroundColor'/></li>
          <li><input type="checkbox" name='bigLettersColor'/></li>
          <li><input type="checkbox" name='textureColor'/></li>
          <li><input type="checkbox" name='smallPhraseColor'/></li>
        </ul>
    </div>
    </>
  )
}

export default SettingsTableMain