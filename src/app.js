/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let domainNames; // Declare domainNames outside the generateDomain function

  document.querySelector("#btn").addEventListener("click", () => {
    domainNames = generateDomain();
    document.querySelector("#the-domain").innerHTML =
      domainNames[Math.floor(Math.random() * domainNames.length)];
  });

  let generateDomain = () => {
    let pronoun = ["the", "our", "your", "its", "my"];
    let adj = ["great", "big", "happy", "ugly", "slow"];
    let noun = ["book", "dog", "family", "tree", "time"];
    let dom = [".com", ".net", ".gov", ".io", ".us"];

    let generatedDomains = [];

    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          for (let l = 0; l < dom.length; l++) {
            let domainName = `${pronoun[i]}${adj[j]}${noun[k]}${dom[l]}`;
            generatedDomains.push(domainName);
          }
        }
      }
    }
    return generatedDomains;
  };
};
