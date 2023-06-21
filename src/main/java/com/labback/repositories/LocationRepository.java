package com.labback.repositories;

import com.labback.data.domain.groups.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {
    @Modifying
    @Transactional
    @Query("UPDATE Location l SET l.x = :x WHERE l.id = :id")
    void updateX(@Param("id") Long id, @Param("x") float x);

    @Modifying
    @Transactional
    @Query("UPDATE Location l SET l.y = :y WHERE l.id = :id")
    void updateY(@Param("id") Long id, @Param("y") Integer y);

    @Modifying
    @Transactional
    @Query("UPDATE Location l SET l.z = :z WHERE l.id = :id")
    void updateZ(@Param("id") Long id, @Param("z") int z);

}

