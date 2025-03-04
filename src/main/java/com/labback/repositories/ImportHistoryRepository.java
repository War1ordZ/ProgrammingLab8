package com.labback.repositories;

import com.labback.data.domain.ImportHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
public interface ImportHistoryRepository extends JpaRepository<ImportHistory, Long> {
    List<ImportHistory> findByUsername(String username);
}
