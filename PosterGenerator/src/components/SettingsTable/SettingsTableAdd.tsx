import './SettingsTableAdd.css'

function SettingsTableAdd () {
  return (
    <article className="phrase-settings-wrapper">
      <input className="phrase-input" type="text" name='phraseInput' placeholder='text your phrase'/>
      <ul className='phrase-settings-list'>
        <li>
          <p>get random phrase</p>
          <input type="checkbox" name=''/>
        </li>
        <li>
          <p>freeze fraze input</p>
          <input type="checkbox" name=''/>
        </li>
      </ul>
    </article>
  )
}

export default SettingsTableAdd 