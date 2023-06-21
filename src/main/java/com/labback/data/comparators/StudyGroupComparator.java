package com.labback.data.comparators;

import com.labback.data.domain.groups.StudyGroup;

import java.util.Comparator;

public class StudyGroupComparator implements Comparator<StudyGroup> {

    @Override
    public int compare(StudyGroup sg1, StudyGroup sg2) {
        return sg1.getId().compareTo(sg2.getId());
    }
}