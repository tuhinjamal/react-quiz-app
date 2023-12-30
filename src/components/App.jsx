import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
