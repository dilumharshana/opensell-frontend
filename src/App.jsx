import "./App.css";
import { useFetchStockItemsQuery } from "./Features/Api/apiSlice";
import MainAppLayout from "./layouts/MainAppLayout/MainAppLayout";

function App() {
  useFetchStockItemsQuery();
  return <MainAppLayout />;
}

export default App;
