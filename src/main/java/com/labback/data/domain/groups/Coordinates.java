package com.labback.data.domain.groups;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.io.IOException;

@Entity
@Data
public class Coordinates {
    private static final String SEQ_NAME = "coordinates_id_seq";

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = SEQ_NAME)
    @SequenceGenerator(name = SEQ_NAME, sequenceName = SEQ_NAME, allocationSize = 1)
    @JsonIgnore
    private Long id;

    @NotNull
    @Min(value = -156, message = "Coordinate x might be greater than -156")
    @JsonProperty("x")
    private Float x;

    @NotNull
    @JsonProperty("y")
    private Long y;
}
