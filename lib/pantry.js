export default class Pantry {
  constructor () {
    this.stock = {}
  }

  stockCheck (ingredient) {
    return this.stock[ingredient] || 0
  }

  
}
