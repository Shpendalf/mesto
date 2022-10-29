export default class Section {
    constructor({ data, renderer }, selector, newApi) {
      this._renderedItems = data;
      this._renderer = renderer;
      this._api = newApi
      this._container = document.querySelector(selector);
    }
  
    renderItems() {
      this._renderedItems.forEach(item => this._renderer(item),this._api)
    }
  
    setItem (element) {
      this._container.prepend(element);
    }
  } 