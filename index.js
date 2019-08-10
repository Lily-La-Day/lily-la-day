const width = 15

const squares = []

const init = () => {

  for(let i = 0; i < width * width; i ++ ) {
    const grid = document.querySelector('.grid')
    const square = document.createElement('div')
    grid.append(square)
    square.classList.add('grid-item')
    const tiny = document.createElement('p')
    tiny.innerHTML = i
    square.append(tiny)
    tiny.classList.add('tiny')
    square.dataset.index = i
    squares.push(square)
    square.dataset.row = Math.floor(i/15) + 1
    square.dataset.column = i % 15 + 1


  }
  


  const answer = document.createElement('h6')
  answer.innerHTML = 'TETRIS'
  const letters = answer.innerHTML.split('')
  console.log(letters)
  for(let i = 5; i < 11; i ++) {
    document.querySelector(`[data-index="${i}"]`).append(letters[i-5])

  }


  answer.innerHTML = 'beatlemaniacs'
  const word = answer.innerHTML.split('')
  console.log(word)
  for(let i = 120; i < 133; i ++) {
    document.querySelector(`[data-index="${i}"]`).append(word[i-120])

  }

  answer.innerHTML = 'snake'
  const snake = answer.innerHTML.split('')
  console.log(snake)
  for(let i = 10; i < 85; i +=15) {
    console.log(i)
    console.log(i/15-1)
    document.querySelector(`[data-index="${i}"]`).append(snake[Math.floor(i/15)])


  }






  const clueSection = document.querySelector('.clues')
  clueSection.style.gridTemplateRows = (`repeat(${26}, 1.375rem)`)
  const clues = clueSection.style.gridTemplateRows
  const rows = clues.split(' ').length

  for(let i = 0; i < rows; i ++ ) {
    const clue = document.createElement('div')
    clueSection.append(clue)
    clue.dataset.index = i
    const tiny = document.createElement('p')
    tiny.innerHTML = i
    clue.append(tiny)
    tiny.classList.add('tiny')
    clueSection.style.height = `${26 * 1.375}rem`
  }


}






window.addEventListener('DOMContentLoaded', init)




// answer.innerHTML = 'snake'
// const snake = answer.innerHTML.split('')
// console.log(snake)
// for(let i = 10; i < 85; i +=15) {
//   console.log(i)
//   document.querySelector(`[data-index="${i}"]`).append(snake[i-10])
//   console.log(snake[i-15-25])
//
// }
// for(let j = 0; j < snake.length; j++){
//   console.log(snake[j])
//   console.log(i)
//   console.log(document.querySelector(`[data-index="${i}"]`).append(snake[i][j]))
//
//
// }


// answer.innerHTML = 'snake'
// const snake = answer.innerHTML.split('')
// console.log(snake)
// for(let j = 0; j < snake.length; j++){
//   for(let i = 10; i < 85; i +=15) {
//     console.log(j)
//     document.querySelector(`[data-index="${i}"]`).append(snake[j])
//
//
//   }
// }
