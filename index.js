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
