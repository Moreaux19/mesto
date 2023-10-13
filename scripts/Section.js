class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = containerSelector;
  }

  // функция передачи сетки изображений в код
  addItems(element) {
    this._containerSelector.prepend(element);
  }

  renderItems() {
    // загрузка массива
    this._items.forEach(item => {
      this._renderer(item);
    });
  }
}

export default Section;
