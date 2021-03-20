const touche = document.querySelector('.touche');
const ecran = document.querySelector('.calculator-screen');
ecran.value='0'

touche.addEventListener('click', e => {
  const affiche = e.target;
  
  if (!affiche.matches('button')) {
    return;
  }

  if (ecran.value === '0' && affiche.matches('.zero')) {
    return ecran.value = affiche.value;
  
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