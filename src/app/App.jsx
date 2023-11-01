import { Route, Routes } from "react-router-dom";
import UserClock from "../components/userClock/UserClock";
import CreateClock from "../components/createClock/CreateClock";
import ClientClock from "../components/clientClock/ClientClock";

const App = () => {
    return <div className="root">
        <h1 style={{
            textAlign: 'center',
            fontSize:  '3rem'
        }}>Track Zone</h1>
        <Routes>
            <Route index element={<UserClock></UserClock>} />
            <Route path="/userClock" element={<UserClock></UserClock>} />
            <Route path="/createClock" element={<CreateClock></CreateClock>} />
            <Route path="/clientClock" element={<ClientClock></ClientClock>} />
        </Routes>
    </div>
}

export default App;