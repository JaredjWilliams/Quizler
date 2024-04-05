import { chooseRandom, createPrompt, createQuestions } from './lib'

// console.log(createPrompt({numQuestions : 5, numChoices : 3}))

console.log(createQuestions({
    'question-1': 'Do you think you\'re ready for this?',
    'question-1-choice-1': 'Beyond ready!!!',
    'question-1-choice-2': 'Totally!',
    'question-2': 'Are you loving JS yet?',
    'question-2-choice-1': 'It\'s tubular!',
    'question-2-choice-2': 'Way rad man!'
  }))

