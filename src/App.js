import "./App.css";
import AxiosDataLoad from "./components/AxiosDataLoad/AxiosDataLoad";
import FetchDataLoad from "./components/FetchDataLoad/FetchDataLoad";
import LoadJSData from "./components/LoadJSData/LoadJSData";
import LoadJsonData from "./components/LoadJsonData/LoadJsonData";

function App() {
  return (
    <div className="app">
      <section>
        {/* <LoadJSData /> */}
      </section>
      <section>
        {/* <LoadJsonData /> */}
      </section>
      <section>
        {/* <FetchDataLoad/> */}
      </section>
      <section>
        <AxiosDataLoad/>
      </section>
    </div>
  );
}

export default App;
