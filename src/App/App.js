import classes from "./App.module.scss";
import CardList from "../components/CardList/CardList";
import Header from "../components/Header/Header";

function App() {
  return (
    <div className={classes["wrapper"]}>
      <Header/>
    <CardList/>
    </div>
  );
}

export default App;
