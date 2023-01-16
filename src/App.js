import "./App.css";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { data } from "./util";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="cards-container">
        {data.map((ele) => {
          return (
            <Card
              key={ele.title}
              title={ele.title}
              price={ele.price}
              percent={ele.percent}
              TVL={ele.TVL}
              icon={ele.icon}
              pairs={ele.pairs}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
