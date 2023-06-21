package com.labback.services;

import com.labback.data.domain.groups.StudyGroup;
import com.labback.repositories.StudyGroupRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class InformationService {
    private final static String COLLECTION_TYPE = "POSTGRESQL DataBase";
    private final static String INIT_DATE = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss")
            .format(new Date());
    private final StudyGroupRepository groupRepository;

    public List<String> getAllFormOfEducation() {
        List<String> forms = new ArrayList<>();
        groupRepository.findAll().stream().map(StudyGroup::getFormOfEducation).forEach(x -> forms.add(x.toString()));
        return forms;
    }
    public List<String> getAllSemesters(){
        List<String> semesters = new ArrayList<>();
        groupRepository.findAll().stream().map(StudyGroup::getSemesterEnum).forEach(x -> semesters.add(x.toString()));
        return semesters;
    }

    public List<String> getInfoAboutCollection() {
        String dbSize = Integer.toString(groupRepository.findAll().size());
        List<String> info = new ArrayList<>();
        info.add(COLLECTION_TYPE);
        info.add(INIT_DATE);
        info.add(dbSize);
        return info;
    }

}
