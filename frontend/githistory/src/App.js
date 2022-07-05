import './App.scss';
import MainLayout from "./components/MainLayout";
import CommitsPage from "./pages/CommitsPage";
import HomePage from "./pages/HomePage";
import BranchsPage from "./pages/BranchsPage";
import AuthorsPage from "./pages/AuthorsPage";
import CommitDetailPage from "./pages/CommitDetailPage";
import BranchDetailPage from "./pages/BranchDetailPage";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar></Navbar>
                <MainLayout>
                    <Routes>
                        <Route path="/" exact element={<HomePage/>}/>
                        <Route path="/commits/" element={<CommitsPage/>}/>
                        <Route path="/commits/:hash/" element={<CommitDetailPage/>}/>
                        <Route path="/branchs/" element={<BranchsPage/>}/>
                        <Route path="/branchs/:name/" element={<BranchDetailPage/>}/>
                        <Route path="/authors/" element={<AuthorsPage/>}/>
                    </Routes>
                </MainLayout>
            </BrowserRouter>
        </div>
    );
}

export default App;
