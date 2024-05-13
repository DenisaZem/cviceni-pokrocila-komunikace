import './style.css';

export const FunctionButton = ({ label, handleClearClick }) => {

  const neco =()=>{
    handleClearClick()
  }


  return (
    <button onClick={neco} className="numpad-button">{label}</button>
  );
}; 
