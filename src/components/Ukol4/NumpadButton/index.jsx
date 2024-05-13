import './style.css';

export const NumpadButton = ({ digit, onDigitClick }) => {

const funkce =()=>{
  onDigitClick(digit)
}

  return (
    <button onClick={funkce} className="numpad-button">{digit}</button>
  );
};
