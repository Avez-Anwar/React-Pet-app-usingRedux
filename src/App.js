import "./App.css";
import { useSelector } from "react-redux";
import { petIncrement, petDecrement } from "./actions";
import { useDispatch } from "react-redux";

function App() {
  const petCounter = useSelector((state) => state.petCounter);
  const petFavorite = useSelector((state) => state.petFavorite);
  const dispatch = useDispatch();

  const handlePetIncrement = () => {
    dispatch(petIncrement(2));
    console.log("2 sholud be passed as a payload");
  };

  const handlePetDecrement = () => {
    dispatch(petDecrement());
    console.log("The value get increment by actions and reducers");
  };

  return (
    <div className="App">
      <h1>Pet Counter : {petCounter}</h1>
      <h1>Pet Favorite : {petFavorite}</h1>
      <button onClick={handlePetIncrement}>Add Pet</button>
      <button onClick={handlePetDecrement}>Remove Pet</button>
      {/* <button onClick={() => dispatch(petIncrement(2))}>Add Pet</button>
      <button onClick={() => dispatch(petDecrement())}>Remove Pet</button> */}
    </div>
  );
}

export default App;
