/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let domainNames; // declares domainNames outside the generateDomain function

  // this part makes the button functional
  document.querySelector("#btn").addEventListener("click", () => {
    domainNames = generateDomain();
    displayDomains(domainNames);
  });

  // this part declares my generateDomain function
  let generateDomain = () => {
    let pronoun = ["the", "our", "your", "its", "my"];
    let adj = ["great", "big", "happy", "ugly", "slow"];
    let noun = ["book", "dog", "family", "tree", "time"];
    let dom = [".com", ".net", ".gov", ".io", ".us"];

    let generatedDomains = [];

    // nested loops for generating combinations
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

    // this shuffles the array to get random combinations
    // after shuffling, the slice method extracts a portion of the array and creates a new one
    // the result is assigned to the generatedDomains variable
    generatedDomains = shuffleArray(generatedDomains).slice(0, 8);

    return generatedDomains;
  };

  // this part declares the shuffleArray function and uses an array as its argument
  // it shuffles the elements of the array using a loop that iterates from the last element to the second element,
  // swapping each element with a randomly chosen element before it so that it's not giving the same list of iterations just in different order.
  let shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // this function is taking the array of domain names, creating an HTML string with an ul and then updating the content of 'the-domain' to display the list
  // it defines displayDomains; if left undefined, button won't work
  let displayDomains = domains => {
    let domainList = domains.map(domain => `<li>${domain}</li>`).join("");
    document.querySelector(
      "#the-domain"
    ).innerHTML = `<ul style="list-style-type: none; padding: 0;">${domainList}</ul>`;
  };
};
