package com.labback.repositories;

import com.labback.data.domain.groups.Color;
import com.labback.data.domain.groups.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {

    Long getLocationIdById(Long id);

    @Modifying
    @Transactional
    @Query("UPDATE Person p SET p.name = :name WHERE p.id = :id")
    void updateName(@Param("id") Long id, @Param("name") String name);

    @Modifying
    @Transactional
    @Query("UPDATE Person p SET p.weight = :weight WHERE p.id = :id")
    void updateWeight(@Param("id") Long id, @Param("weight") Long weight);

    @Modifying
    @Transactional
    @Query("UPDATE Person p SET p.eyeColor = :eyeColor WHERE p.id = :id")
    void updateEyeColor(@Param("id") Long id, @Param("eyeColor") Color eyeColor);

}
