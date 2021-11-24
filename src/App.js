import React from 'react';
import HooksQuestions from "./hooks/hooksQuestions";
import HookUseRef from "./hooks/hookUseRef";
import HookUseEffect from "./hooks/hookUseEffect";


const App = () => {
    return (
        <div>
            <HooksQuestions/>
            <HookUseRef/>
            <HookUseEffect/>
        </div>
    );
};

export default App;