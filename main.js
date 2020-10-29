"use strict";

let viereck_programm_erstellen = {
  x_start_maß: null,
  y_start_maß: null,
  z_start_maß: null,
  radius: null,
  y_einstich: null,

  x_1: 0,
  y_1: 0,
  x_2: 0,
  y_2: 0,
  x_1_radius: 0,
  x_2_radius: 0,
  y_1_radius: 0,
  y_2_radius: 0,
  z_1: 0,

  daten_eingabe() {
    this.x_start_maß = parseFloat(
      prompt("Bitte geben sie das Maß der x-Achse ein (mm)")
    );
    this.y_start_maß = parseFloat(
      prompt("Bitte geben sie das Maß der y-Achse ein (mm)")
    );
    this.z_start_maß = parseFloat(
      prompt("Bitte geben sie das Maß der z-Achse ein (mm)")
    );
    this.radius = parseFloat(
      prompt("Bitte geben sie das Maß für den Radius an (mm)")
    );
  },
  daten_zusammfassung() {
    console.log(`Ihr X-Achsen Maß betraegt: ${this.x_start_maß} mm`);
    console.log(`Ihr Y-Achsen Maß betraegt: ${this.y_start_maß} mm`);
    console.log(`Ihr Z-Achsen Maß betraegt: ${this.z_start_maß} mm`);
    console.log(`Ihr Radius Maß betraegt: ${this.radius} mm`);
  },
  daten_berrechnung() {
    this.x_1 = (this.x_start_maß / 2) * -1; //groß

    this.x_1_radius = this.x_1 + this.radius; //klein

    this.y_1 = (this.y_start_maß / 2) * -1; //groß

    this.y_einstich = this.y_1 + 20;

    this.y_1_radius = this.y_1 + this.radius; //klein

    this.x_2 = this.x_start_maß / 2; //groß

    this.x_2_radius = this.x_2 - this.radius; //klein

    this.y_2 = this.y_start_maß / 2;

    this.y_2_radius = this.y_2 - this.radius; //klein

    this.z_1 = (this.z_start_maß / 2) * -1 + 2;
  },
  programm_ausgabe() {
    console.log(`            
  O9000
  G01Y${this.y_einstich}
  G01Z${this.z_1}
  G01Y${this.y_1}
  G01X${this.x_1_radius}
  G02X${this.x_1}Y${this.y_1_radius}R${this.radius}
  G01Y${this.y_2_radius}
  G02X${this.x_1_radius}Y${this.y_2}R${this.radius}
  G01X${this.x_2_radius}
  G02X${this.x_2}Y${this.y_2_radius}R${this.radius}
  G01Y${this.y_1_radius}
  G02X${this.x_2_radius}Y${this.y_1}R${this.radius}
  G01X-20
  M99
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
!ACHTUNG SIE ARBEITEN IM UHRZEIGERSINN OFFSET RECHTS ANWÄHLEN! 
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::            `);
  },

  programm_viereck() {
    this.daten_eingabe();
    this.daten_zusammfassung(
      this.x_start_maß,
      this.y_start_maß,
      this.z_start_maß,
      this.radius
    );
    this.daten_berrechnung();
    this.programm_ausgabe();
  },
};
const geometrie_wahl = function () {
  let programm_auswahl = prompt(
    "Welche Geometrie möchten sie berrechnen: Rechteck oder Kreis"
  );

  switch (programm_auswahl) {
    case "Rechteck":
      viereck_programm_erstellen.programm_viereck();
      break;
    case "Kreis":
      console.log(
        "Es tut uns Leid, aber Kreisberrechnug ist noch nicht möglich"
      );
      geometrie_wahl();
      break;
    default:
      console.log("Geben sie bitte eine gültige Geometrie ein!");
      geometrie_wahl();
  }
};
geometrie_wahl();
