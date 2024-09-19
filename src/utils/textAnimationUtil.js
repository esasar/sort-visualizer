const createNumberArray = (text) => {
  return Array.from({ length: text.length }, (_, index) => index)
}

const shuffleArray = (array) => {
  let currentIndex = array.length 

  while (currentIndex !== 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }
}

const sortWithStates = (array) => {
  const states = []
  states.push([...array])

  const n = array.length 
  let swapped = false

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      swapped = false
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
        swapped = true
      }
      if (swapped) {
        states.push([...array])
      }
    }
  }

  return states
}

const convertStatesToWords = (states, map) => {
  return states.map(state => 
    state.map(number => map[number]).join('')
  )
}

const makeCharacterMap = (string) => {
  const map = {}

  for (let i = 0; i < string.length; i++) {
    map[i] = string[i]
  }

  return map
}

const makeTextAnimationFrames = (text) => {
  const numberArray = createNumberArray(text)
  const map = makeCharacterMap(text)
  shuffleArray(numberArray)
  const states = sortWithStates(numberArray)
  const words = convertStatesToWords(states, map)
  
  return words
}

export default makeTextAnimationFrames