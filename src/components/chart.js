import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {
  const avg = props.data.reduce((a,c) => a + c, 0) / props.data.length;
  return (
    <div>
      <Sparklines data={props.data} svgWidth={220} svgHeight={200}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <p>Average: {Math.round(avg)} {props.unit}</p>
    </div>
  );
}
