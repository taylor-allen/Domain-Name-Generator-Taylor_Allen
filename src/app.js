/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let domainNames; // Declare domainNames outside the generateDomain function

  document.querySelector("#btn").addEventListener("click", () => {
    domainNames = generateDomain();
    displayDomains(domainNames);
  });

  let generateDomain = () => {
    let pronoun = ["the", "our", "your", "its", "my"];
    let adj = ["great", "big", "happy", "ugly", "slow"];
    let noun = ["book", "dog", "family", "tree", "time"];
    let dom = [".com", ".net", ".gov", ".io", ".us"];

    let generatedDomains = [];

    for (let i = 0; i < 8; i++) {
      // Limit to 8 iterations
      let randomPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
      let randomAdj = adj[Math.floor(Math.random() * adj.length)];
      let randomNoun = noun[Math.floor(Math.random() * noun.length)];
      let randomDom = dom[Math.floor(Math.random() * dom.length)];

      let domainName = `${randomPronoun}${randomAdj}${randomNoun}${randomDom}`;
      generatedDomains.push(domainName);
    }

    return generatedDomains;
  };

  let displayDomains = domains => {
    let domainList = domains.map(domain => `<li>${domain}</li>`).join("");
    document.querySelector(
      "#the-domain"
    ).innerHTML = `<ul style="list-style-type: none; padding: 0;">${domainList}</ul>`;
  };
};
