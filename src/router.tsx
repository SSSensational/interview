import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  Link,
} from "react-router-dom";
import Question1 from "./Question1";
import Question2 from "./Question2";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouteWrapper />}>
          <Route path="question1" element={<Question1 />} />
          <Route path="question2" element={<Question2 />} />
          <Route path="*" element={<Navigate to="question1" />} />
          <Route path="/" element={<Navigate to="question1" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const RouteWrapper: React.FC = () => {
  return (
    <>
      <div className="flex gap-32px">
        <Link to="question1">Question1</Link>
        <Link to="question2">Question2</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default AppRouter;
