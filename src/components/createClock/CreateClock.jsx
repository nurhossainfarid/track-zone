import { Link } from "react-router-dom";
import InputGroup from "../shared/form/InputGroup";
import Button from "../ui/buttons/Button";

const CreateClock = (props) => {
    const {setClientClock} = props;
    return <div style={{
        margin: '0 100px'
        }}>
        <Link to='/userClock'>
            <Button $primary>
                Back
            </Button>
        </Link>
        <h1>Create New Clock</h1>
        <form>
            <div>
                <InputGroup
                    label={'Name'}
                    name={'name'}
                    placeholder={'John Dev'}
                />
                <InputGroup
                    label={'Zone'}
                    name={'zone'}
                    placeholder={'America/Toronto'}
                />
                <InputGroup
                    label={'Time'}
                    name={'time'}
                    placeholder={'10:41:06 AM'}
                />
                <div>
                    <Button type="reset" $primary>Clear</Button>
                    <Button type='submit' $primary>Submit</Button>
                </div>
            </div>
        </form>
    </div>
}

export default CreateClock;