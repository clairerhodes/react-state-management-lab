import {useState} from "react";

const Money = () => {
    // state variable for current money
    const [money, setMoney] = useState(100);

    return (
        <h2>Money: {money}</h2>
    )

};

export default Money;