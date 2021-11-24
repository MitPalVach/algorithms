import React, {useEffect, useState} from 'react';


const HookUseEffect = () => {
    const [visible, setVisible] = useState(true)
    const [numbers, setNumbers] = useState([1, 222, 3])
    const [count, setCount] = useState(0)

    const addNumber = () => {
        const randNumber = Math.round(Math.random() * 10)
        const newArr = [...numbers, randNumber]
        setNumbers(newArr)
    }
    const toggleVisible = () => {
        setVisible((visible) => !visible)
    }

    // componentDidMount если []  ===== componentWillUpdate если [numbers]
    useEffect(() => {
        console.log('компонент был отображен');
        // componentWillUnmount если добавить return
        return () => {
            console.log('компонент будет удален');
        }
    }, [numbers])

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>+</button>
            {visible && <ul>
                {numbers.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>}
            <button onClick={addNumber}>add number</button>
            <button onClick={toggleVisible}>toggle visible</button>
            <hr/>
        </div>
    );
};

export default HookUseEffect;
