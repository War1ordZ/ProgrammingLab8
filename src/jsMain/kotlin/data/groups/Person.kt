package data.groups


class Person {
    constructor(name: String, weight: Long, eyeColor: Color, location: Location) {
        this.name = name
        this.weight = weight
        this.eyeColor = eyeColor
        this.location = location
    }
    var name: String? = null
        set(value) {
            if (value != null) {
                field = value
            }
        }
    var weight: Long? = null
        set(value) {
            if (value != null && value > 0) {
                field = value
            }
        }
    var eyeColor: Color? = null
    var location: Location? = null
        set(value) {
            if (value != null) {
                field = value
            }
        }
}