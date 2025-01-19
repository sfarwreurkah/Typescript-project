import { useState } from "react";

function App() {
    const [drink, setDrink] = useState({
        title : " americano"
        price: 5,
    })
    const handleClick = () => {
        setDrink({ ...drink,price:6}); 
        };
       

    };
    return (
        <div>
        <button onClick={ handleClick} > Click me</button>
        </div>
    );
}

export default App;