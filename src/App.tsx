// import { BrowserRouter } from "react-router-dom";
// import { AppRoutes } from "./Navigation/Navigation";
// import Header from "./components/Header/Header";
// import Sidebar from "./components/Sidebar/Sidebar";
// import Footer from "./components/Footer/Footer";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="app-container">
//         <Header />

//         <div style={{ display: "flex" }}>
//           <Sidebar />
//           <main style={{ flex: 1, padding: "20px" }}>
//             <AppRoutes />
//           </main>
//         </div>

//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, useLocation } from "react-router-dom";
import { AppRoutes } from "./Navigation/Navigation";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";

function Layout() {
  const location = useLocation();

  // Check if the current path is exactly "/"
  const isHomePage = location.pathname === "/";

  return (
    <div className="app-container">
      <Header />

      <div style={{ display: "flex" }}>
        {!isHomePage && <Sidebar />}

        <main style={{ flex: 1, padding: "20px", maxWidth: "1520px" }}>
          <AppRoutes />
        </main>
      </div>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
