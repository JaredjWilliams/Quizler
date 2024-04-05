import fs from 'fs'

export const chooseRandom = (array, numItems) => 
  array.length === 0 || numItems === 0 || array.length === 1 ? array :
  array.slice()
    .map(value => ({value, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .slice(0, numItems)

  export const createPrompt = ({ numQuestions = '1', numChoices = '2' } = {}) => {

    const baseQuestion = (i) => ({
        type: 'input',
        name: `question-${i + 1}`,
        message: `Enter question ${i + 1}`
    })

    const baseChoice = (i, k) => ({
        type: 'input',
        name: `question-${i + 1}-choice-${k + 1}`,
        message: `Enter answer choice ${k + 1} for question ${i + 1}`
    })

    return [...Array(Number.parseInt(numQuestions))].flatMap((_, i) => [
      baseQuestion(i),
      ...[...Array(Number.parseInt(numChoices))].map((_, k) => baseChoice(i, k))
    ]);
  }

export const createQuestions = (prompts = []) => {
  return Object.entries(prompts).reduce((questions, [key, value]) => {
    const [base, questionNumber, choiceNumber] = key.split('-');

    let question = questions.find(item => item.name === `${base}-${questionNumber}`);

    if (!question) {
      question = {
        type : 'list',
        name : `${base}-${questionNumber}`,
        message : value,
        choices : []
      };
      questions = [...questions, question];
    }

    if (choiceNumber) {
      question.choices = [...question.choices, value];
    }

    return questions

  }, [])
}

export const readFile = path =>
  new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => (err ? reject(err) : resolve(data)))
  })

export const writeFile = (path, data) =>
  new Promise((resolve, reject) => {
    fs.writeFile(path, data, err =>
      err ? reject(err) : resolve('File saved successfully')
    )
  })
