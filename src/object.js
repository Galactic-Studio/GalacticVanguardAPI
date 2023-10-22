exports.Object = class {
    constructor(_pos, _velocity, _speed) { //Pos is a map with an x, y, and z
        this.position = _pos;
        this.velocity = _velocity //Should always be 0,0,0
        this.speed = _speed
    }
    getPosition(){
        return this.position
    }
}
