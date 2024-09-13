import { useState } from "react";
import Input from "./components/input";

function App() {

  const [count, setCount] = useState("");

  return <Input val={count} onChangeValue={(v) => setCount(v)} />;
    
}

export default App;
