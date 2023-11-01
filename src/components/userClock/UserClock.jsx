import { useEffect, useState } from "react";
import Button from "../ui/buttons/Button";
import { zonedTimeToUtc, utcToZonedTime, format } from "date-fns-tz";
import InputGroup from "../shared/form/InputGroup";
import {Link} from 'react-router-dom';

const initUser = {
    zone: 'Asia/Dhaka',
    time: '',
}

const clientsClockInit = [
    {
        name: '',
        zone: '',
        time: '',
        difference: ''
    }
]


const UserClock = () => {
    const [userClock, setUserClock] = useState({ ...initUser })
    const [clientClock, setClientClock] = useState({ ...clientsClockInit})

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userClock);
    }

    const handleChange = (e) => {
        setUserClock((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    // create User Clock
    const zoneDate = utcToZonedTime(new Date(), userClock.zone)
    const output = format(zoneDate, 'HH:mm:ss a', userClock.zone);
    userClock.time = output;

    const updateTime = () => {
        const zoneDate = utcToZonedTime(new Date(), userClock.zone)
        const output = format(zoneDate, 'HH:mm:ss a', userClock.zone);
        setUserClock((prev) => ({
            ...prev,
            time: output
        }))
    }
    setInterval(updateTime, 1000)

    return <div style={{
        margin: '0 100px'
    }}>
        <h1 style={{
            textAlign: 'center'
        }} >User Clock</h1>
        <form onSubmit={handleSubmit}>
            <h1>{userClock.time}</h1>
            <InputGroup
                label={'Select Zone'}
                type={'text'}
                name={'zone'} 
                placeholder={'Asia/Dhaka'}
                value={userClock.zone}
                onChange={handleChange}
            />
            {/* <select name="zone" id="zone" value={userClock.zone} onChange={handleChange}>
                <option value="Asia/Dhaka">Asia/Dhaka</option>
                <option value="Asia/Dili">Asia/Dili</option>
                <option value="Asia/Dubai">Asia/Dubai</option>
                <option value="Asia/Gaza">Asia/Gaza</option>
            </select> */}
        </form>
        <Link to="/clientClock">
            <Button $primary>
                All Client Clock  
            </Button>
        </Link>
        <Link to="/createClock">
            <Button $primary>
                Create New Clock  
            </Button>
        </Link>
    </div>
}

export default UserClock;