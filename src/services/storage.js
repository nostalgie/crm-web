class StorageService {
  constructor () {
    this.storage = window.localStorage
  }

  setItem (key, value) {
    return this.storage.setItem(key, value)
  }

  getItem (key) {
    return this.storage.getItem(key)
  }

  removeItem (key) {
    return this.storage.removeItem(key)
  }
}

export default new StorageService()
