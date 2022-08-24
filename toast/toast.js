const Toast = {
  init() {
    this.hideTimeout = null;
    this.el = document.createElement("div");
    this.el.classList.add("toast");
    document.body.appendChild(this.el);
  },
  show(message, state) {
    clearTimeout(this.hideTimeout);
    this.el.textContent = message;
    this.el.classList.add("toast--visible");

    if (state) {
      this.el.classList.add(`toast--${state}`);
    }

    this.hideTimeout = setTimeout(() => {
      this.el.classList.remove("toast--visible");
    }, 1000);
  },
};

document.addEventListener("DOMContentLoaded", () => Toast.init());
('<div class="toast toast--visible toast--error">Not word in list.</div>');
