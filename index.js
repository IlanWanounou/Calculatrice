const touche = document.querySelector('.touche');
const ecran = document.querySelector('.calculator-screen');
const operator = document.querySelector('.operator');
ecran.value = 0;
let isDecimal=false;
touche.addEventListener('click', e => {
  const affiche = e.target;
  if (!affiche.matches('button')) {
    return;
  }

  if (ecran.value === '0' && affiche.matches(".operator") || affiche.matches(".egal")) {
    return;
  }

  if (ecran.value === '0' && affiche.matches('.zero')) {
    return ecran.value = affiche.value;

  }
  if (affiche.classList.contains('decimal')) {
VerifDecimal( affiche.value)
return;
  }
  ecran.value = parseFloat(ecran.value + affiche.value);
})
function VerifDecimal(val) {
  if (!isDecimal) {
    ecran.value += val;
    isDecimal=true;
  }
}
