let emissionsdaten = [
  { land: "Deutschland", unternehmen: "Fuchsbau GmbH", emissionen: 12000 },
  { land: "Frankreich", unternehmen: "Énergie Verte SAS", emissionen: 8700 },
  { land: "Großbritannien", unternehmen: "Greenfield Energy Ltd", emissionen: 15400 },
];

let aktuelleDaten = [...emissionsdaten];

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

function filterDaten(filterWert) {

  if (filterWert === "") {
    aktuelleDaten = [...emissionsdaten];
    zeigeTabelle(aktuelleDaten);
    return;
  }

  let teile = filterWert.split(":");
  let feld = teile[0];
  let wert = teile[1];

  let gefilterteDaten = [];

  for (let datensatz of emissionsdaten) {
    if (datensatz[feld] === wert) {
      gefilterteDaten.push(datensatz);
    }
  }

  aktuelleDaten = gefilterteDaten;
  zeigeTabelle(aktuelleDaten);
}

function sortiereNachUnternehmen() {

  aktuelleDaten.sort(function(a, b) {

    if (a.unternehmen < b.unternehmen) {
      return -1;    
    }

    if (a.unternehmen > b.unternehmen) {
      return 1;
    }

    return 0;
  });

  zeigeTabelle(aktuelleDaten);
}

function sortiereNachLand() {

  aktuelleDaten.sort(function(a, b) {

    if (a.land < b.land) {
      return -1;    
    }

    if (a.land > b.land) {
      return 1;
    }

    return 0;
  });

  zeigeTabelle(aktuelleDaten);
}

function sortiereNachEmissionen() {

  aktuelleDaten.sort(function(a, b) {
    return a.emissionen - b.emissionen;
  });

  zeigeTabelle(aktuelleDaten);
}

document.querySelector("#filterAuswahl").addEventListener("change", function() {
  filterDaten(this.value);
});

document.querySelector("#unternehmenSort").addEventListener("click", sortiereNachUnternehmen);
document.querySelector("#landSort").addEventListener("click", sortiereNachLand);
document.querySelector("#emissionenSort").addEventListener("click", sortiereNachEmissionen);

zeigeTabelle(aktuelleDaten);