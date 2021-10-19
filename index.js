let texte = document.getElementById('texte');
let nombremots = document.querySelector('.nombremots');
let button = document.getElementById('button');


button.addEventListener('click', () => {
    let tableau = texte.value.split(' ');
    let tableau2 = [];

    tableau.forEach(element => {
        if (element.includes("'")) {
            tableau2.push(element.split("'"));

            let pos = tableau.indexOf(element);
            tableau.splice(pos, 1); // Un seul élément à la position pos
        }
    });

    tableau.forEach(element => {
        tableau2.push(element);
    });

    let compte = 0;
    tableau2.forEach(element => {
        if (Array.isArray(element)) {
            compte += element.length;
            console.log(compte)
        } else {
            compte += 1;
            //console.log(compte)
        }
    })

    nombremots.innerHTML = compte + " mots";
})

// texte.addEventListener('input', (e) => {
//     if (e.target.value.includes(" ")) {
//         console.log(e.target.value);
//     } else {
//         console.log('no')
//     }
// })