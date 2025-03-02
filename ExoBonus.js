const school = {
    students: [],

    addStudent(name, age) {
        this.students.push({ name, age});
    },

    listStudents() {
        console.log("Etudiants :", this.students.map(s => `${s.name} (${s.age} ans)`).join(", "));
    }
};

school.addStudent("Clément", 26);
school.listStudents();