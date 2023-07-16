import { useDispatch } from "react-redux";
import "./App.css";
import { fetchStockItems } from "./Features/stockSlice";
import MainAppLayout from "./layouts/MainAppLayout/MainAppLayout";
import { useEffect } from "react";
import { fetchSales } from "./Features/salesSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStockItems());
    // dispatch(fetchSales())
  }, [dispatch]);

  return <MainAppLayout />;
}

export default App;
