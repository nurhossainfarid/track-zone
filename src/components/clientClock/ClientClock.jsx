import { Link } from "react-router-dom";
import Button from "../ui/buttons/Button";

const ClientClock = (props) => {
    const { clientClock, setClientClock } = props;
    return <div style={{
        margin: '0 100px'
    }}>
        <Link to='/userClock'>
            <Button $primary>
                Back
            </Button>
        </Link>
        <h1>Client Clock</h1>
    </div>
}

export default ClientClock;