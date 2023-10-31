import { useState } from "react";
import ClientClock from "../clientClock/ClientClock";
import CreateClock from "../createClock/CreateClock";
import Button from "../ui/buttons/Button";
import { format } from 'date-fns'
import fromUnixTime from 'date-fns/fromUnixTime'


const UserClock = () => {
    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }

    setInterval(updateTime, 1000)

    const userZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return <div style={{
        margin: '0 100px'
    }}>
        <h1>User Clock</h1>
        <h1>{currentTime}</h1>
        <h3>{userZone}</h3>
        <Button $primary size="md" font="md">Set Time</Button>
        <CreateClock />
        <ClientClock />
    </div>
}

export default UserClock;