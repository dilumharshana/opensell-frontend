import { useDispatch } from "react-redux";
import "./App.css";
import { fetchStockItems } from "./Features/stockSlice";
import MainAppLayout from "./layouts/MainAppLayout/MainAppLayout";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log();
    dispatch(fetchStockItems());
  }, [dispatch]);

  return <MainAppLayout />;
}

export default App;
