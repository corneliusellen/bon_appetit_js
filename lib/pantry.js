import Recipe from "../lib/recipe"

export default class Pantry {
  constructor () {
    this.stock = {}
    this.shoppingList = {}
  }

  stockCheck (ingredient) {
    return this.stock[ingredient] || 0
  }

  restock (ingredient, amount) {
    let currentAmount = this.stock[ingredient] || 0
    this.stock[ingredient] = currentAmount + amount
  }

  addToShoppingList (recipe) {
    var obj = recipe.ingredients
    Object.entries(obj).forEach(
      ([key, value]) => this.shoppingList[key] = value
    )
  }
}
