const Counter = () => {
    const handleIncrement=()=>{
        
    }
    const handleDecrement=()=>{

    }
    return (
        <div>
            <h2>Counter App</h2>
            <h3>Count: 0</h3>
            <div style={{display: "flex", gap: "10px", justifyContent: "center"}}>
            <button onClick={handleIncrement}>Increment</button>
            <button disabled onClick={handleDecrement}>Decrement</button>
            </div>
        </div>
    );
};

export default Counter;