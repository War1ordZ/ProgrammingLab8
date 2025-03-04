package com.labback.services;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.yaml.YAMLFactory;
import com.labback.data.domain.groups.StudyGroup;
import com.labback.data.domain.ImportHistory;
import com.labback.repositories.ImportHistoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ImportService {

    private final StudyGroupService studyGroupService;
    private final ImportHistoryRepository importHistoryRepository;


    @Transactional
    public void importFile(MultipartFile file, String username) throws Exception {
        int count = 0;
        try {
            ObjectMapper mapper = new ObjectMapper(new YAMLFactory());
            List<StudyGroup> groups = mapper.readValue(file.getInputStream(), new TypeReference<List<StudyGroup>>() {});
            if (groups == null || groups.isEmpty()) {
                throw new Exception("Файл пустой или не содержит записей");
            }
            for (StudyGroup group : groups) {
                group.setOwner(username);
                studyGroupService.saveGroup(group);
                count++;
            }
            ImportHistory history = ImportHistory.builder()
                    .username(username)
                    .status("SUCCESS")
                    .importedCount(count)
                    .timestamp(LocalDateTime.now())
                    .build();
            importHistoryRepository.save(history);
        } catch (Exception e) {
            ImportHistory history = ImportHistory.builder()
                    .username(username)
                    .status("FAILURE")
                    .importedCount(0)
                    .timestamp(LocalDateTime.now())
                    .build();
            importHistoryRepository.save(history);
            throw e;
        }
    }
}
