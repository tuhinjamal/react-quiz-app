import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuhtContexts";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import PrivateOutlet from "./router/PrivateOutlet";
import PublicOutlet from "./router/PublicOutlet";

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/*" element={<PrivateOutlet />}>
            <Route path="home" element={<Home />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="result" element={<Result />} />
          </Route>
          <Route path="/" element={<PublicOutlet />}>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Routes>
      </Layout>
    </AuthProvider>
  );
}

export default App;
