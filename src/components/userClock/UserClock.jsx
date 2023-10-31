import ClientClock from "../clientClock/ClientClock";
import CreateClock from "../createClock/CreateClock";
import Button from "../ui/buttons/Button";

const UserClock = () => {
    return <div style={{
        margin: '0 100px'
    }}>
        <h1>User Clock</h1>
        <Button $primary size="md" font="md">Set Time</Button>
        <CreateClock />
        <ClientClock />
    </div>
}

export default UserClock;