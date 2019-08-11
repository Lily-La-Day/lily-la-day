const width = 15

const squares = []






const answers = [
  'strangerthings',
  'boa',
  'amiwrite',
  'haikuwho',
  'beatlemaniacs',
  'tetris',
  'whodat',
  'aboutme',
  // 'bangemployed',
  'github',
  'linkedin',
  'insta',
  'youtube',
  'webdeveloper',
  'generalassembly',
  'ajob'
]


const links = {
  linkedin: 'https://www.linkedin.com/in/lily-la-day/',
  github: 'https://github.com/Lily-La-Day/',
  tetris: 'https://github.com/Lily-La-Day/sei-project-one-tetris',
  boa: 'https://github.com/Lily-La-Day/snake',
  whodat: 'https://github.com/Lily-La-Day/sei-project-2/',
  beatlemaniacs: 'https://github.com/Lily-La-Day/beatle-maniacs',
  strangerthings: 'https://github.com/Lily-La-Day/sei-group-project-forked',
  haikuwho: 'https://github.com/Lily-La-Day/haiku-who',
  amiwrite: 'https://github.com/Lily-La-Day/project-four',
  insta: 'https://www.instagram.com/lily.la.day/',
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
  boa: 'A type of SNAKE - My favourite game as a child (and [sort of] my second project), another very basic game made by a (then) very inexperienced coder using Vanilla JS',
  whodat: 'My third project, lots of firsts- working in a group, with React and playing with an API!',
  beatlemaniacs: 'Where else would you find a database of Beatles songs? Thank god someone (ie. me) finally went and made one! I\'m pretty sure this info was impossible to come by until now. (My first fullstack MERN application)',
  strangerthings: 'The big group project, another very original idea and another fullstack MERN application. ',
  haikuwho: 'A lovely little database of haiku portraits (made by me obviously), first time playing with Python and Flask for the backend',
  amiwrite: 'The big final project, a solo effort built over a week (a bloody sweaty, not quite tear-y week) , a full stack Python, Flask, React application.',
  insta: 'Paintings of faces that I have done.',
  youtube: 'A very short (but quite good!) video about one of my art projects.',
  webdeveloper: 'What I am.',
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
  const months = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec')
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
      clue.addEventListener('mouseover', () => {
        const all = document.querySelectorAll('*')
        all.forEach(el => {
          if(el.classList.contains(clue.childNodes[1].classList[0].split('-')[0])) {
            el.style.backgroundColor = '#ffe500'

          }
        })
      })
      clue.addEventListener('mouseout', () => {
        const all = document.querySelectorAll('*')
        all.forEach(el => {
          if(el.classList.contains(clue.childNodes[1].classList[0].split('-')[0])) {
            el.style.backgroundColor = ''

          }
        })
      })
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
      const clueNodes = document.querySelectorAll(`[class*="${clue}"]`)

      clueNodes.forEach(clueNode => {
        const background = () => {
          const all = document.querySelectorAll(`[class*="${clue}"]`)
          all.forEach(el => el.style.backgroundColor = '#ffe500')
        }
        const remove = () => {
          const all = document.querySelectorAll(`[class*="${clue}"]`)
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
      const clueNodes = document.querySelectorAll(`[class*="${clue}"]`)

      clueNodes.forEach(clueNode => {
        const background = () => {
          const all = document.querySelectorAll(`[class*="${clue}"]`)
          all.forEach(el => el.style.backgroundColor = '#ffe500')
        }
        const remove = () => {
          const all = document.querySelectorAll(`[class*="${clue}"]`)
          all.forEach(el => el.style.backgroundColor = '')
        }

        clueNode.addEventListener('mouseover', background )
        clueNode.addEventListener('mouseout', remove)

      })



    }


  }


  for(let i = 0; i < answers.length; i ++){
    const clue = document.querySelector(`[data-number="${i}"]`)
    clue.innerHTML = `<h5>${i+1}</h5><p class="${answers[i]}-clue"><a href=''>${clues[answers[i]]}</a></p>`
  }

  // 'strangerthings',
  // 'boa',
  // 'amiwrite',
  // 'haikuwho',
  // 'beatlemaniacs',
  // 'tetris',
  // 'whodat',
  // 'aboutme',
  // 'bangemployed',
  // 'github',
  // 'linkedin',
  // 'insta',
  // 'youtube',
  // 'webdeveloper',

  // 'generalassembly',
  // 'ajob'

  down('strangerthings', 9)
  // down('webdeveloper', 45)
  down('insta', 150)
  across('generalassembly', 0)
  // across('bangemployed', 212)
  across('linkedin', 167)
  down('beatlemaniacs', 12)
  down('github', 0)
  across('haikuwho', 45)
  down('youtube', 14)
  down('whodat', 50)
  across('aboutme', 121)
  down('ajob', 93)
  across('amiwrite', 210)
  down('tetris', 149)
  down('boa', 37)
  across('game', 84)









  answers.forEach(clue => {
    // console.log(clue)
    const els = document.querySelectorAll(`[class*="${clue}"]`)
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
