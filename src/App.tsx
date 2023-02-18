import "./App.css";
import { Main } from "./pages/Main";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import { ROUTER } from "./router";
import { NotFound } from "./pages/NotFound";
import { Status } from "./pages/Status";

function App() {
    return (
        <Routes>
            <Route path={ROUTER.index} element={<Layout />}>
                <Route index element={<Main />} />
                <Route path={`${ROUTER.status}/:id`} element={<Status />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
