const person = {
    name: "clem",
    age: 26,
    city: "floirac",

    introduce() {
        console.log(`Bonjour, je m'appelle ${this.name}, j'ai ${this.age} et j'habite à ${this.city}`);
        
    }
};

person.introduce();