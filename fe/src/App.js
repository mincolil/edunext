import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseList from './layout/CourseList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/courses" element={<CourseList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;