import { expect } from "chai"
import Pantry from "../lib/pantry"

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
  })
})
