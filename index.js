
const touche = document.querySelector('.touche');
const ecran = document.querySelector('.calculator-screen');

touche.addEventListener('click', e => {
  const affiche = e.target;
  if (!affiche.matches('button')) {
    return;
  }
  if(affiche.matches(".operator")||affiche.matches(".plus")||affiche.matches(".egal")||affiche.matches(".decimal")) {
    return;
  }
  if (ecran.value === '0' && affiche.matches('.zero')) {
    ecran.value = affiche.value;
  } else {
    ecran.value = parseInt(ecran.value + affiche.value);
  }
});
