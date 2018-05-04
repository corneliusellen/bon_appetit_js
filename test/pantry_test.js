import { expect } from "chai"
import Pantry from "../lib/pantry"
import Recipe from "../lib/recipe"

describe("Pantry", () => {
  describe("attributes", () => {
    const pantry = new Pantry()

    it("starts with empty stock", () => {
      expect(pantry.stock).to.eql({})
    })
  })

  describe("Functions", () => {
    const pantry = new Pantry()

    it("doesn't magically have cheese", () => {
      expect(pantry.stockCheck("Cheese")).to.eql(0)
    })

    it("cheese must be added to pantry", () => {
      pantry.restock("Cheese", 10)

      expect(pantry.stock).to.eql({ "Cheese": 10 })
    })

    it("infinate amounts of cheese can be added", () => {
      pantry.restock("Cheese", 20)

      expect(pantry.stockCheck("Cheese")).to.eql(30)
    })

    it("can add a recipe to the shopping list", () => {
      const pantry = new Pantry()
      const pizza = new Recipe("Cheese Pizza")

      expect(pizza.ingredients).to.eql({})

      pizza.addIngredient("Cheese", 20)
      pizza.addIngredient("Flour", 20)

      expect(pizza.ingredients).to.eql({ "Cheese": 20, "Flour": 20 })

      pantry.addToShoppingList(pizza)

      expect(pantry.shoppingList).to.eql({ "Cheese": 20, "Flour": 20 })

      const spaghetti = new Recipe("Spaghetti")
      spaghetti.addIngredient("Noodles", 10)
      spaghetti.addIngredient("Sauce", 10)
      spaghetti.addIngredient("Cheese", 5)

      expect(spaghetti.ingredients).to.eql({ "Cheese": 5, "Noodles": 10, "Sauce": 10 })

      pantry.addToShoppingList(spaghetti)

      expect(pantry.shoppingList).to.eql({ "Cheese": 25, "Flour": 20, "Noodles": 10, "Sauce": 10 })
    })
  })
})
