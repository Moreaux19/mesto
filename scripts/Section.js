class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = containerSelector;
  }

  addItems(element) {
    this._containerSelector.prepend(element);
  }

  renderItems() {
    this._items.forEach(item => {
      this._renderer(item);
    });
  }
}

export default Section;
