import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react";
import Header from "./components/Landing/Header";
import Hero from "./components/Landing/Hero";
import AuthContainer from "./components/Auth/Auth";
import Dashboard from "./components/Dashboard/layout";
import Explore from "./components/Dashboard/components/explore";
import CreateCourse from "./components/createCourse/page";
import CourseLayout from "./components/createCourse/DynamicRoute/courseLayout";
import Finish from "./components/createCourse/DynamicRoute/finish/finish";
import CourseId from "./components/course/page";
import CourseStudy from "./components/course/start/start";

function App() {
  const { isSignedIn } = useUser();

  return (
    <Router>
      <Routes>
        {/*Signed Out*/}
        <Route path="/" element={isSignedIn ? <Navigate to="/dashboard" /> : <><Header /><Hero/></>} />
        <Route path="/auth" element={isSignedIn ? <Navigate to="/dashboard" /> : <AuthContainer />} />

        {/*Signed In*/}
        <Route path="/dashboard" element={<SignedIn><Dashboard /></SignedIn>}>
          <Route path="explore" element={<Explore />} />
        </Route>
        <Route path="/create-course" element={<SignedIn><CreateCourse /></SignedIn>} />
        <Route path="/create-course/:id" element={<SignedIn><CourseLayout /></SignedIn>} />
        <Route path="/create-course/:id/finish" element={<SignedIn><Finish /></SignedIn>} />
        <Route path="/course/:courseId" element={<SignedIn><CourseId /></SignedIn>} />
        <Route path="/course/:courseId/start" element={<SignedIn><CourseStudy /></SignedIn>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
