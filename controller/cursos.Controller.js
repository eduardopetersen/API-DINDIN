const coursesModel = require("../model/cursosModel");

const coursesController = {
    get: (request, response) => {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.json(coursesModel.getCoursesList());
    },

    welcome: (request, response) => {
        response.send("bem-vindo a api");
    },

    insert: (request, response) => {
        const { title, description, professor } = request.body; //define o nome da propriedade que esta sendo enviada    
        
        const newCourse = coursesModel.insertCourse(randomUUID, title, description, professor);

        response.status(201).json(newCourse);

    },

    

    delete: (request, response) => {
        const { id } = request.params;
        const newList = coursesModel.deleteCourse(id);

        response.status(204).json({message:"Curso removido com sucesso"});
    },
};

module.exports = coursesController; 