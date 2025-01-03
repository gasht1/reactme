import ListGroup from "./components/ListGroup";
import Message from "./components/message";

function App() {
  let items = [
    { name: "gondar" },
    { name: "Bahirdar" },
    { name: "Adiss Ababa" },
  ];
  return (
    <div>
      <h1>
        <ListGroup items={items} heading={"gashaw me"} />
      </h1>
    </div>
  );
}
export default App;
