import { useState } from "react";
import Form from "./Form";
import FormSuccess from "./FormSuccess";

function FormContainer() {
  const [complete, setComplete] = useState(false);

  const de = {
    name: "jajaja",
    surname: "neineineni",
    age: 23,
  };

  return <>{complete ? <FormSuccess setComplete={setComplete} /> : <Form setComplete={setComplete} />}</>;
}

export default FormContainer;
