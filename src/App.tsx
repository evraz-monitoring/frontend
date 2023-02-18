import "./App.css";
import { FrameList } from "./pages/FrameList";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import { ROUTER } from "./router";
import { Page2 } from "./pages/page2";
import { Config } from "./config";
import { createFakeWs } from "./mirage/ws";
import { createFakeApi } from "./mirage";

Config.isFakeWs && createFakeWs();
Config.isFakeApi && createFakeApi();

function App() {
    return (
        <Routes>
            <Route path={ROUTER.index} element={<Layout />}>
                <Route index element={<FrameList />} />
                <Route path={ROUTER.trends} element={<Page2 />} />
            </Route>
        </Routes>
    );
}

export default App;
