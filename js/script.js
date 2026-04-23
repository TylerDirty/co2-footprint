let emissionsdaten = [
  {land: "Deutschland", unternehmen: "Fuchsbau GmbB", emissionen: 12000 },
  {land: "Frankreich", unternehmen: "Énergie Verte SAS", emissionen: 8700 },
  {land: "Großbritannien", unternehmen: "Greenfield Energy Ltd", emissionen: 15400 },
];
let tabellenkoerper = document.querySelector("tbody");

function zeigeTabelle(daten) {

  tabellenkoerper.innerHTML = "";

  for (let datensatz of daten){

    tabellenkoerper.innerHTML += `
      <tr>
        <td>${datensatz.land}</td>
        <td>${datensatz.unternehmen}</td>
        <td>${datensatz.emisssionen}</td>
      </tr>
    `;
  }
}

function filterNachLand(land){
  
  let gefilterteDaten = [];
  
  for (let datensatz of emissionsdaten) {

    if (datensatz.land ===) {
      gefilterteDaten.push(datensatz);
    }
  }
  zeigeTabelle(gefilterteDaten);
}