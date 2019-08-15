# lily-la-day

**(my portfolio)**

There's not too much to say about this by way of an introduction other than maybe to state that I am really into cryptic crossword and pre-bootcamp would (attempt to) do one daily, the Guardian one to be specific, and online always so that I could check things (ie cheat). 

Crossword-ing was one of the many enjoyable life things that I put a pin in while I was at code school, crossword-ing along with reading, cooking, socialising, dating, Samaritan-ing and well, I suppose just having a life outside of code. So now that code school is over I'm attempting to take the pins out, I'm finding this surprisingly hard. Coding is quite addictive and it's pretty much all I want to be doing right now as I am learning fast and learning is fun (yes, that's right kids). 

So this was my attempt at dipping a toe back into the crossword pool while quite firmly keeping every other bit of my body totally submerged in the code sea. 

And very fun it was too! I hadn't done anything using just Vanilla JS in what seems like a lifetime thanks to React and I had forgotten how much I enjoy it. All of that selecting of stuff and listening for things, etc etc. 


So here's a bit about what I actually did code wise, I'll focus just on where I struggled because let's face it- that's all that really matters. 

Having dynamically created a nice flexbox-y crossword- y looking grid with the right squares and such I wanted a function that would take the clue word and the grid-area index as arguments and then just apply the word in the right place. 

<img src="https://i.ibb.co/0nmhGTp/in-progress.png" alt="in-progress" border="0">

The first stumbling block I faced is actually a bit embarrassing to admit to as I'm sure for someone who is slightly better at maths than I am this would have been totally straightforward but it took me bloody ages to work out the relationship between the indexes for where (ie on which grid-area index) each consecutive letter should be placed. Across was simple, minus the original index number and then plus one for each letter. Down took me a little while but I did get there eventually. The full down function is shown below. I will also just add a disclaimer at this point that I haven't gone back over my code to refactor yet.

(I will do this as I need to get better at doing this and wanting to improve at something is to me, the best incentive for actually doing it. So I will. I promise.)





```js
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
```
I won't bore you with the across as it's basically the same but a bit simpler, I can (and will!) definitely go back and combine these to make things a little drier. 

These functions together though allow me to enter the words thusly: 

```js
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
```




<img src="https://i.ibb.co/R7dSgbL/Screenshot-2019-08-15-at-13-25-35.png" width="800">



For the clue section, I wanted to generate things as dynamically as possible to allow for the many, many clue changes/additions/retractions that I foresee happening very frequently. 

```js
const makeClues = () => {
    const clueSection = document.querySelector('.clues')
    clueSection.style.gridTemplateRows = (`repeat(${answers.length}, auto)`)
    const rows = answers.length

    for(let i = 0; i < rows; i ++ ) {

      const clue = document.createElement('div')
      clue.classList.add('clue-container')
      clueSection.append(clue)
      clue.dataset.number = i
      

    }
  }
```

The biggest challenge I faced and one I haven't really properly overcome yet is that of getting the numbers to properly correspond with the clues, at the moment I'm using the indexes of the clues as they are stored in an array but obviously this doesn't allow for two clues having the same number (as they would in a real crossword) and I have chosen not to display both numbers in each box in the crossword. I hope the highlighting goes some way to mitigating the annoyingness of this but it's still something I wish to sort out. 

Which leads me to that **Improvements and Future Revisions** section. 

I really want to refactor my code entirely so that I don't have seperate clues, answers and links in my code but rather an object for each with these things as keys. This way I could also add numbers. This will have to wait though as it will involve a bit of detangling in places where I have used the array indexes etc. 

My favourite bit is what happens when you click on a jobs so I'm just going to put a screen shot of that here even though it was in no way technically challenging to achieve (I do hope somebody takes it seriously and emails me though) 



<img src="https://i.ibb.co/9TjZWHk/Screenshot-2019-08-15-at-13-26-15.png" width="800">


**Credits** 

When one of my ex-classmates first saw this he said quite seriously "I hope you don't take this the wrong way and I don't mean it as a criticism but... this does look a bit like the Guardian's crossword, you know, the colours and stuff'. 

So I think I must credit The Guardian here just in case anyone else mistakes this blatant rip-off to be an anything less than blatant rip-off. 



<img src="https://i.ibb.co/B2ydNGq/Screenshot-2019-08-15-at-13-25-53.png" width="800">



