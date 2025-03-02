# 🏆 Exercice 4 : Tableaux (Array)  

## 🔹 Instructions :  
1. Crée un tableau `fruits` contenant `"pomme", "banane", "orange"`.  
2. Ajoute `"fraise"` à la fin et `"kiwi"` au début.  
3. Supprime le dernier élément et affiche le tableau.  
4. Affiche uniquement le deuxième élément.  
5. Trouve l'index de `"banane"`.  

## 💡 Astuce :  
- Utilise `.push()`, `.unshift()`, `.pop()`, `.indexOf()`.  

<details>
<summary>✅ Correction</summary>

```js
let fruits = ["pomme", "banane", "orange"];

fruits.push("fraise");  
fruits.unshift("kiwi");  
fruits.pop();  

console.log(fruits); // ["kiwi", "pomme", "banane"]
console.log(fruits[1]); // "pomme"
console.log(fruits.indexOf("banane")); // 2
````
</details>

