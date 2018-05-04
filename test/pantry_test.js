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
      const r = new Recipe("Cheese Pizza")

      expect(r.ingredients).to.eql({})

      r.addIngredient("Cheese", 20)
      r.addIngredient("Flour", 20)

      expect(r.ingredients).to.eql({ "Cheese": 20, "Flour": 20 })

      pantry.addToShoppingList(r)

      expect(pantry.shoppingList).to.eql({ "Cheese": 20, "Flour": 20 })
    })
  })
})
