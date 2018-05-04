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
  })
})
