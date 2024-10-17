package com.pvanquochuy.projectmanagementsystem.controller;


import com.pvanquochuy.projectmanagementsystem.model.Issue;
import com.pvanquochuy.projectmanagementsystem.model.Project;
import com.pvanquochuy.projectmanagementsystem.model.User;
import com.pvanquochuy.projectmanagementsystem.service.IssueService;
import com.pvanquochuy.projectmanagementsystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/issues")
public class IssueController {
    @Autowired
    private IssueService issueService;
    @Autowired
    private UserService userService;

    @GetMapping("{issueId}")
    public ResponseEntity<Issue> getIssueById(@PathVariable Long issueId) throws Exception {

        return  ResponseEntity.ok(issueService.getIssueById(issueId));
    }

    @GetMapping("/project/{projectId}")
    public ResponseEntity<List<Issue>> getIssueByProjectId(@PathVariable Long projectId) throws Exception {

        return  ResponseEntity.ok(issueService.getIssueByProjectId(projectId    ));
    }


}
