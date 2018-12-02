class StorageSrvice {
  constructor() {
    this.storage = window.localStorage;
  }

  setItem(key, value) {
    return this.storage.setItem(key, value);
  }

  getItem(key) {
    return this.storage.getItem(key);
  }
}

export default new StorageSrvice();
