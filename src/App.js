import "./App.css";
import { Card } from "./components/Card";
import { data } from "./util";

function App() {
  return (
    <div className="App">
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
          width: "max-content",
          color: "white",
          gap: "8px",
        }}
      >
        <span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.99998 14.6666H9.99998C13.3333 14.6666 14.6666 13.3333 14.6666 9.99998V5.99998C14.6666 2.66665 13.3333 1.33331 9.99998 1.33331H5.99998C2.66665 1.33331 1.33331 2.66665 1.33331 5.99998V9.99998C1.33331 13.3333 2.66665 14.6666 5.99998 14.6666Z"
              stroke="#DC1FFF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.88666 9.66003L6.47332 7.60003C6.69999 7.30669 7.11999 7.25336 7.41332 7.48003L8.63332 8.44003C8.92666 8.66669 9.34666 8.61336 9.57332 8.32669L11.1133 6.34003"
              stroke="#DC1FFF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        Trending Assets
      </h1>
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
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
