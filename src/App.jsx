import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { NavigationBar } from "./pages/componets/NavigationBar";
import { Services } from "./pages/Services";
import { SelfContact } from "./pages/componets/SelfContact";
import { Content } from "./pages/componets/Content";
import { CarDetail } from "./pages/componets/CarDetail";
import { Books } from "./pages/componets/Books";
import { BooksDetailView } from "./pages/componets/BooksDetailView";
import { ApiCalls } from "./pages/componets/ApiCalls";

function App() {
  return (
    <>
      <div style={{ display: "none" }}>
        <NavigationBar />
        <Routes>
          {/* Regular Routes */}
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />}>
            <Route path="self-contact" element={<SelfContact />}>
              {/* Nested Routes */}
              <Route path="tab1" element={<>tab 1 page</>} />
              <Route path="tab2" element={<>tab 2 page</>} />
            </Route>
            <Route path="company-contact" element={<>company contact page</>} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="service" element={<Services />}>
            {/* Nested Routes */}
            <Route path="car" element={<h1>car service section</h1>} />
            <Route path="bike" element={<h1>bike service section</h1>} />
          </Route>
          <Route path="*" element={<h1>this path does not exist</h1>} />
          <Route path="content" element={<Content />} />
          <Route path="books" element={<Books />} />
          {/* Dynamic Routes */}
          <Route path="car-detail/:index" element={<CarDetail />} />

          <Route path="bookDetail/:ind" element={<BooksDetailView />} />
          {/* 
        <Route path="cam" element={<>camry deatil</>}/>
        <Route path="civic" element={<>civic deatil</>}/>
        <Route path="mus" element={<>Mustang deatil</>}/> */}
        </Routes>
      </div>

      <ApiCalls />
    </>
  );
}

export default App;
