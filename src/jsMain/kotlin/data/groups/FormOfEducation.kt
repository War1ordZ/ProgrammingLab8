package data.groups

enum class FormOfEducation {
    DISTANCE_EDUCATION,
    FULL_TIME_EDUCATION,
    EVENING_CLASSES;

    companion object {
        fun valueOfOrNull(name: String): FormOfEducation? {
            if (name == "null") {
                return null
            }
            return try {
                FormOfEducation.valueOf(name)
            } catch (ex: IllegalArgumentException) {
                null
            }
        }
    }
}