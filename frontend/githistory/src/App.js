import './App.scss';
import MainLayout from "./components/MainLayout";
import CommitsPage from "./pages/CommitsPage";
import HomePage from "./pages/HomePage";
import BranchsPage from "./pages/BranchsPage";
import CommitDetailPage from "./pages/CommitDetailPage";
import BranchDetailPage from "./pages/BranchDetailPage";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <MainLayout>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/commits/" element={<CommitsPage/>}/>
                        <Route path="/commits/:hash/" element={<CommitDetailPage/>}/>
                        <Route path="/branchs/" element={<BranchsPage/>}/>
                        <Route path="/branchs/:name/" element={<BranchDetailPage/>}/>
                    </Routes>
                </BrowserRouter>
            </MainLayout>
        </div>
    );
}

export default App;
