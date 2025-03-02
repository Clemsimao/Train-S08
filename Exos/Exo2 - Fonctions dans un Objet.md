# 🏆 Exercice 2 : Fonctions dans un Objet  

## 🔹 Instructions :  
1. Crée un objet `calculator` avec les méthodes suivantes :  
   - `add(a, b)`: retourne la somme de `a` et `b`.  
   - `subtract(a, b)`: retourne la soustraction de `a` et `b`.  
   - `multiply(a, b)`: retourne la multiplication de `a` et `b`.  
   - `divide(a, b)`: retourne la division de `a` par `b`, avec une vérification si `b` vaut `0`.  

## 💡 Astuce :  
- Pense à gérer la division par zéro pour éviter les erreurs.  

<details>
<summary>✅ Correction</summary>

```js
const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return b !== 0 ? a / b : "Impossible de diviser par 0";
  }
};

console.log(calculator.add(10, 5));     // 15
console.log(calculator.divide(10, 0));   // "Impossible de diviser par 0"
```
</details>

