const Counter = () => {
    return (
        <div>
            <h2>Counter App</h2>
            <h3>Count: 0</h3>
            <div style={{display: "flex", gap: "10px", justifyContent: "center"}}>
            <button>Increment</button>
            <button>Decrement</button>
            </div>
        </div>
    );
};

export default Counter;