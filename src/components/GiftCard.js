import { useState } from "react";

const GiftCard = () => {
  const [giftcard, setGiftcard] = useState({
    firstName: "Jennifer",
    lastName: "Smith",
    text: "Free dinner for 4 guests.",
    valid: true,
    instructions: "To use your coupon, click the button below.",
  });

  const spenGiftcardHandler = () => {
    setGiftcard((prevState) => ({
      ...prevState,
      text: "Your coupon has been used.",
      valid: false,
      instructions: "Please visit our restaurant to renew your gift card.",
    }));
  };

  return (
    <div>
      <h2>Giftcard Page</h2>
      <h3>
        Customer: {giftcard.firstName} {giftcard.lastName}
      </h3>
      <h4>{giftcard.text} </h4>
      <p>{giftcard.instructions} </p>
      {giftcard.valid && (
        <button onClick={spenGiftcardHandler}>Spend Giftcard</button>
      )}
    </div>
  );
};

export default GiftCard;
