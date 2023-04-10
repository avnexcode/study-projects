import { lazy, Suspense } from "react";
const Home = lazy(() => import("./pages/Home"));
const App = () => {
  return (
    <div className="flex flex-col items-center">
      <Suspense>
        <Home />
      </Suspense>
    </div>
  );
};
export default App;
