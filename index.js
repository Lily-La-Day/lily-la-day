const width = 15;

const squares = [];

const answers = [
  "generalassembly",
  "github",
  "snake",
  "amiwrite",
  "haikuwho",
  "dog",
  "whodat",
  "aboutme",
  "linkedin",
  "insta",
  "youtube",
  "ajob",
  "vmware",
  "mumsnet",
  "cloud",
  "codewars",
  "beatles",
  "dev"
];

const links = {
  linkedin: "https://www.linkedin.com/in/lily-la-day/",
  github: "https://github.com/Lily-La-Day/",
  snake: "https://github.com/Lily-La-Day/snake",
  whodat: "https://github.com/Lily-La-Day/sei-project-2/",
  beatles: "https://github.com/Lily-La-Day/beatle-maniacs",
  haikuwho: "https://github.com/Lily-La-Day/haiku-who",
  amiwrite: "https://github.com/Lily-La-Day/project-four",
  insta: "https://www.instagram.com/lily.la.day/",
  youtube: "https://www.youtube.com/watch?v=VEcnOu2jfKY",
  aboutme: "https://www.theguardian.com/uk/2003/sep/28/research.health",
  generalassembly:
    "https://generalassemb.ly/education/software-engineering-immersive/london",
  ajob:
    "mailto:lily.la.day.is@gmail.com?subject=Lily%20I%20Have%20A%20Job%20Offer%20For%20You",
  vmware: "https://www.vmware.com/uk.html",
  mumsnet: "https://www.mumsnet.com/Talk/active-conversations",
  codewars: "https://www.codewars.com/users/Lily_Day",
  cloud: "https://www.cloudhealthtech.com/",
  dog: "https://www.dogsblog.com/category/age/6-years/",
  dev: "https://en.wikipedia.org/wiki/Dev"
};

const clues = {
  linkedin: "The very worst of the online places. (8)",
  github: "One of my very favourite online places (6)",
  snake:
    "My favourite game as a child (and [sort of] my second project), another very basic game made by a not very experienced coder using Vanilla JS (5)",
  whodat:
    "My third project, lots of firsts- working in a group, with React and playing with an API! (3,3)",
  beatles:
    "My favourite band and the chosen content for my very first full-stack app. Where else would you find a database of Beatles songs? (7)",

  haikuwho:
    "A little database of haiku portraits (made by me [obviously]), first time playing with Python and Flask for the backend. (5,3)",
  amiwrite:
    "The big final project, a solo effort built over a week (a bloody sweaty, not quite tear-y week) , a full stack Python, Flask, React application. (2,1,5)",
  insta: "Paintings of faces that I have done. (5)",
  youtube:
    "A very short (but quite good!) video about one of my art projects. (From back when I was art-y rather than tech-y) (7)",
  generalassembly:
    'Software Engineering Immersive- the coding "bootcamp" I have just completed (and miss a bit). (7,8)',
  dog: "The thing that I want above all else. (3)",
  ajob: "If you may have one of these for me, please click here. (1,3)",
  aboutme: "I have an abnormally large head. (5,7)",
  vmware: "Thank you for employing me - it's been great! (6)",
  codewars:
    "For when I want to code but don't want to think about what I want to code. (7)",
  mumsnet: "My favourite non-techy online place. (7)",
  cloud:
    "...Health, the company I once called home. Also, you know, AWS, Azure etc... (5)",
  dev: "urrmmm, what I am? (3)"
};

const init = () => {
  const makeGrid = () => {
    for (let i = 0; i < width * width; i++) {
      const grid = document.querySelector(".grid");
      const square = document.createElement("div");
      grid.append(square);
      square.classList.add("grid-item");

      const tiny = document.createElement("p");
      tiny.innerHTML = i;
      square.append(tiny);
      tiny.setAttribute("id", "tiny");
      const a = document.createElement("a");
      a.href = "";
      a.setAttribute('target', '_blank');
      square.append(a);
      square.dataset.index = i;
      squares.push(square);
      square.dataset.row = Math.floor(i / 15) + 1;
      square.dataset.column = (i % 15) + 1;
    }
  };

  const date = document.querySelector(".date");
  const now = new Date();
  const weekday = new Array("Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat");
  const months = new Array(
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  );
  const month = months[now.getMonth()];
  const dayOfWeek = weekday[now.getDay()];
  const dd = String(now.getDate()).padStart(2, "0");

  const yyyy = now.getFullYear();
  const time = `${now.getHours()}. ${now.getMinutes()}`;
  date.innerHTML = `${dayOfWeek} ${dd} ${month} ${yyyy} ${time} BST `;

  const makeClues = () => {
    const clueSection = document.querySelector(".clues");
    clueSection.style.gridTemplateRows = `repeat(${answers.length}, auto)`;
    // const clues = clueSection.style.gridTemplateRows
    clueSection.style.gridColumnGap = "2em";
    const rows = answers.length;

    for (let i = 0; i < rows; i++) {
      const clue = document.createElement("div");
      clue.classList.add("clue-container");
      clueSection.append(clue);
      clue.dataset.number = i;
      const tiny = document.createElement("p");
      tiny.innerHTML = i;
      clue.append(tiny);
      tiny.setAttribute("id", "tiny");
      clueSection.style.height = "80vh";
    }
  };

  makeGrid();
  makeClues();

  const across = (clue, index) => {
    const answer = document.createElement("h6");
    answer.append(clue);
    // console.log(answers.indexOf(clue))
    const letters = answer.innerHTML.split("");
    document.querySelector(`[data-index="${index}"]`).classList.add(index);

    for (let i = index; i < index + clue.length; i++) {
      if (
        document.querySelector(`[data-index="${i}"] a`).childNodes.length !== 1
      ) {
        document
          .querySelector(`[data-index="${i}"] a`)
          .append(letters[i - index]);
      }

      document.querySelector(`[data-index="${i}"]`).classList.add("letters");
      document.querySelector(`[data-index="${i}"]`).classList.add(clue);

      const clueNodes = document.querySelectorAll(`[class*="${clue}"]`);
      clueNodes.forEach(clueNode => {
        const background = () => {
          const all = document.querySelectorAll(`[class*="${clue}"]`);
          all.forEach(el => (el.style.backgroundColor = "#ffe500"));
        };
        const remove = () => {
          const all = document.querySelectorAll(`[class*="${clue}"]`);
          all.forEach(el => (el.style.backgroundColor = ""));
        };

        clueNode.addEventListener("mouseover", background);
        clueNode.addEventListener("mouseout", remove);
      });
    }
    const firsts = [...document.querySelectorAll(`[class*="${clue}"]`)];

    const filtered = firsts.filter(el => el.classList.contains("grid-item"));
    filtered[0].childNodes[0].innerHTML = answers.indexOf(clue) + 1;
    filtered[0].childNodes[0].removeAttribute("id", "tiny");

    filtered[0].childNodes[0].classList.add("clueNumber");
  };

  const down = (clue, index) => {
    const answer = document.createElement("h6");
    answer.append(clue);

    const letters = answer.innerHTML.split("");

    for (let i = index; i < index + 15 * clue.length - 14; i += 15) {
      if (
        document.querySelector(`[data-index="${i}"] a`).childNodes.length !== 1
      ) {
        document
          .querySelector(`[data-index="${i}"] a`)
          .append(letters[(index + (i - index) - index) / 15]);
      }

      document.querySelector(`[data-index="${i}"]`).classList.add("letters");
      document.querySelector(`[data-index="${i}"]`).classList.add(clue);

      const clueNodes = document.querySelectorAll(`[class*="${clue}"]`);

      clueNodes.forEach(clueNode => {
        const background = () => {
          const all = document.querySelectorAll(`[class*="${clue}"]`);
          all.forEach(el => (el.style.backgroundColor = "#ffe500"));
        };
        const remove = () => {
          const all = document.querySelectorAll(`[class*="${clue}"]`);
          all.forEach(el => (el.style.backgroundColor = ""));
        };

        clueNode.addEventListener("mouseover", background);
        clueNode.addEventListener("mouseout", remove);
      });
    }
    const firsts = [...document.querySelectorAll(`[class*="${clue}"]`)];
    const filtered = firsts.filter(el => el.classList.contains("grid-item"));
    filtered[0].childNodes[0].innerHTML = answers.indexOf(clue) + 1;
    filtered[0].childNodes[0].removeAttribute("id", "tiny");
    filtered[0].childNodes[0].classList.add("clueNumber");
  };

  for (let i = 0; i < answers.length; i++) {
    const clue = document.querySelector(`[data-number="${i}"]`);
    clue.classList.add(`${answers[i]}-clue`);
    clue.innerHTML = `<h5>${i + 1}</h5><p ><a href=''>${
      clues[answers[i]]
    }</p></a>`;
  }

  // down("strangerthings", 9);
  down("insta", 150);
  across("generalassembly", 0);
  across("vmware", 144);
  across("linkedin", 184);
  across("cloud", 91);
  down("github", 0);
  across("haikuwho", 45);
  down("youtube", 14);
  down("whodat", 50);
  down("codewars", 72);
  across("aboutme", 121);
  down("dev", 189);
  across("ajob", 39);
  down("mumsnet", 126);
  across("amiwrite", 210);
  down("beatles", 134);
  down("snake", 9);
  down("dog", 37);

  answers.forEach(clue => {
    const els = document.querySelectorAll(`[class*="${clue}"]`);
    els.forEach(el => {

      el.querySelector("a").href = links[clue];
    });
  });
  for (let i = 0; i < width * width; i++) {
    if (document.querySelector(`[data-index="${i}"] a`).innerText.length >= 2) {
      const extras = document.querySelector(`[data-index="${i}"] a`);
      extras.innerText = extras.innerText[0];
    }
  }

  const expo = document.querySelectorAll("button");
  const buttons = document.querySelector(".button-container");

  const info = document.querySelector(".info");

  const click = document.querySelector(".click");
  const you = document.querySelector(".you");
  const understand = document.querySelector(".understand");
  const what = document.querySelector(".what");
  const crossword = document.querySelector(".crossword");
  const about = document.querySelector(".about");

  const changeText = () => {
    click.innerHTML = "Click Here";
    you.innerHTML = "If You";
    understand.innerHTML = "Don't Understand";
    what.innerHTML = "What This Is";
  };

  const reverseText = () => {
    click.innerHTML = "Check This";
    you.innerHTML = "Reveal This";
    understand.innerHTML = "Clear This";
    what.innerHTML = "Anagram Helper";
  };

  const change = setInterval(changeText, 5000);
  const reverse = setInterval(reverseText, 10000);

  expo.forEach(button => {
    button.addEventListener("onclick", () => {
      info.style.display = "inline-block";
    });
  });
  const main = document.querySelector(".heading-area");
  const guardian = document.querySelector(".me");

  buttons.addEventListener("click", () => {
    info.style.display = "inline-block";
    reverseText();

    if (guardian.innerText === "Guardian") {
      clearInterval(change);
      clearInterval(reverse);
      setInterval(handler, 1000);
      guardian.classList.add("fade");
      setInterval(changeGuardian, 2000);
    } else {
      guardian.classList.remove("fade");
    }
  });
  const handler = () => {
    main.addEventListener("click", hide);
  };

  const changeGuardian = () => {
    guardian.innerText = "Lily";
  };

  const noDisplay = () => {
    info.style.display = "none";
  };

  const hide = () => {
    guardian.classList.add("fade");
    setTimeout(noDisplay, 500);
  };

  const showBio = document.querySelector(".show-bio");
  console.log(showBio);
  const showCross = document.querySelector(".show-crossword");
  console.log(showCross);
  const bio = document.querySelector(".bio");

  const getSetter = () => {
    crossword.style.display = "none";
    bio.style.display = "block";
    showBio.style.display = "none";
    showCross.style.display = "block";
  };

  const showCrossword = () => {
    crossword.style.display = "block";
    bio.style.display = "none";
    showBio.style.display = "block";
    showCross.style.display = "none";
  };

  showBio.addEventListener("click", getSetter);
  showCross.addEventListener("mouseover", showCrossword);
};

window.addEventListener("DOMContentLoaded", init);
