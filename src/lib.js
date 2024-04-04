import fs from 'fs'

export const chooseRandom = (array, numItems) => 
  array.length === 0 || numItems === 0 || array.length === 1 ? array :
  array.slice()
  .map(value => ({value, sort: Math.random()}))
  .sort((a, b) => a.sort - b.sort)
  .map(a => a.value)
  .slice(0, numItems)

  export const createPrompt = ({ numQuestions = 1, numChoices = 2 } = {}) => {
  //  console.log('numChoices:', numChoices);
  
    const prompts = [...Array(numQuestions)].flatMap((question, i) => ([
      {
        type: 'input',
        name: `question-${i + 1}`,
        message: `Enter question ${i + 1}`
      },
      [...Array(numChoices)].flatMap((choices, k) => ([
        {
          type: 'input',
          name: `question-${i + 1}-choice-${k + 1}`,
          message: `Enter answer choice ${k + 1} for question ${i + 1}`
        }
      ]))
    ])).flat();
  
    // console.log('prompts:', prompts);
  
    return prompts;
  }

// export const createPrompt = ({ numQuestions = 1, numChoices = 2 } = {}) => {
//   return [...Array(numQuestions)].flatMap((question, i) => ([
//     {
//       type: 'input',
//       name: `question-${i + 1}`,
//       message: `Enter question ${i + 1}`
//     },
//     [...Array(numChoices)].flatMap((choices, k) => ([
//       {
//         type: 'input',
//         name: `question-${i + 1}-choice-${k + 1}`,
//         message: `Enter answer choice ${k + 1} for question ${i + 1}`
//       }
//     ]))
//   ])).flat()
// }


export const createQuestions = (prompts) => ([
  console.log(prompts)
])

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
