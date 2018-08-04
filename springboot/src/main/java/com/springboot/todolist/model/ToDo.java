package com.springboot.todolist.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document
public class ToDo {

    @Id
    private String id;
    @Indexed
    private String topic;
    private String description;
    private Date date;

    public ToDo(String topic, String description, Date date) {
        this.topic = topic;
        this.description = description;
        this.date = date;
    }

    public String getTopic() {
        return topic;
    }

    public String getDescription() {
        return description;
    }


    public void setTopic(String topic) {
        this.topic = topic;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
