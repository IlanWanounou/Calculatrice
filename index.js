const touche = document.querySelector('.touche');
const ecran = document.querySelector('.calculator-screen');
let numB = "";
let numA = "";
let operation = "";
let resultat = "";
touche.addEventListener('click', e => {
  const affiche = e.target;

  if (!affiche.matches('button')) {
    return;
  }
  if (ecran.value === '0' && affiche.matches('.zero')) {
    return ecran.value = affiche.value;

  } if (affiche.classList.contains('number')) {
    //VerifDecimal(affiche.value)
    numB += affiche.value;
    ecran.value = numB;
  } else calcul(affiche.value);

});

function calcul(val) {
  if (val === "AC") {
    ecran.value = "";
    numA = "";
    numB = "";
    operation = "";
    return;
  }
  else if (numA !== "") {
    numB = parseFloat(numB);
    switch (operation) {
      case "/":
        if (numB === 0) {
          resultat = "Euh.";
        } else {
          resultat = numA / numB;
        }
        break;
      case "*":
        resultat = numA * numB;
        break;
      case "-":
        resultat = numA - numB;
        break;
      case "+":
        resultat = numA + numB;
        break;
      case "=":
        resultat = parseFloat(ecran.value);
        break;

    };
    if (resultat==="Euh.") {
      setTimeout(function () {
        numA = "";
        numB = "";
        operation = "";
        ecran.value="";
      }, 2000);
    }
      ecran.value = resultat;
      numA = resultat;
  } else if (numB !== "") {
    numA = (numB);
  } 
  numB = "";
  operation = val;
};
/*function VerifDecimal(val) {
  if (!ecran.value.includes('.')) {
    ecran.value += val;
  }
  return;
}*/