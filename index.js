const width = 15

const squares = []

const answers = [
  'tetris',
  'snake',
  'whodat',
  'beatlemaniacs',
  'haikuwho',
  'strangerthings',
  'amiwrite',
  'aboutme',
  'bangemployed',
  'github',
  'linkedin'
]


const links = {
  linkedin: 'https://www.linkedin.com/in/lily-la-day/',
  github: 'https://github.com/Lily-La-Day/',
  tetris: 'https://github.com/Lily-La-Day/sei-project-one-tetris',
  snake: 'https://github.com/Lily-La-Day/snake',
  whodat: 'https://github.com/Lily-La-Day/sei-project-2/',
  beatlemaniacs: 'https://github.com/Lily-La-Day/beatle-maniacs',
  strangerthings: 'https://github.com/Lily-La-Day/sei-group-project-forked',
  haikuwho: 'https://github.com/Lily-La-Day/haiku-who',
  amiwrite: 'https://github.com/Lily-La-Day/project-four'
}

const clues = {
  linkedin: 'The very worst of the online places.',
  github: 'One of my very favourite online places',
  tetris: 'My first proper project and with it, my first proper struggle! (An attempt at making) a Tetris clone using good old Vanilla JavaSCript',
  snake: 'My favourite game as a child (and [sort of] my second project), another very basic game made by a (then) very inexperienced coder using Vanilla JS',
  whodat: 'My third project, lots of firsts- working in a group, with React and playing with an API!',
  beatlemaniacs: 'Where else would you find a database of Beatles songs? Thank god someone (ie. me) finally went and made one! I\'m pretty sure this info was impossible to come by until now. (My first fullstack MERN application)',
  strangerthings: 'The big group project, another very original idea and another fullstack MERN application. ',
  haikuwho: 'A lovely little database of haiku portraits (made by me obviously), first time playing with Python and Flask for the backend',
  amiwrite: 'The big final project, a solo effort built over a week (a bloody sweaty, not quite tear-y week) , a full stack Python, Flask, React application.'
}




const init = () => {

  const makeGrid = () => {

    for(let i = 0; i < width * width; i ++ ) {
      const grid = document.querySelector('.grid')
      const square = document.createElement('div')
      grid.append(square)
      square.classList.add('grid-item')
      const a = document.createElement('a')
      a.href=''
      square.append(a)
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
    clueSection.style.gridTemplateRows = (`repeat(${answers.length}, auto)`)
    const clues = clueSection.style.gridTemplateRows
    clueSection.style.gridColumnGap = '2em'
    const rows = clues.split(' ').length

    for(let i = 0; i < rows; i ++ ) {
      const clue = document.createElement('div')
      clue.classList.add('clue-container')
      clueSection.append(clue)
      clue.dataset.number = i
      const tiny = document.createElement('p')
      tiny.innerHTML = i
      clue.append(tiny)
      tiny.setAttribute('id', 'tiny')
      clueSection.style.height = '80vh'
    }


  }

  makeGrid()
  makeClues()


  const across = (clue, index) => {
    const answer = document.createElement('h6')
    answer.append(clue)

    const letters = answer.innerHTML.split('')

    for(let i = index; i < index + clue.length; i ++) {
      document.querySelector(`[data-index="${i}"] a`).append(letters[i-index])

      document.querySelector(`[data-index="${i}"]`).classList.add('letters')
      document.querySelector(`[data-index="${i}"]`).classList.add(clue)


    }

  }


  const down = (clue, index) => {
    const answer = document.createElement('h6')
    answer.append(clue)

    const letters = answer.innerHTML.split('')
    for(let i = index; i < index + (15*clue.length) - 14; i +=15) {

      document.querySelector(`[data-index="${i}"] a`).append(letters[(index+(i-index)-index)/15])
      document.querySelector(`[data-index="${i}"]`).classList.add('letters')
      document.querySelector(`[data-index="${i}"]`).classList.add(clue)


    }


  }


  for(let i = 0; i < answers.length; i ++){
    const clue = document.querySelector(`[data-number="${i}"]`)
    clue.innerHTML = `<h5 class="${answers[i]}-clue">${clues[answers[i]]}</h5>`
  }


  across('strangerthings', 0)
  down('haikuwho', 40)
  down('snake', 0)
  across('tetris', 165)
  across('whodat', 39)
  down('amiwrite', 3)
  down('aboutme', 43)
  down('github', 135)
  down('linkedin', 113)


  across('beatlemaniacs', 210)

  answers.forEach(clue => {
    // console.log(clue)
    const els = document.querySelectorAll(`.${clue}`)
    console.log(links[clue])
    els.forEach(el => {
      el.querySelector('a').href = links[clue]

    })
  })





}









window.addEventListener('DOMContentLoaded', init)
