package com.springboot.todolist.controler;

import com.springboot.todolist.repository.TodoRepository;
import com.springboot.todolist.model.Status;
import com.springboot.todolist.model.ToDo;
import com.springboot.todolist.service.ToDoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/todo")
public class TodoControler {

    @Autowired
    ToDoService toDoService;

    @Autowired
    TodoRepository todoRepository;

    @CrossOrigin
    @PostMapping("/add")
    public ResponseEntity addTodo(@RequestParam String topic, @RequestParam String description)
    {
        return toDoService.addTodo(topic,description);
    }

    @CrossOrigin
    @GetMapping("/all")
    public List<ToDo> getTodoList()
    {
        //return toDoService.getToDoList();
        return todoRepository.findAll();
    }

    @CrossOrigin
    @PostMapping("/delete")
    public ResponseEntity deleteToDo(@RequestParam String topic)
    {
        return toDoService.deleteTodo(topic);
    }

    @CrossOrigin
    @PostMapping("/update")
    public ResponseEntity updateToDo(@RequestParam String topic,@RequestParam String newTopic,@RequestParam String description)
    {
        return toDoService.updateTodo(topic,newTopic,description);
    }

}
