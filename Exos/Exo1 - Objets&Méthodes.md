# 🏆 Exercices JavaScript : Objets, Fonctions, String, Tableaux & Types de Données

## 📌 Exercice 1 : Objets et Méthodes  
### 🔹 Instructions :  
1. Crée un objet `person` avec les propriétés suivantes :  
   - `name` (chaîne de caractères)  
   - `age` (nombre)  
   - `city` (chaîne de caractères)  
2. Ajoute une méthode `introduce()` qui affiche une phrase comme :  
   _"Bonjour, je m'appelle [name], j'ai [age] ans et j'habite à [city]."_  
3. Appelle la méthode et affiche le résultat dans la console.  

### 💡 Astuce :  
- Utilise `this` pour accéder aux propriétés dans une méthode d'objet.  

<details>
<summary>✅ Correction</summary>

```js
const person = {
  name: "Alice",
  age: 25,
  city: "Paris",
  introduce() {
    console.log(`Bonjour, je m'appelle ${this.name}, j'ai ${this.age} ans et j'habite à ${this.city}.`);
  }
};

person.introduce();
```
</details>



