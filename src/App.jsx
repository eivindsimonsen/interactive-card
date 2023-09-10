import "./scss/style.scss";
import Background from "./components/Background";
import Form from "./components/Form";
import CardContainer from "./components/CardContainer";
import FrontCard from "./components/cards/FrontCard";
import BackCard from "./components/cards/BackCard";

function App() {
  return (
    <>
      <main>
        <Background />
        <CardContainer>
          <FrontCard />
          <BackCard />
        </CardContainer>
        <Form />
      </main>
    </>
  );
}

export default App;
