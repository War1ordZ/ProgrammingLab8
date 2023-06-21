package com.labback.data.domain.groups;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "study_group")
public class StudyGroup {
    private static final String SEQ_NAME = "study_groups_id_seq";

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = SEQ_NAME)
    @SequenceGenerator(name = SEQ_NAME, sequenceName = SEQ_NAME, allocationSize = 1)
    private Long id;

    @NotNull
    @NotBlank
    private String name;

    @NotNull
    @OneToOne
    @JoinColumn(name = "coordinates_id")
    private Coordinates coordinates;

    private String creationDate;

    @Min(value = 1, message = "Students count must be greater than 0")
    @NotNull
    private Integer studentsCount;

    @Enumerated(EnumType.STRING)
    private FormOfEducation formOfEducation;

    @NotNull
    @Enumerated(EnumType.STRING)
    private Semester semesterEnum;

    @OneToOne
    @JoinColumn(name = "admin_id")
    private Person groupAdmin;

    private String owner;
}
