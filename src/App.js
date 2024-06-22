import {useState} from 'react'
import './App.css'
import LanguageDetails from './components/LanguageDetails'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
const App = () => {
  const [activeButtonId, setActiveButtonId] = useState(
    languageGreetingsList[0].id,
  )
  const buttonClicked = event => {
    setActiveButtonId(event.target.id)
  }

  const activeLanguageDetails = () => {
    const index = languageGreetingsList.findIndex(
      language => language.id === activeButtonId,
    )
    const languageArray = languageGreetingsList[index]
    return (
      <LanguageDetails key={languageArray.id} eachLanguage={languageArray} />
    )
  }

  return (
    <>
      <div className="background-container">
        <h1>Multilingual Greetings</h1>
        <div>
          {languageGreetingsList.map(eachLanguage => (
            <button
              type="button"
              id={eachLanguage.id}
              onClick={buttonClicked}
              key={eachLanguage.id}
              className="language-button"
              style={{
                backgroundColor:
                  eachLanguage.id === activeButtonId ? '#db1c48' : '#ffffff',
                color:
                  eachLanguage.id === activeButtonId ? '#ffffff' : '#1e293b',
              }}
            >
              {eachLanguage.buttonText}
            </button>
          ))}
          {activeLanguageDetails()}
        </div>
      </div>
    </>
  )
}

export default App

// {languageGreetingsList.map(eachLanguage => (
//   <LanguageDetails
//     key={eachLanguage.id}
//     eachLanguage={eachLanguage}
//     isActive={activeButtonId === eachLanguage.id} // Pass an isActive prop
//   />
// ))}
