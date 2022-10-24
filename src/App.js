import logo from "./logo.svg";
import "./App.css";

import Footer from "./components/Footer";
// import ExpenseTracker from "./components/ExpenseTracker";
// import Greetings from "./components/Greetings";
import BulletinBoard from "./components/BulletinBoard";
import BoardData from "./components/BoardData";
// import PersonnelTable from "./components/PersonnelTable";
import Index from "./pages/index";

function App() {
  let currentTime = new Date().toTimeString();
  // let fName = "John";
  // let lName = "Dela cruz";
  let boardComponents = BoardData.map((board) => {
    return (
      <BulletinBoard
        id={board.id}
        category={board.category}
        post={board.post}
      />
    );
  });
  return (
    <div className="App">
      <Index />
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}

      {/* <Greetings firstName={fName} lastName={lName} /> */}

      {/* <div>{boardComponents}</div> */}
      {/* <BulletinBoard
          category="Current events"
          post="Our current event post"
        />
        <BulletinBoard category="Announcement" post="Announcement" />
        <BulletinBoard
          category="Quotes of the day"
          post="I'm not a great programmer; I'm just a good programmer with great habits. -kent beck

"
        />
        <BulletinBoard post="We will keep you posted" />
        <BulletinBoard category="We will keep you posted" /> */}

      {/* <p className="aqua">The current time is {currentTime}</p> */}
      {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* <ExpenseTracker /> */}
      {/* </header> */}

      {/* <PersonnelTable /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
