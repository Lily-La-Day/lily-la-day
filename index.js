const width = 15

const squares = []






const answers = [
  'strangerthings',
  'snake',
  'amiwrite',
  'haikuwho',
  'beatlemaniacs',
  'tetris',
  'whodat',
  'aboutme',
  'bangemployed',
  'github',
  'linkedin',
  'instagram',
  'youtube',
  'webdeveloper',
  'bangemployed',
  'generalassembly',
  'ajob'
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
  amiwrite: 'https://github.com/Lily-La-Day/project-four',
  instagram: 'https://www.instagram.com/lily.la.day/',
  youtube: 'https://www.youtube.com/watch?v=VEcnOu2jfKY',
  aboutme: '#',
  webdeveloper: 'https://en.wikipedia.org/wiki/Web_developer',
  bangemployed: 'https://bang-employed.com',
  generalassembly: 'https://generalassemb.ly/education/software-engineering-immersive/london'
}

const clues = {
  linkedin: 'The very worst of the online places.',
  github: 'One of my very favourite online places',
  tetris: 'My first proper project and with it, my first proper struggle! (An attempt at making) a Tetris clone using good old Vanilla JavaScript',
  snake: 'My favourite game as a child (and [sort of] my second project), another very basic game made by a (then) very inexperienced coder using Vanilla JS',
  whodat: 'My third project, lots of firsts- working in a group, with React and playing with an API!',
  beatlemaniacs: 'Where else would you find a database of Beatles songs? Thank god someone (ie. me) finally went and made one! I\'m pretty sure this info was impossible to come by until now. (My first fullstack MERN application)',
  strangerthings: 'The big group project, another very original idea and another fullstack MERN application. ',
  haikuwho: 'A lovely little database of haiku portraits (made by me obviously), first time playing with Python and Flask for the backend',
  amiwrite: 'The big final project, a solo effort built over a week (a bloody sweaty, not quite tear-y week) , a full stack Python, Flask, React application.',
  instagram: 'Paintings of faces that I have done.',
  youtube: 'A very short (but quite good!) video about one of my art projects.',
  webdeveloper: 'What I am.',
  bangemployed: 'Also what I am (for now). Also the name of my new code blog/unemployment tracker. (I haven\'t actually started this yet but I promise that it\'s next on my list after this crossword).',
  generalassembly: 'Software Engineering Immersive- the coding "bootcamp" I have just completed (and miss a bit).',
  ajob: 'What I would like... preferably one that involves coding. And if I\'m being really picky, as little styling as possible. I\'m fullstack (with emphasis on the full).',
  aboutme: 'Sometimes I run quite far.'
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

  const date = document.querySelector('.date')
  const now = new Date()
  const weekday = new Array('Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat')
  const months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December')
  const month = months[now.getMonth()]
  const dayOfWeek = weekday[now.getDay()]
  const dd = String(now.getDate()).padStart(2, '0')

  const yyyy = now.getFullYear()
  const time = `${now.getHours()}. ${now.getMinutes()}`
  date.innerHTML = `${dayOfWeek} ${dd} ${month} ${yyyy} ${time} BST `

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
      const clueNodes = document.querySelectorAll(`.${clue}`)

      clueNodes.forEach(clueNode => {
        const background = () => {
          const all = document.querySelectorAll(`.${clue}`)
          all.forEach(el => el.style.backgroundColor = '#ffe500')
        }
        const remove = () => {
          const all = document.querySelectorAll(`.${clue}`)
          all.forEach(el => el.style.backgroundColor = '')
        }

        clueNode.addEventListener('mouseover', background )
        clueNode.addEventListener('mouseout', remove)

      })
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
      if (document.querySelector(`[data-index="${i}"] a`).innerText.length >= 2) {
        const extras = document.querySelector(`[data-index="${i}"] a`)
        extras.innerText = extras.innerText[0]
        console.log(extras)



      }



    }


  }


  for(let i = 0; i < answers.length; i ++){
    const clue = document.querySelector(`[data-number="${i}"]`)
    clue.innerHTML = `<h5>${i+1}</h5><p class="${answers[i]}-clue">${clues[answers[i]]}</p>`
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
  down('snake', 6)
  across('whodat', 189)
  across('tetris', 66)
  across('whodat', 138)
  down('snake', 155)
  across('tetris', 93)
  across('amiwrite', 30)
  across('snake', 145)
  down('linkedin', 113)
  across('whodat', 105)
  down('github', 146)


  across('haikuwho', 101)




  answers.forEach(clue => {
    // console.log(clue)
    const els = document.querySelectorAll(`.${clue}`)
    console.log(links[clue])
    els.forEach(el => {
      el.querySelector('a').href = links[clue]

    })
  })
  for(let i = 0; i < width * width; i ++){
    if (document.querySelector(`[data-index="${i}"] a`).innerText.length >= 2 ) {
      const extras = document.querySelector(`[data-index="${i}"] a`)
      console.log(extras.innerText)
      extras.innerText = extras.innerText[0]

      console.log(extras)
    }


  }







}









window.addEventListener('DOMContentLoaded', init)



// const css = `.${clue}:hover{ background-color: #ffe500 }`
// const style = document.createElement('style')
// style.appendChild(document.createTextNode(css))
// document.querySelector(`.${clue}`).appendChild(style)
