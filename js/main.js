const virtualKeys = document.querySelectorAll(".tecla");
const dayWord = "MASSA";
let elLine;

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
  if (word.length === 5 && keyName === "ENTER") {
    letterChecker(word, elLine);
    if (word === dayWord) {
      return;
    }
    word = "";
    i++;
  }
  try {
    elLine = Array.from(document.querySelector(`#tabl${i}`).children);
  } catch {
    window.alert("Rufem os tambores (TUM TUM TUM)");
  }
  for (let i = 4; i >= 0; i--) {
    if (["BACKSPACE", "DEL"].includes(keyName) && elLine[i].textContent != "") {
      removeKey(elLine[i]);
      break;
    }
  }
  for (let el of elLine) {
    if (!el.textContent && alphabet.includes(keyName)) {
      el.textContent = keyName;
      word += keyName;
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

const letterChecker = (word, line) => {
  line.forEach((e) => {
    const quadText = e.textContent;
    const repetitionsWord = repeatedTerms(word, quadText);
    // const repetitionsCWord = repeatedTerms(dayWord, quadText);
    if (![...dayWord].includes(quadText)) {
      e.classList.add("wrong");
    } else if (
      line.indexOf(e) !== [...dayWord].indexOf(quadText) &&
      line.indexOf(e) !== [...dayWord].lastIndexOf(quadText)
    ) {
      e.classList.add("parcial-correct");
    } else if (10 === 1) {
    } else {
      e.classList.add("correct");
    }
  });
};

const repeatedTerms = (word, term) => {
  let result = {};
  for (let str of word) {
    result[str] = result.hasOwnProperty(str) ? result[str] + 1 : 1;
  }
  return result[term];
};
