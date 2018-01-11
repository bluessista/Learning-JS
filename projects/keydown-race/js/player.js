class Player {
  constructor(name, selector, key) {
    this.name = name;
    this.selector = selector;
    this.key = key;
    this.position = 0;

    //Aufruf der Methode mit this.
    this.initEventListener();
  }
  //Methoden
  initEventListener() {
    document.addEventListener('keydown', this.handleKeydown.bind(this));
  }

  handleKeydown(event) {
    if (event.keyCode === this.key) {
      this.moveForward();
    }
  }

  moveForward() {
    this.position += 10;

    if (this.position < 100) {
    document.querySelector(this.selector).style.left = this.position + "%";
    } else {
    this.handleFinish();
    }
  }

  handleFinish() {
    document.querySelector('.finish').classList.add('show');
    document.querySelector('.winner').textContent = this.name;
  }
}
