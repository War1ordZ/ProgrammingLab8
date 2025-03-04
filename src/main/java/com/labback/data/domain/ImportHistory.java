package com.labback.data.domain;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "import_history")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ImportHistory {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String username;
    
    // Например, значения: SUCCESS, FAILURE
    @Column(nullable = false)
    private String status;
    
    // Число успешно импортированных объектов (для неуспешных можно сохранять 0)
    @Column(name = "imported_count")
    private Integer importedCount;
    
    @Column(nullable = false)
    private LocalDateTime timestamp;
}
