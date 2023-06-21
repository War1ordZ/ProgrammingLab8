package com.labback.repositories;

import com.labback.data.domain.groups.FormOfEducation;
import com.labback.data.domain.groups.Semester;
import com.labback.data.domain.groups.StudyGroup;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface StudyGroupRepository extends JpaRepository<StudyGroup, Long> {
    StudyGroup findFirstById(Long id);

    @NotNull
    List<StudyGroup> findAll();

    @Query("SELECT sg.id FROM StudyGroup sg")
    List<Integer> findAllIds();

    @Override
    void deleteById(@NotNull Long id);

    List<StudyGroup> findAllBySemesterEnum(Semester semester);

    List<StudyGroup> findAllByOwner(String owner);

    @Modifying
    @Transactional
    @Query("UPDATE StudyGroup sg SET sg.name = :newName WHERE sg.id = :id")
    void updateNameById(@Param("id") Long id, @Param("newName") String newName);

    @Modifying
    @Transactional
    @Query("UPDATE StudyGroup sg SET sg.studentsCount = :studentsCount WHERE sg.id = :id")
    void updateStudentsCount(@Param("id") Long id, @Param("studentsCount") Integer studentsCount);

    @Modifying
    @Transactional
    @Query("UPDATE StudyGroup sg SET sg.formOfEducation = :formOfEducation WHERE sg.id = :id")
    void updateFormOfEducation(@Param("id") Long id, @Param("formOfEducation") FormOfEducation formOfEducation);

    @Modifying
    @Transactional
    @Query("UPDATE StudyGroup sg SET sg.semesterEnum = :semesterEnum WHERE sg.id = :id")
    void updateSemesterEnum(@Param("id") Long id, @Param("semesterEnum") Semester semesterEnum);
}
