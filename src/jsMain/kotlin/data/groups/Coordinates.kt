package data.groups

class Coordinates {
    constructor(x: Float, y: Long) {
        this.x = x
        this.y = y
    }

    var x: Float? = null
        set(value) {
            if (value != null) {
                field = value
            }
        }
    var y: Long? = null
        set(value) {
            if (value != null) {
                field = value
            }
        }
}