package com.springboot.todolist.service;

import com.springboot.todolist.model.Status;
import com.springboot.todolist.model.ToDo;
import com.springboot.todolist.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class ToDoService {

    @Autowired
    TodoRepository todoRepository;

    public ToDo getToDo(String topic)
    {
        return todoRepository.findByTopic(topic);
    }

    public ResponseEntity addTodo(String topic, String description) {
        ToDo exist = todoRepository.findByTopic(topic);
        ToDo todo;
        if (exist == null) {
            todoRepository.save(new ToDo(topic, description, new Date()));
            return new ResponseEntity(HttpStatus.CREATED);
        }
        return new ResponseEntity(HttpStatus.NOT_ACCEPTABLE);
    }


    public List<ToDo> getToDoList()
    {
        return todoRepository.findAll();
    }

    public ResponseEntity deleteTodo(String topic)
    {
        ToDo todo = todoRepository.findByTopic(topic);
        if (todo == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        else
            {
            todoRepository.delete(todo);
            return new ResponseEntity(HttpStatus.ACCEPTED);
        }
    }

    public ResponseEntity updateTodo(String topic,String newTopic,String desc)
    {
        ToDo todo = todoRepository.findByTopic(topic);
        if (todo == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        else
        {
            todo.setTopic(newTopic);
            todo.setDescription(desc);
            todoRepository.save(todo);
            return new ResponseEntity(HttpStatus.ACCEPTED);
        }
    }

}
