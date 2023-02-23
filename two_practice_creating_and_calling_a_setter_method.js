set radius(r) {
    this._radius = r;
    this.area = 3.14 * Math.pow(r, 2);
    this.circumference = 2 * 3.14 * r;
}

circ.radius = 10;

get radius() {
    return this._radius;
}

circ.radius
