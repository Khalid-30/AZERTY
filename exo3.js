const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const taille = parseInt(document.querySelector('#taille').value);
    const poids = parseInt(document.querySelector('#poids').value);
    const resultat = document.querySelector('#resultat');
    
    if((taille === '') || (taille < 0) || (isNaN(taille))){
        //NaN !== NaN
        resultat.innerHTML = "Merci de donner une taille valide";
        
    } else if (poids === '' || poids < 0 || isNaN(poids)){
        results.innerHTML = "Merci de donner une taille valide";
    } else {
    //calculer IMC
    const imc = (poids / ((taille*taille)/10000)).toFixed(2);
    //Affichage
    resultat.innerHTML = `<span>${imc}</span>`
    }
    
    
});

//notes
//NaN !== NaN, utiliser isNaN() function

