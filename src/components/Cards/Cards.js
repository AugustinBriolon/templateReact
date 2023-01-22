import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import cards from './cards.json';

export default function Cards() {

  let card = cards.cards

  function copyBackground(i) {
    console.log(card[i]);
    let copyText = `background-image: linear-gradient(0deg, ${card[i].from}, ${card[i].to})`;
    navigator.clipboard.writeText(copyText);
  }


  return (
    <>
      {card.map((card) => (
        <div key={uuidv4()} className="cards" onClick={copyBackground}>
          <div style={{
            backgroundImage: `linear-gradient(0deg, ${card.from}, ${card.to})`
          }} className="bgGardient">
          </div>
          <div className="describ">
            <p>From : {card.from}</p>
            <p>To : {card.to}</p>
          </div>
        </div>
      ))}
    </>
  )
}