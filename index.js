const width = 15

const squares = []

const init = () => {

  const makeGrid = () => {

    for(let i = 0; i < width * width; i ++ ) {
      const grid = document.querySelector('.grid')
      const square = document.createElement('div')
      grid.append(square)
      square.classList.add('grid-item')
      const tiny = document.createElement('p')
      tiny.innerHTML = i
      square.append(tiny)
      tiny.setAttribute('id', 'tiny')
      square.dataset.index = i
      squares.push(square)
      square.dataset.row = Math.floor(i/15) + 1
      square.dataset.column = i % 15 + 1


    }
  }
  const makeClues = () => {
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
      tiny.setAttribute('id', 'tiny')
      clueSection.style.height = `${26 * 1.375}em`
    }


  }

  makeGrid()
  makeClues()


  const across = (clue, index) => {
    const answer = document.createElement('h6')


    console.log(answer)
    answer.append(clue)

    const letters = answer.innerHTML.split('')

    for(let i = index; i < index + clue.length; i ++) {
      document.querySelector(`[data-index="${i}"]`).append(letters[i-index])
      document.querySelector(`[data-index="${i}"]`).classList.add('letters')
      document.querySelector(`[data-index="${i}"]`).classList.add(clue)


    }

  }


  across('TETRIS', 5)
  across('BEATLEMANIACS', 120)
  const a = document.createElement('a')
  a.href='https://github.com/Lily-La-Day/sei-project-one-tetris'
  document.querySelector('.TETRIS').append(a)
  console.log(a)


  const down = (clue, index) => {
    const answer = document.createElement('h6')
    answer.innerHTML = clue
    const letters = answer.innerHTML.split('')
    for(let i = index; i < index + (15*clue.length) - 14; i +=15) {

      document.querySelector(`[data-index="${i}"]`).append(letters[(index+(i-index)-index)/15])
      document.querySelector(`[data-index="${i}"]`).classList.add('letters')


    }


  }


  down('AMIWRIT', 16)
}









window.addEventListener('DOMContentLoaded', init)
