import React from 'react';
import BaseInput from "./components/input/base-input";


function App() {
    return (
    <div>
      hi
        <BaseInput
            onInput={(text:string)=>{
                console.log('currentText',text)
            }}
        />
    </div>
  );
}

export default App;
