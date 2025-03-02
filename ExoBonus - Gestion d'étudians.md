# 🚀 Bonus : Gestion d'Étudiants  

## 🔹 Challenge final :  
Crée un **système de gestion d'étudiants** sous forme d'un objet **`school`** qui :  
1. Contient une **liste d'étudiants** (tableau avec des objets `{name, age}`)  
2. Possède une méthode `addStudent(name, age)` pour ajouter un étudiant  
3. Possède une méthode `listStudents()` pour afficher tous les étudiants  

## 💡 Astuce :  
- Utilise `.push()` pour ajouter un étudiant et `.map()` pour afficher la liste.  

<details>
<summary>✅ Correction</summary>

```js
const school = {
  students: [],
  
  addStudent(name, age) {
    this.students.push({ name, age });
  },

  listStudents() {
    console.log("Étudiants :", this.students.map(s => `${s.name} (${s.age} ans)`).join(", "));
  }
};

school.addStudent("Alice", 22);
school.addStudent("Bob", 25);
school.listStudents();
// "Étudiants : Alice (22 ans), Bob (25 ans)"
````
</details>