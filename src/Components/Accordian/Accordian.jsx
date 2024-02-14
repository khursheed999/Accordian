//single selection
//multiple selection accordian
import React, { useState } from "react";
import './styles.css'
import Data from "./Data";

const Accordian = () => {
   const [selected, setSelected] = useState(null);
   const [enableMultiSelection, setEnableMulitSelection] = useState(false);
   const [multiple, setMultiple] = useState([]);

   function handleSingleSeletion(getCurrentId) {
      setSelected(getCurrentId === selected ? null : getCurrentId)
   }
   function handleMultipleSelection(getCurrentId) {

      const alreadyAddedToMultiple=multiple.includes(getCurrentId);
      if(alreadyAddedToMultiple){
         setMultiple(multiple.filter(element=>element!==getCurrentId));
         console.log(multiple+'    in if case');
      }
      else{
         setMultiple([...multiple,getCurrentId]);
         console.log(multiple+'    in else case');
      }
    
   }

   return <div className="wrapper" >
      <div><h1>Accordian</h1></div>
     <button onClick={() => setEnableMulitSelection(!enableMultiSelection)}>
      MultiSelection =
          {enableMultiSelection
          ?<span>Enabled</span>
          :<span>Disabled</span>}
          </button>
          
      <div className="accordian">
         {
            Data && Data.length ?
               Data.map(dataItem => <div className="item" key={dataItem.id}>
                  <div onClick={enableMultiSelection ?
                     () => handleMultipleSelection(dataItem.id)
                     : () => handleSingleSeletion(dataItem.id)
                  }
                     className="title">
                     <h3>{dataItem.text}</h3>
                     <span className="btn">{(selected === dataItem.id)||(enableMultiSelection&&multiple.includes(dataItem.id))
                      ? <span>-</span> 
                      : <span>+</span>}</span>
                  </div>
                  <div>
                     {  enableMultiSelection && multiple.includes(dataItem.id)
                     ?<div className="answer">{dataItem.answers}</div>
                     :selected === dataItem.id && <div className="answer">{dataItem.answers}</div>}

                  </div>
               </div>
               )
               : <p>
                  No Data is present
               </p>
         }

      </div>

   </div>
}
export default Accordian;