import React, {useEffect, useRef, useState} from 'react';


const HookUseRef = () => {
    const [numbers, setNumbers] = useState([1, 2, 3])
    const ulRef = useRef() // во-первых, для того чтобы хранить ссылку на DOM-элемент после пере-рендера компонента
    const timerRef = useRef() // во-вторых, для того чтобы хранить актуальные данные (чисел, массивов и тд)

    const addNumber = () => {
        //     1
        // const lastNumber = numbers[numbers.length - 1]
        // setNumbers([...numbers, lastNumber + 1])
        //     2
        setNumbers((prev) => [...prev, prev[prev.length - 1] + 1])
    }

    // ======== 1 ==========
    // const handleScroll = () => {
    //     console.log('Was scroll');
    // }
    // useEffect(() => {
    //     ulRef.current.addEventListener('scroll', handleScroll)
    // }, [])
    //
    // const removeScroll = () => {
    //     ulRef.current.removeEventListener('scroll', handleScroll)
    // }

    // ============ 2 ===========
    const start = () => {
        timerRef.current = setInterval(addNumber, 1000)
    }
    const stop = () => {
        console.log(timerRef.current)
        clearInterval(timerRef.current)
    }

    return (
        <div>
            <div style={{height: '100px', overflowY: 'auto', marginBottom: '20px', background: "#b6d0ff"}}>
                <ul ref={ulRef}>
                    {/*<ul>*/}
                    {numbers.map((n) => (<li key={n}>{n}</li>))}
                </ul>
            </div>
            {/*//   1*/}
            {/*<button onClick={addNumber}>add Number</button>*/}
            {/*<button onClick={removeScroll}>remove Scroll</button>*/}
            {/*//   2*/}
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <hr/>
        </div>
    );
};

export default HookUseRef;