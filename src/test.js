import { chooseRandom, createPrompt, createQuestions } from './lib'

// console.log(createPrompt({numQuestions : 5, numChoices : 3}))

console.log(createQuestions(createPrompt({numQuestions : 5, numChoices : 3})))