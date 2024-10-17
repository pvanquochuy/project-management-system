package com.pvanquochuy.projectmanagementsystem.repository;

import com.pvanquochuy.projectmanagementsystem.model.Issue;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IssueRepository extends JpaRepository<Issue, Long> {
    public List<Issue> findByProjectId(long id);


}
