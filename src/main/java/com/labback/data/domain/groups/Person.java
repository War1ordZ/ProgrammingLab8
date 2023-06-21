package com.labback.data.domain.groups;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Person {
    private static final String SEQ_NAME = "person_id_seq";

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = SEQ_NAME)
    @SequenceGenerator(name = SEQ_NAME, sequenceName = SEQ_NAME, allocationSize = 1)
    @JsonIgnore
    private Long id;

    @NotNull
    @NotBlank
    @JsonProperty("name")
    private String name;

    @NotNull
    @Min(value = 1, message = "Weight must be greater than 0")
    @JsonProperty("weight")
    private Long weight;

    @Enumerated(EnumType.STRING)
    @JsonProperty("eyeColor")
    private Color eyeColor;

    @NotNull
    @OneToOne
    @JoinColumn(name = "location_id")
    @JsonProperty("location")
    private Location location;
}
