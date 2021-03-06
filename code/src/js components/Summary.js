import React from 'react';

import {ButtonSubscribe} from "js components/ButtonSubscribe";
import {ButtonReset} from "js components/ButtonReset.js";

export const Summary = (props) => {
return (
<>
  <section className="summary">
    <p>Hey {props.name}! We are going to deliver your {props.drink} tomorrow to {props.address}! Enjoy! If you would like to get your coffee delivery {props.answeramount} times per week, please subscribe.</p>
    <ButtonSubscribe />
    <ButtonReset />
  </section>
</>
)
}