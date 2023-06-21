package com.labback.services;

import com.labback.data.comparators.StudyGroupComparator;
import com.labback.data.domain.groups.*;
import com.labback.exceptions.GroupNotBelongToUserException;
import com.labback.repositories.CoordinatesRepository;
import com.labback.repositories.LocationRepository;
import com.labback.repositories.PersonRepository;
import com.labback.repositories.StudyGroupRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class StudyGroupService {

    private final StudyGroupRepository groupRepository;
    private final LocationRepository locationRepository;
    private final CoordinatesRepository coordinatesRepository;
    private final PersonRepository personRepository;

    public void saveGroup(StudyGroup group) {
        Coordinates coordinates = group.getCoordinates();
        coordinatesRepository.save(coordinates);
        group.setCoordinates(coordinates);

        Person person = group.getGroupAdmin();
        Location personLocation = person.getLocation();
        locationRepository.save(personLocation);
        person.setLocation(personLocation);
        personRepository.save(person);
        group.setGroupAdmin(person);
        group.setCreationDate(
                new SimpleDateFormat("yyyy/MM/dd")
                .format(new Date()));

        groupRepository.save(group);
    }

    public void deleteAllByOwner(String owner) {
        List<Long> ids = new ArrayList<>();
        groupRepository.findAllByOwner(owner).forEach(x -> {
            Long id = x.getId();
            ids.add(id);
        });
        ids.forEach(x -> deleteGroupById(x, owner));
    }

    public void deleteGroupById(Long id, String username) {
        checkBelonging(id, username);
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
        List<StudyGroup> groups = groupRepository.findAll();
        groups.sort(new StudyGroupComparator());
        return groups;
    }

    public void updateGroupById(StudyGroup group, Long id) {
        checkBelonging(id, group);
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

    public List<StudyGroup> getAllBySemester(String semesterStr) {
        Semester semester = Semester.valueOf(semesterStr.toUpperCase());
        var groups = groupRepository.findAllBySemesterEnum(semester);
        groups.sort(new StudyGroupComparator());
        return groups;
    }

    private void checkBelonging(Long id, StudyGroup newGroup) {
        String groupOwner = groupRepository.findFirstById(id).getOwner();
        if (!groupOwner.equals(newGroup.getOwner())) {
            throw new GroupNotBelongToUserException("Access denied");
        }
    }

    private void checkBelonging(Long id, String username) {
        String groupOwner = groupRepository.findFirstById(id).getOwner();
        if (!groupOwner.equals(username)) {
            throw new GroupNotBelongToUserException("Access denied");
        }
    }
}
