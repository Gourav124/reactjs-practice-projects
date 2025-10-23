import React, { useState } from "react";
import { quizData as data } from "./data";
import './styles.css';
//import { setSelectedLog } from "react-native/types_generated/Libraries/LogBox/Data/LogBoxData";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMutiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultipleSelection(getCurrentId) {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId)
    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId)
    else copyMultiple.splice(findIndexOfCurrentId, 1)

    setMultiple(copyMultiple);

  }
  console.log(selected,multiple);

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMutiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div onClick={
                enableMultiSelection
                  ? () => handleMultipleSelection(dataItem.id)
                  : () => handleSingleSelection(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.question}</h3>

                {
                   selected === dataItem.id ?
                    <span>-</span>
                    : <span>+</span>
                }

              </div>
              {
                enableMultiSelection ? 
                multiple.indexOf(dataItem.id) !== -1 && (
                   <div className="content">{dataItem.answer}</div>
                ) 
                : selected === dataItem.id && (
                   <div className="content">{dataItem.answer}</div>
                )

              }
              {/* {
                selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 
                ? <div className="content">{dataItem.answer}</div>
                : null
              } */}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}
