package com.labback.repositories;

import com.labback.data.domain.groups.StudyGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudyGroupRepository extends JpaRepository<StudyGroup, Long> {
    StudyGroup findFirstById(Long id);
}
