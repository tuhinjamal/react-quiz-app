import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/authContexts";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Layout>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
          </Layout>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
