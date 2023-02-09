import "./App.css";
import { FrameList } from "./pages/FrameList";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import { ROUTER } from "./router";

function App() {
    return (
        <Routes>
            <Route path={ROUTER.index} element={<Layout />}>
                <Route index element={<FrameList />} />
                <Route
                    path={ROUTER.condition}
                    element={
                        <>
                            <FrameList />
                            <FrameList />
                        </>
                    }
                />
            </Route>
        </Routes>
    );
}

export default App;
