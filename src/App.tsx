import "./App.css";
import { Main } from "./pages/Main";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import { ROUTER } from "./router";
import { NotFound } from "./pages/NotFound";
import { Status } from "./pages/Status";
import { Config } from "./config";
import { createFakeWs, createFakeWsV2 } from "./mirage/ws";
import { createFakeApi } from "./mirage";
import "rsuite/styles/index.less"; // or 'rsuite/dist/rsuite.min.css'

Config.isFakeWs && createFakeWsV2();
Config.isFakeApi && createFakeApi();

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
