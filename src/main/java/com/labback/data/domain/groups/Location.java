package com.labback.data.domain.groups;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Entity
@Data
public class Location {
    private static final String SEQ_NAME = "location_id_seq";

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = SEQ_NAME)
    @SequenceGenerator(name = SEQ_NAME, sequenceName = SEQ_NAME, allocationSize = 1)
    @JsonIgnore
    private Long id;

    @NotNull
    @JsonProperty("x")
    private Float x;

    @NotNull
    @JsonProperty("y")
    private Integer y;

    @NotNull
    @JsonProperty("z")
    private Integer z;
}
