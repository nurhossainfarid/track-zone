import UserClock from "../components/userClock/UserClock";

const App = () => {
    return <div className="root">
        <h1 style={{
            textAlign: 'center',
            fontSize:  '3rem'
        }}>Track Zone</h1>
        <UserClock />
    </div>
}

export default App;