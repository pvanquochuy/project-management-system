package com.pvanquochuy.projectmanagementsystem.service;

import com.pvanquochuy.projectmanagementsystem.model.Issue;
import com.pvanquochuy.projectmanagementsystem.model.User;
import com.pvanquochuy.projectmanagementsystem.request.IssueRequest;

import java.util.List;
import java.util.Optional;

public interface IssueService {
    Issue getIssueById(Long issueId) throws Exception;

    List<Issue> getIssueByProjectId(Long projectId) throws Exception;

    Issue createIssue(IssueRequest issue, User user) throws Exception;

    void deleteIssue(Long issueId, Long userId) throws Exception;

    Issue addUserToIssue(Long issueId, Long userId) throws Exception;

    List<Issue> searchIssue(String title, String status, String priority, Long assigneeId) throws Exception;

    Issue updateStatus(Long issueId, String status) throws Exception;
}
