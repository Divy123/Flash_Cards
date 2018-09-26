import { AsyncStorage } from 'react-native'

const FLASH_CARDS_STORAGE_KEY = 'flashcards:storage'



const dummy = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}



export function saveNewDeck(title) {
  AsyncStorage.mergeItem(FLASH_CARDS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title,
      questions: []
    }
  }))
}
export function getDecks(){
  return AsyncStorage.getItem(FLASH_CARDS_STORAGE_KEY)
  .then(results=>
  {  if(results)
    return JSON.parse(results)
    else return dummy
  })
}
export function addCardAsync(deckId,val){
  getDecks().then(results=>{
    
    results[deckId].questions.push(val)
    AsyncStorage.setItem(FLASH_CARDS_STORAGE_KEY, JSON.stringify(results));
    
  })
}