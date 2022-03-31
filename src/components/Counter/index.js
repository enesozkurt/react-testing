import { useState } from "react";
import Button from '@mui/material/Button';

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>{count}</h1>
            <Button variant="contained" onClick={() => setCount(count + 1)}>Increase</Button>
            <Button variant="contained" onClick={() => setCount(count - 1)}>Decrease</Button>
        </div>
    )
}

export default Counter;