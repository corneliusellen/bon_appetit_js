export default class Pantry {
  constructor () {
    this.stock = {}
  }

  stockCheck (ingredient) {
    return this.stock[ingredient] || 0
  }

  restock (ingredient, amount) {
    let currentAmount = this.stock[ingredient] || 0
    this.stock[ingredient] = currentAmount + amount
  }
}
