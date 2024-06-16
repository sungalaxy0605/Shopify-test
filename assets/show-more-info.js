// Define custom element class
class ShowMoreInfoButton extends HTMLElement {
  constructor() {
    super();

    // Set initial state
    this.isOpen = false;

    this.querySelector('.show-btn').addEventListener('click', () => {
      this.toggleDescription();
    });
  }

  toggleDescription() {

    if ( this.isOpen == false ) {
      this.parentElement.classList.add("show");
      this.querySelector('.show-btn').classList.add("rotate");
    }
    else {
      this.parentElement.classList.remove("show");
      this.querySelector('.show-btn').classList.remove("rotate");
    }

    this.isOpen = !this.isOpen;

  }
}

customElements.define('show-more-info-button', ShowMoreInfoButton);