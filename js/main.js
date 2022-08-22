const today = new Date().toLocaleDateString();
const wordsBase = generateWordsBase();
const dayWord = wordsBase[today];
const virtualKeys = document.querySelectorAll(".tecla");
let elLine;
let tab = document.querySelector(".tabuleiro");
console.log(dayWord);
const alpha = [...Array(26)].map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));
let word = "";
let i = 1;

const saveValues = (nome, value) => {
  localStorage[nome] = value;
};

document.addEventListener("keydown", (e) => {
  const keyName = e.key.toUpperCase();
  inputKey(keyName);
});

virtualKeys.forEach((el) =>
  el.addEventListener("click", (e) => {
    inputKey(e.target.textContent);
  })
);

const inputKey = (keyName) => {
  if (word.length === 5 && keyName === "ENTER") {
    if (!Object.values(wordsBase).includes(word)) {
      elLine.forEach((e) => e.classList.add("invalid-word"));
    } else {
      elLine.forEach((e) => e.classList.remove("invalid-word"));
      letterChecker(elLine);

      if (word === dayWord) {
        return;
      }
      word = "";
      i++;
    }
  }
  try {
    elLine = Array.from(document.querySelector(`#tabl${i}`).children);
  } catch {
    return;
  }
  tab = document.querySelector(".tabuleiro");
  saveValues("tab-state", tab.outerHTML);
  saveValues("tries", i);
  for (let i = 4; i >= 0; i--) {
    if (
      ["BACKSPACE", "DEL"].includes(keyName) &&
      elLine[i].textContent != "" &&
      word !== dayWord
    ) {
      removeKey(elLine[i]);
      elLine[i].classList.remove("selected-item");
      elLine[i].classList.add("item");
      break;
    }
  }
  buildUserWord(elLine, keyName);
};

const buildUserWord = (line, key) => {
  for (let el of line) {
    if (!el.textContent && alphabet.includes(key)) {
      el.classList.remove("item");
      el.classList.add("selected-item");
      el.textContent = key;
      word += key;
      break;
    }
  }
};

const removeKey = (e) => {
  word = [...word];
  word.pop();
  word = word.join("");
  e.textContent = "";
};

const letterChecker = (line) => {
  let time = 0;
  line.forEach((e) => {
    const quadText = e.textContent;
    setTimeout(() => {
      e.classList.remove("selected-item");
      if (!dayWord.includes(quadText)) {
        e.classList.add("wrong");
      } else if (
        line.indexOf(e) !== dayWord.indexOf(quadText) &&
        line.indexOf(e) !== dayWord.lastIndexOf(quadText)
      ) {
        e.classList.add("parcial-correct");
      } else {
        e.classList.add("correct");
      }
      keyboardColor(e);
    }, time);
    time += 700;
  });
};

const keyboardColor = (e) => {
  virtualKeys.forEach((key) => {
    if (key.textContent === e.textContent) {
      key.classList.remove("background-tecla");
      if (e.classList.contains("correct")) {
        key.classList.add("correct");
        return;
      } else if (e.classList.contains("parcial-correct")) {
        key.classList.add("parcial-correct");
        return;
      } else if (
        !key.classList.contains("correct") &&
        !key.classList.contains("parcial-correct")
      ) {
        key.classList.add("wrong");
      }
    }
  });
};

const repeatedTerms = (word, term) => {
  let result = [...word].reduce((counter, a) => {
    a == term && counter++;
    return counter;
  }, 0);
  return result;
};

const setValues = () => {
  const properties = Object.keys(localStorage);
  properties.forEach((propertie) => {
    if (propertie === "tries") {
      i = localStorage[propertie];
    }
    if (propertie === "tab-state") {
      tab.outerHTML = localStorage[propertie];
    }
  });
  const lines = document.querySelectorAll(".linha-tab");
  let j = 1;
  if (localStorage["tries"]) {
    lines.forEach((e) => {
      if (j == localStorage["tries"]) {
        return;
      }
      let line = Array.from(document.querySelector(`#tabl${j}`).children);
      letterChecker(line);
      j++;
    });
  }
};

setValues();
