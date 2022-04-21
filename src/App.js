import { useState } from "react";
import "./App.css";
import Options from "./pages/entry/Options";
import SummaryForm from "./pages/summary/SummaryForm";
import Container from "react-bootstrap/Container";
import OrderEntry from "./pages/entry/OrderEntry";
import { OrderDetailsProvider } from "./contexts/OrderDetails";

function App() {
  const [orderPhase, setOrderPhase] = useState("in progress");

  return (
    <Container className="App">
      <OrderDetailsProvider>
        <OrderEntry />
      </OrderDetailsProvider>
    </Container>
  );
}

export default App;
