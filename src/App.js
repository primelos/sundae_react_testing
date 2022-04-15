import "./App.css";
import Options from "./pages/entry/Options";
import SummaryForm from "./pages/summary/SummaryForm";
import { Container } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [orderPhase, setOrderPhase] = useState("in progress");

  return (
    <Container className="App">
      <SummaryForm />
    </Container>
  );
}

export default App;
