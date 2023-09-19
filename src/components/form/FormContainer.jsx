import { useState } from "react";
import Form from "./Form";
import FormSuccess from "./FormSuccess";

function FormContainer() {
  const [complete, setComplete] = useState(false);
  return <>{complete ? <FormSuccess setComplete={setComplete} /> : <Form setComplete={setComplete} />}</>;
}

export default FormContainer;
