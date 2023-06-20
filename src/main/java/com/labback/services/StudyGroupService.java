package com.labback.services;

import com.labback.data.domain.groups.Coordinates;
import com.labback.data.domain.groups.Location;
import com.labback.data.domain.groups.Person;
import com.labback.data.domain.groups.StudyGroup;
import com.labback.exceptions.GroupNotBelongToUserException;
import com.labback.repositories.CoordinatesRepository;
import com.labback.repositories.LocationRepository;
import com.labback.repositories.PersonRepository;
import com.labback.repositories.StudyGroupRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StudyGroupService {

    private final StudyGroupRepository groupRepository;
    private final LocationRepository locationRepository;
    private final CoordinatesRepository coordinatesRepository;
    private final PersonRepository personRepository;

    public void saveGroup(StudyGroup group) { //TODO group to DTO
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

    public void deleteGroupById(Long id) {
        StudyGroup group = groupRepository.findFirstById(id);
        groupRepository.delete(group);
        Coordinates coordinates = group.getCoordinates();
        coordinatesRepository.delete(coordinates);
        Person person = group.getGroupAdmin();
        personRepository.delete(person);
        Location location = person.getLocation();
        locationRepository.delete(location);
    }

    public StudyGroup getGroupById(Long id) {
        System.out.println(groupRepository.findAllIds());
        return groupRepository.findFirstById(id);
    }

    public Page<StudyGroup> getPageGroups(Pageable pageable) {
        return groupRepository.findAll(pageable);
    }

    public List<StudyGroup> getAllGroups() {
        return groupRepository.findAll();
    }

    public void updateGroupById(StudyGroup group, Long id) {
        String groupOwner = groupRepository.findFirstById(id).getOwner();
        if(!groupOwner.equals(group.getOwner())){
            throw new GroupNotBelongToUserException("Aces denied");
        }
        groupRepository.updateNameById(id, group.getName());
        groupRepository.updateFormOfEducation(id, group.getFormOfEducation());
        groupRepository.updateSemesterEnum(id, group.getSemesterEnum());
        groupRepository.updateStudentsCount(id, group.getStudentsCount());

        Coordinates newCoordinates = group.getCoordinates();
        coordinatesRepository.updateX(id, newCoordinates.getX());
        coordinatesRepository.updateY(id, newCoordinates.getY());

        Person newPerson = group.getGroupAdmin();
        personRepository.updateEyeColor(id, newPerson.getEyeColor());
        personRepository.updateName(id, newPerson.getName());
        personRepository.updateWeight(id, newPerson.getWeight());

        Location newLocation = newPerson.getLocation();
        locationRepository.updateX(id, newCoordinates.getX());
        locationRepository.updateY(id, newLocation.getY());
        locationRepository.updateZ(id, newLocation.getZ());
    }
}
