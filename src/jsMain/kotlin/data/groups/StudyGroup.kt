package data.groups


class StudyGroup {
    constructor(id: Long,
                name: String,
                coordinates: Coordinates,
                creationDate: String,
                studentsCount: Int,
                formOfEducation: FormOfEducation?,
                semesterEnum: Semester,
                groupAdmin: Person,
                owner: String
        ) {
        this.id = id
        this.name = name
        this.coordinates = coordinates
        this.creationDate = creationDate
        this.studentsCount = studentsCount
        this.formOfEducation = formOfEducation
        this.semesterEnum = semesterEnum
        this.groupAdmin = groupAdmin
        this.owner = owner

    }

    var id: Long? = null
        set(value) {
            if (value != null) {
                field = value
            }
        }
    var name: String? = null
        set(value) {
            if (value != null) {
                field = value
            }
        }
    var coordinates: Coordinates? = null
        set(value) {
            if (value != null) {
                field = value
            }
        }
    var creationDate: String? = null
        set(value) {
            if (value != null) {
                field = value
            }
        }
    var studentsCount: Int? = null
        set(value) {
            if (value != null && value > 0) {
                field = value
            }
        }
    var formOfEducation: FormOfEducation? = null
    var semesterEnum: Semester? = null
        set(value) {
            if (value != null) {
                field = value
            }
        }
    var groupAdmin: Person? = null
        set(value) {
            if (value != null) {
                field = value
            }
        }
    var owner: String? = null
        set(value) {
            if (value != null) {
                field = value
            }
        }

    fun getJson(): String {
        return "{\"id\":${id},\"name\":\"${name}\"," +
                "\"coordinates\":{\"x\":${coordinates!!.x}, \"y\":${coordinates!!.y}}," +
                "\"creationDate\":null,\"studentsCount\":${studentsCount}," +
                "\"formOfEducation\":${if (formOfEducation == null) "null" else "\"${formOfEducation}\""}," +
                "\"semesterEnum\":\"${semesterEnum}\"," +
                "\"groupAdmin\": {\"name\":\"${groupAdmin!!.name}\", \"weight\":${groupAdmin!!.weight}," +
                "\"eyeColor\":\"${groupAdmin!!.eyeColor}\", \"location\":{" +
                "\"x\":${groupAdmin!!.location!!.x}, \"y\":${groupAdmin!!.location!!.y}" +
                ", \"z\":${groupAdmin!!.location!!.z}}}}"
    }
}