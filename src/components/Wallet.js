import { useReducer } from "react";

const walletReducer = (state, action) => {
  if (action.type === "buy_ingredients") return { money: state.money - 10 };
  if (action.type === "sell_a_meal") return { money: state.money + 10 };
  if (action.type === "celebrity_visit") return { money: state.money + 500 };
  return state;
};

const Wallet = () => {
  const initialWalletState = { money: 100 };
  const [wallet, dispatch] = useReducer(walletReducer, initialWalletState);

  return (
    <div>
      <h2>Wallet: {wallet.money}</h2>
      <div>
        <button onClick={() => dispatch({ type: "buy_ingredients" })}>
          Buy ingredients
        </button>
        <button onClick={() => dispatch({ type: "sell_a_meal" })}>
          Serve a meal
        </button>
        <button onClick={() => dispatch({ type: "celebrity_visit" })}>
          Celebrity visit
        </button>
      </div>
    </div>
  );
};

export default Wallet;
