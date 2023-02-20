import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedBackData from "./data/FeedBackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";

function App() {
  const [feedback, setFeedback] = useState(FeedBackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <Router>
      <>
        <Header text="FeedBack App" />
        <div className="container">
          <Routes>
            <Route exact path="/" element={
              <>
               <FeedbackForm handleAdd={addFeedback} />
               <FeedbackStats feedback={feedback} />
               <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
               </>
            }>
             
            </Route>

            <Route path="/about" element={<AboutPage/>} />
          </Routes>
          <AboutIconLink/>
        </div>
      </>
    </Router>
  );
}

export default App;
