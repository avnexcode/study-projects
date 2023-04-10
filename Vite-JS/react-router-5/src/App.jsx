import {
  createBrowserRouter,
  createRoutesFromChildren,
  RouterProvider,
  Route,
} from "react-router-dom";
import React from "react";
import { Navbar } from "./components/Navbar";
import { lazyLoad } from "./module/Module";
// import { Contact } from "./pages/Contact";

const Home = React.lazy(() => {
  return wait(1000).then(() => {
    return import("./pages/Home");
  });
}); // component have to export default

const About = React.lazy(() => {
  return wait(1000).then(() => {
    return import("./pages/About");
  });
});

const Contact = lazyLoad("../pages/Contact", "Contact"); // direct path from file Module not file App or weherever you import this lazyLoad function

// const Contact = React.lazy(() => {
//   return import("./pages/Contact").then((module) => {
//     return { default: module.Contact };
//   });
// });

// const Contact = React.lazy(() => import("./pages/Contact.jsx"));

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

export default App;
