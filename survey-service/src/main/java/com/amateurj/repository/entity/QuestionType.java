package com.amateurj.repository.entity;

public enum QuestionType {
    TEXT (1,"text"),YES_NO(2,"yesNo"),NUMERIC(3,"numeric");

    private int id;
    private String name;

    QuestionType ( int id, String name ) {
        this.id = id;
        this.name = name;
    }
}
