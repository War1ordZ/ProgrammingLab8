package com.labback.services;

import com.labback.data.domain.groups.Coordinates;
import com.labback.data.domain.groups.Location;
import com.labback.data.domain.groups.Person;
import com.labback.data.domain.groups.StudyGroup;
import com.labback.repositories.CoordinatesRepository;
import com.labback.repositories.LocationRepository;
import com.labback.repositories.PersonRepository;
import com.labback.repositories.StudyGroupRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class StudyGroupService {

    private final StudyGroupRepository groupRepository;
    private final LocationRepository locationRepository;
    private final CoordinatesRepository coordinatesRepository;
    private final PersonRepository personRepository;

    public void saveGroup(StudyGroup group ){ //TODO group to DTO
        Coordinates coordinates = group.getCoordinates();
        coordinatesRepository.save(coordinates);
        group.setCoordinates(coordinates);

        Person person = group.getGroupAdmin();
        Location personLocation = person.getLocation();
        locationRepository.save(personLocation);
        person.setLocation(personLocation);
        personRepository.save(person);
        group.setGroupAdmin(person);

        groupRepository.save(group);
    }

    public StudyGroup getGroupById(Long id){
        return groupRepository.findFirstById(id);
    }
}
