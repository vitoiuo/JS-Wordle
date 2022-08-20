const today = new Date().toLocaleDateString();
const wordsBase = generateWordsBase();
const dayWord = wordsBase[today];
const virtualKeys = document.querySelectorAll(".tecla");
let elLine;
console.log(dayWord);
const alpha = [...Array(26)].map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));
let word = "";

let i = 1;

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
  setValues("tries", i);
  if (word.length === 5 && keyName === "ENTER") {
    if (!Object.values(wordsBase).includes(word)) {
      elLine.forEach((e) => e.classList.add("invalid-word"));
    } else {
      elLine.forEach((e) => e.classList.remove("invalid-word"));
      letterChecker(word, elLine);
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
    window.alert("Rufem os tambores (TUM TUM TUM)");
  }
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
  // setValues(`word${i}`, word);
};

const removeKey = (e) => {
  word = [...word];
  word.pop();
  word = word.join("");
  e.textContent = "";
};

const letterChecker = (word, line) => {
  let time = 0;
  line.forEach((e) => {
    const quadText = e.textContent;
    setTimeout(() => {
      if (!dayWord.includes(quadText)) {
        e.classList.remove("selected-item");
        e.classList.add("wrong");
      } else if (
        line.indexOf(e) !== dayWord.indexOf(quadText) &&
        line.indexOf(e) !== dayWord.lastIndexOf(quadText)
      ) {
        e.classList.remove("selected-item");
        e.classList.add("parcial-correct");
      } else {
        e.classList.remove("selected-item");
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

const saveValues = (nome, value) => {
  localStorage[nome] = value;
};

const setValues = () => {
  const properties = Object.keys(localStorage);
  properties.forEach((propertie) => {
    console.log(propertie);
    if (propertie === "tries") {
      i = localStorage[propertie];
    }
  });
};
