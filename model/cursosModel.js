const express = require("express");
const coursesList = require("../database/cursos.json");
const fs = require("fs");
const path = require("path");
const { randomUUID } = require("crypto"); //vai gerar uma ID unica para cada post

function getCoursesList(){
    return coursesList;
}

function insertCourse(title, description, professor) {
    const newCourse = {        
        id: randomUUID(), //vai gerar uma ID unica para cada post
        titulo: title,
        descricao: description,
        professor: professor
    };

    coursesList.push(newCourse);

    fs.writeFileSync(
    path.resolve("database", "cursos.json"), //- Path resolve vai ajudar a encontrar o caminho do arquivo
    JSON.stringify(coursesList) //modulo FS vai manipular o arquivo em Node 
    ); 

    return newCourse;
}

function deleteCourse(id) {
    const coursesListIndex = coursesList.findIndex((course) =>
    course.id === id);
    coursesList.splice(coursesListIndex, 1);
    courseFile()

}



function courseFile() {
    fs.writeFileSync(
        path.resolve("database", "cursos.json"),
        JSON.stringify(coursesList)
        );
}



module.exports = { getCoursesList, insertCourse, deleteCourse };
