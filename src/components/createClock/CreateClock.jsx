import InputGroup from "../shared/form/InputGroup";

const CreateClock = () => {
    return <div>
        <h1>Create New Clock</h1>
        <form>
            <InputGroup
                label={'Zone'}
            />
        </form>
    </div>
}

export default CreateClock;