package data.groups

class Location {
    constructor(x: Float, y: Int, z: Int) {
        this.x = x
        this.y = y
        this.z = z
    }

    var x = 0f
    var y: Int? = null
        set(value) {
            if (value != null) {
                field = value
            }
        }
    var z = 0
}