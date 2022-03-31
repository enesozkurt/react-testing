import { useState } from "react";
import { Button, Box, Typography } from '@mui/material';

const defaultItems = [
    {
        name: 'Item A'
    },
    {
        name: 'Item B'
    },
    {
        name: 'Item C'
    }
]

function Todo() {
    const [text, setText] = useState("")
    const [items, setItems] = useState(defaultItems);

    const addItem = () => {
        setItems((prev) => [...prev, { name: text }])
        setText("")
    }

    return (
        <Box m={2}>
            <label>
                Text:
                <input value={text} onChange={(e) => setText(e.target.value)} id="outlined-basic" />
            </label>
            <Button sx={{ margin: "16px" }} onClick={addItem} variant="contained">Add</Button>
            {
                items.map((item, key) => (
                    <Box key={key}>
                        <Typography variant="body1" component="span">
                            {item.name}
                        </Typography>
                    </Box>
                ))
            }
        </Box>
    )
}

export default Todo;