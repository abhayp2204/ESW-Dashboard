import "./App.css";
import React, { useState } from "react"
import { Stack, TextField } from "@mui/material";
import { DatePicker, TimePicker, DateTimePicker } from "@mui/x-date-pickers"

function App() {
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedTime, setSelectedTime] = useState(null)
    const [selectedDateTime, setSelectedDateTime] = useState(null)

    function formatTime(date) {
        let str = ""
        str += date.getFullYear() + "-"
        str += (1 + date.getMonth()) + "-"
        str += date.getDate() + "T"
        str += date.getHours() + ":"
        str += date.getMinutes() + ":"
        str += "00Z"
        return str
    }

    return (
        <Stack spacing={2} sx={{width: "250px"}}>
            <DateTimePicker
                label="Date Time Picker"
                renderInput={(params) => <TextField {...params}/>}
                value={selectedDateTime}
                onChange={(t) => setSelectedDateTime(t)}
            />
        </Stack>
    );
}

export default App;
