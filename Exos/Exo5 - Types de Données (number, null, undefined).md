# 🏆 Exercice 5 : Types de Données (`number`, `null`, `undefined`)  

## 🔹 Instructions :  
1. Crée une variable `x` avec une valeur numérique et affiche son type (`typeof`).  
2. Crée une variable `y` avec la valeur `null` et affiche son type.  
3. Crée une variable `z` sans lui donner de valeur et affiche son type.  
4. Vérifie si `x` est un **nombre entier** avec `Number.isInteger(x)`.  

## 💡 Astuce :  
- Attention, `typeof null` retourne `"object"` en JavaScript !  

<details>
<summary>✅ Correction</summary>

```js
let x = 42;
let y = null;
let z;

console.log(typeof x); // "number"
console.log(typeof y); // "object" (particularité de JS)
console.log(typeof z); // "undefined"
console.log(Number.isInteger(x)); // true
````
</details>