//import { useState } from "react";
//import Button from "./components/Button";
//import MyAlert from "./components/MyAlert";

import Form from "./components/Form";

function App() {
  //const [Alertvisible, setAlertvisible] = useState(false);
  return (
    <div>
      <h1>
        <Form />
      </h1>
      {/* {Alertvisible && (
          <MyAlert onclose={() => setAlertvisible(false)}>
            {" "}
            hello gashti
          </MyAlert>
        )}
        <Button onclik={() => setAlertvisible(true)}>my button</Button>
      </h1>*/}
    </div>
  );
}
export default App;
