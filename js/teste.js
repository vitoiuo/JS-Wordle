const getKey = () => {
  const el = document.querySelectorAll(".linha-tab .quad ");
  return el;
};

const interfaceKeyboardReader = () => {
  const el2 = Array.from(getKey());
  const breakPoints = el2.filter((e) => !(el2.indexOf(e) % 5)).slice(1);
  for (el of el1) {
    el.addEventListener("click", (e) => {
      const el1 = e.target;
      if (el1.classList.contains("tecla")) {
        for (element of el2) {
          if (breakPoints.includes(element) && el1.textContent !== "ENTER") {
            break;
          } else if (el1.textContent === "DEL") {
            deleteContent(element);
          } else if (!element.textContent && el1.textContent !== "ENTER") {
            element.textContent = el1.textContent;
            break;
          }
        }
        if (el1.textContent === "ENTER") {
          breakPoints.splice(0, 1);
        }
      }
    });
  }
};

const deleteContent = (element) => (element.textContent = null);

interfaceKeyboardReader();
