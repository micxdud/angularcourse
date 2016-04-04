export default class HomeController {
  constructor() {
    this.name = 'World';
    this.x = 0;
  }

  changeName() {
    if (!(this.x % 2)) {
      this.name = 'angular-tips';
    }
    else {
      this.name = 'World';
    }
    this.x++;
  }

}