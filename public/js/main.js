// Exo 1
let mot = prompt('Entrez un mot')
let lettre = prompt ('Entrez la lettre à retirer')
mot = mot.replace(lettre, "");
console.log(mot);


// Exo 2
let mot2 = prompt('Entrez un mot');
let longmax = mot2.length;
let random = Math.round(Math.random() * longmax);
mot2 = mot2.replace(mot2.charAt(random), "")
console.log(mot2);

// Exo 3
