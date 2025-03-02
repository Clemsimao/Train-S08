# 🏆 Exercice 3 : Manipulation de Chaînes (String)  

## 🔹 Instructions :  
1. Déclare une variable `sentence` contenant `"JavaScript, c'est génial !"`.  
2. Affiche :  
   - Sa longueur  
   - La phrase en majuscules et en minuscules  
   - Remplace `"JavaScript"` par `"JS"`  
   - Vérifie si elle contient `"génial"`  

## 💡 Astuce :  
- Utilise `.toUpperCase()`, `.replace()`, `.includes()` et `.length`.  

<details>
<summary>✅ Correction</summary>

```js
const sentence = "JavaScript, c'est génial !";

console.log(sentence.length);  
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());
console.log(sentence.replace("JavaScript", "JS"));
console.log(sentence.includes("génial")); // true
````
</details>

