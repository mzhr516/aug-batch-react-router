import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { NavigationBar } from "./pages/componets/NavigationBar";
import { Services } from "./pages/Services";

function App() {
  // /service/bike
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />}>
          <Route path="self-contact" element={<>self contact page</>} />
          <Route path="company-contact" element={<>company contact page</>} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="service" element={<Services />}>
          <Route path="car" element={<h1>car service section</h1>} />
          <Route path="bike" element={<h1>bike service section</h1>} />
        </Route>
        <Route path="*" element={<h1>this path does not exist</h1>} />
      </Routes>
    </>
  );
}

export default App;
