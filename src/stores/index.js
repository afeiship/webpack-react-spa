import About from './modules/about';
import News from './modules/news';

export default class {
  constructor() {
    this.about = new About(this);
    this.news = new News(this);
  }
}
