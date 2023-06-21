package com.labback.repositories;

import com.labback.data.domain.groups.Coordinates;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface CoordinatesRepository extends JpaRepository<Coordinates, Long> {
    @Modifying
    @Transactional
    @Query("UPDATE Coordinates c SET c.x = :newX WHERE c.id = :id")
    void updateX(@Param("id") Long id, @Param("newX") Float newX);

    @Modifying
    @Transactional
    @Query("UPDATE Coordinates c SET c.y = :newY WHERE c.id = :id")
    void updateY(@Param("id") Long id, @Param("newY") Long newY);

}
