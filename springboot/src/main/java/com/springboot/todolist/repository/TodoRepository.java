package com.springboot.todolist.repository;

import com.springboot.todolist.model.ToDo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository extends MongoRepository<ToDo,String> {
    ToDo findByTopic(String name);
}
