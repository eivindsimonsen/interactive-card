import "./scss/style.scss";
import Background from "./components/Background";
import FormContainer from "./components/form/FormContainer";
import CardContainer from "./components/cards/CardContainer";
import FrontCard from "./components/cards/FrontCard";
import BackCard from "./components/cards/BackCard";
import { FormProvider } from "./context/FormContext";

function App() {
  return (
    <>
      <main>
        <Background />
        <FormProvider>
          <CardContainer>
            <FrontCard />
            <BackCard />
          </CardContainer>
          <FormContainer />
        </FormProvider>
      </main>
    </>
  );
}

export default App;
