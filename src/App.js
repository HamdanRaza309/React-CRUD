import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import Delete from './components/Delete';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Create />}></Route>
        <Route exact path="/read" element={<Read />}></Route>
        <Route exact path="/update" element={<Update />}></Route >
        <Route exact path="/delete" element={<Delete />}></Route >
      </Routes>
    </BrowserRouter>
  );
}

export default App;
