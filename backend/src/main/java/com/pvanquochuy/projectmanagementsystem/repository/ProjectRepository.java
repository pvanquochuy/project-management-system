package com.pvanquochuy.projectmanagementsystem.repository;

import com.pvanquochuy.projectmanagementsystem.model.Issue;
import com.pvanquochuy.projectmanagementsystem.model.Project;
import com.pvanquochuy.projectmanagementsystem.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProjectRepository extends JpaRepository<Project, Long> {
    // trả về danh sách các dự án (Project) mà người dùng (User) được chỉ định là chủ sở hữu.
//    List<Project> findByOwner(User user);

    //  trả về danh sách các dự án mà tên dự án chứa một chuỗi nhất định (partialName)
    //  và trong nhóm (team) của dự án đó có một người dùng cụ thể (user).
    List<Project> findByNameContainingAndTeamContains(String partialName, User user);

    // trả về danh sách các dự án (Project) mà trong nhóm (team) của dự án đó
    // có một người dùng cụ thể (được truyền vào như tham số user).
//    @Query("SELECT p FROM Project p join p.team t where t =:user")
//    List<Project> findProjectByTeam(@Param("user")User user);

    //  trả về danh sách các dự án mà trong nhóm (team) của dự án đó có một người dùng cụ thể (user)
    //  hoặc chủ sở hữu của dự án là một người dùng cụ thể khác (owner).
    List<Project> findByTeamContainingOrOwner(User user, User owner);


}
