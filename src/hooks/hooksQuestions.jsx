import React, {useEffect, useRef, useState} from 'react';

const HooksQuestions = () => {
// ======= +4 ==============
    const [state, setState] = useState(1)

    const fn = () => {
        setState((prev) => prev + 1) // что получилось не 2, а 4 нужно использовать предыдущее состояние стейта
        setState((prev) => prev + 1)
        setState((prev) => prev + 1)
        setState((prev) => prev + 1)
    }
// ======= +4 end ==============

// =======  ==============
    useEffect(() => {
        // document.addEventListener("scroll", scroll)

        return function () {  // отмена слушателя события только через возврат функции
            // document.removeEventListener("scroll", scroll)
        }
    }, [])
// =======  ==============

    const [value, setValue] = useState('')
    const input2 = useRef()

    const click = () => {
        console.log(value);
        console.log(input2.current.value)
    }

    return (
        <div style={{height: '10vh'}}>
            <div>{state}</div>
            <button onClick={fn}>Click me</button>

            {/*===== Управляемый и не управляемый =====*/}
            <input onChange={(e) => setValue(e.target.value)} placeholder={'Управляемый'}/>
            <input ref={input2} placeholder={'НЕ управляемый'}/>
            <button onClick={click}>Get value</button>
            <hr/>
        </div>
    );
};

export default HooksQuestions;