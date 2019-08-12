const width = 15

const squares = []






const answers = [
  'generalassembly',
  'github',
  'strangerthings',
  'beatlemaniacs',
  'boa',
  'amiwrite',
  'haikuwho',
  'tetris',
  'whodat',
  'aboutme',
  // 'bangemployed',
  'linkedin',
  'insta',
  'youtube',
  // 'webdeveloper',
  'ajob'
]


const links = {
  linkedin: 'https://www.linkedin.com/in/lily-la-day/',
  github: 'https://github.com/Lily-La-Day/',
  tetris: 'https://github.com/Lily-La-Day/sei-project-one-tetris',
  boa: 'https://github.com/Lily-La-Day/boa',
  whodat: 'https://github.com/Lily-La-Day/sei-project-2/',
  beatlemaniacs: 'https://github.com/Lily-La-Day/beatle-maniacs',
  strangerthings: 'https://github.com/Lily-La-Day/sei-group-project-forked',
  haikuwho: 'https://github.com/Lily-La-Day/haiku-who',
  amiwrite: 'https://github.com/Lily-La-Day/project-four',
  insta: 'https://www.instagram.com/lily.la.day/',
  youtube: 'https://www.youtube.com/watch?v=VEcnOu2jfKY',
  aboutme: '#',
  webdeveloper: 'https://en.wikipedia.org/wiki/Web_developer',
  // bangemployed: 'https://bang-employed.com',
  generalassembly: 'https://generalassemb.ly/education/software-engineering-immersive/london',
  ajob: 'mailto:lily.la.day.is@gmail.com?subject=Lily%20I%20Have%20A%20Job%20Offer%20For%20You'

}

const clues = {
  linkedin: 'The very worst of the online places.',
  github: 'One of my very favourite online places',
  tetris: 'My first proper project and with it, my first proper struggle! (An attempt at making) a Tetris clone using good old Vanilla JavaScript',
  boa: 'A type of SNAKE - My favourite game as a child (and [sort of] my second project), another very basic game made by a (then) very inexperienced coder using Vanilla JS',
  whodat: 'My third project, lots of firsts- working in a group, with React and playing with an API!',
  beatlemaniacs: 'Where else would you find a database of Beatles songs? Thank god someone (ie. me) finally went and made one! I\'m pretty sure this info was impossible to come by until now. (My first fullstack MERN application)',
  strangerthings: 'The big group project, another very original idea and another fullstack MERN application. ',
  haikuwho: 'A little database of haiku portraits (made by me [obviously]), first time playing with Python and Flask for the backend.',
  amiwrite: 'The big final project, a solo effort built over a week (a bloody sweaty, not quite tear-y week) , a full stack Python, Flask, React application.',
  insta: 'Paintings of faces that I have done.',
  youtube: 'A very short (but quite good!) video about one of my art projects. (From back when I was art-y rather than tech-y)',
  // webdeveloper: 'What I am.',
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

      const tiny = document.createElement('p')
      tiny.innerHTML = i
      square.append(tiny)
      tiny.setAttribute('id', 'tiny')
      const a = document.createElement('a')
      a.href=''
      square.append(a)
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
    // const clues = clueSection.style.gridTemplateRows
    clueSection.style.gridColumnGap = '2em'
    const rows = answers.length

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
    // console.log(answers.indexOf(clue))
    const letters = answer.innerHTML.split('')
    document.querySelector(`[data-index="${index}"]`).classList.add(index)
    const clueNodes = document.querySelectorAll(`[class*="${clue}"]`)
    for(let i = index; i < index + clue.length; i ++) {
      document.querySelector(`[data-index="${i}"] a`).append(letters[i-index])

      document.querySelector(`[data-index="${i}"]`).classList.add('letters')
      document.querySelector(`[data-index="${i}"]`).classList.add(clue)



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
    const firsts = [...document.querySelectorAll(`[class*="${clue}"]`)]
    // const gridItems = [...document.querySelectorAll('[class*="grid-item"]')]
    const filtered = firsts.filter(el => el.classList.contains('grid-item'))

    filtered[0].childNodes[0].innerHTML = answers.indexOf(clue)+1
    filtered[0].childNodes[0].removeAttribute('id', 'tiny')
    filtered[0].childNodes[0].classList.add('clueNumber')
  }


  const down = (clue, index) => {
    const answer = document.createElement('h6')
    answer.append(clue)
    // console.log(clue)
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
    const firsts = [...document.querySelectorAll(`[class*="${clue}"]`)]
    // const gridItems = [...document.querySelectorAll('[class*="grid-item"]')]
    const filtered = firsts.filter(el => el.classList.contains('grid-item'))
    filtered[0].childNodes[0].innerHTML = answers.indexOf(clue)+1
    filtered[0].childNodes[0].removeAttribute('id', 'tiny')
    filtered[0].childNodes[0].classList.add('clueNumber')


  }


  for(let i = 0; i < answers.length; i ++){
    const clue = document.querySelector(`[data-number="${i}"]`)
    clue.classList.add(`${answers[i]}-clue`)
    clue.innerHTML = `<h5>${i+1}</h5><p ><a href=''>${clues[answers[i]]}</p></a>`
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










  answers.forEach(clue => {
    // console.log(clue)
    const els = document.querySelectorAll(`[class*="${clue}"]`)

    els.forEach(el => {
      el.querySelector('a').href = links[clue]

    })
  })
  for(let i = 0; i < width * width; i ++){
    if (document.querySelector(`[data-index="${i}"] a`).innerText.length >= 2 ) {
      const extras = document.querySelector(`[data-index="${i}"] a`)
      extras.innerText = extras.innerText[0]
    }


  }

  const crossword = document.querySelector('.crossword')
  const expo = document.querySelectorAll('button')
  const buttons = document.querySelector('.button-container')

  const info = document.querySelector('.info')

  const click = document.querySelector('.click')
  const you = document.querySelector('.you')
  const understand = document.querySelector('.understand')
  const what = document.querySelector('.what')

  const changeText = () =>  {

    click.innerHTML = 'Click Here'
    you.innerHTML = 'If You'
    understand.innerHTML = 'Don\'t Understand'
    what.innerHTML = 'What This Is'
  }

  const reverseText = () =>  {

    click.innerHTML = 'Check This'
    you.innerHTML = 'Reveal This'
    understand.innerHTML = 'Clear This'
    what.innerHTML = 'Anagram Helper'
  }

  const change = setInterval(changeText, 5000)
  const reverse = setInterval(reverseText, 10000)


  expo.forEach(button =>{
    console.log(button)
    button.addEventListener('onclick', () => {
      console.log('clicking')
      info.style.display = 'inline-block'


    })
  })
  const main = document.querySelector('.heading-area')
  const guardian = document.querySelector('.me')

  buttons.addEventListener('click', () => {
    console.log('clicking')
    info.style.display = 'inline-block'
    reverseText()
    console.log(guardian.innerHTML)
    if(guardian.innerText === 'Guardian'){
      console.log('doing')
      clearInterval(change)
      clearInterval(reverse)
      setTimeout(handler, 1000)
      guardian.classList.add('fade')
      setInterval(changeGuardian, 2000)
    } else {
      guardian.classList.remove('fade')
    }

  })
  const handler = () => {

    main.addEventListener('click', hide)
  }



  const changeGuardian = () => {

    guardian.innerText = 'Lily'


  }


  const hide = () => {
    guardian.classList.remove('fade')
    info.style.display = 'none'
  }









}









window.addEventListener('DOMContentLoaded', init)



// const css = `.${clue}:hover{ background-color: #ffe500 }`
// const style = document.createElement('style')
// style.appendChild(document.createTextNode(css))
// document.querySelector(`.${clue}`).appendChild(style)
