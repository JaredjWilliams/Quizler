import fs from 'fs'

export const chooseRandom = (array, numItems) => 
  array.length === 0 || numItems === 0 || array.length === 1 ? array :
  array.slice()
  .map(value => ({value, sort: Math.random()}))
  .sort((a, b) => a.sort - b.sort)
  .map(a => a.value)
  .slice(0, numItems)

export const createPrompt = () => {
  // TODO implement createPrompt
}

export const createQuestions = () => {
  // TODO implement createQuestions
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
