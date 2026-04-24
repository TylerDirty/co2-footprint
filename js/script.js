let emissionsdaten = [
  { land: "Deutschland", unternehmen: "Fuchsbau GmbB", emissionen: 12000 },
  { land: "Frankreich", unternehmen: "Énergie Verte SAS", emissionen: 8700 },
  { land: "Großbritannien", unternehmen: "Greenfield Energy Ltd", emissionen: 15400 },
];

const erlaubteLaender = ["Deutschland", "Frankreich", "Großbritannien"];

let tabellenkoerper = document.querySelector("tbody");

function zeigeTabelle(daten) {

  tabellenkoerper.innerHTML = "";

  for (let datensatz of daten){

    tabellenkoerper.innerHTML += `
      <tr>
        <td>${datensatz.land}</td>
        <td>${datensatz.unternehmen}</td>
        <td>${datensatz.emissionen}</td>
      </tr>
    `;
  }
}

function filterNachLand(land){

  if (!erlaubteLaender.includes(land) && land !== "") {
    console.log("ungültige Eingabe");
    return;
  }
  
  let gefilterteDaten = [];
  
  for (let datensatz of emissionsdaten) {

    if (datensatz.land === land) {
      gefilterteDaten.push(datensatz);
    }
  }

  zeigeTabelle(gefilterteDaten);
}

function sortiereNachUnternehmen() {

  emissionsdaten.sort(function(a, b) {

    if (a.unternehmen < b.unternehmen) {
      return -1;    
    }

    if (a.unternehmen > b.unternehmen) {
      return 1;
    }

    return 0;
  });

  zeigeTabelle(emissionsdaten);
}

function sortiereNachLand() {

  emissionsdaten.sort(function(a, b) {

    if (a.land < b.land) {
      return -1;    
    }

    if (a.land > b.land) {
      return 1;
    }

    return 0;
  });

  zeigeTabelle(emissionsdaten);
}

function sortiereNachEmissionen() {

  emissionsdaten.sort(function(a, b) {
    return a.emissionen - b.emissionen;
  });

  zeigeTabelle(emissionsdaten);
}

zeigeTabelle(emissionsdaten);