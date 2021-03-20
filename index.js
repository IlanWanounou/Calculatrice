const touche = document.querySelector('.touche');
const ecran = document.querySelector('.calculator-screen');


touche.addEventListener('click', e => {
  const affiche = e.target;
  
  if (!affiche.matches('button')) {
    return;
  }
  if (affiche.classList.contains('decimal')) {
    VerifDecimal( affiche.value)
    return;
      }
      calcul(affiche.value)
  
})
function calcul(val) {
  if (val === '=') {

      ecran.value = eval(ecran.value);
  } else {
    ecran.value += val;
  }
}


function VerifDecimal(val) {
  if (!ecran.value.includes('.')) {
    ecran.value += val;
  }
}