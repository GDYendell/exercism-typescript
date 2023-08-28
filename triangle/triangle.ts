export class Triangle {
  sides: Array<number>

  constructor(...sides: Array<number>) {
    this.sides = sides
  }

  get isTriangle() {
    return this.sides.every(side => side > 0) && (
      this.sides[0] + this.sides[1] >= this.sides[2] &&
      this.sides[0] + this.sides[2] >= this.sides[1] &&
      this.sides[1] + this.sides[2] >= this.sides[0]
    )
  }

  get isEquilateral() {
    return this.isTriangle && this.sides.every(side => side === this.sides[0])
  }

  get isIsosceles() {
    return this.isTriangle && (
      this.sides[0] === this.sides[1] ||
      this.sides[0] === this.sides[2] ||
      this.sides[1] === this.sides[2])
  }

  get isScalene() {
    return this.isTriangle && !this.isEquilateral && !this.isIsosceles
  }
}
