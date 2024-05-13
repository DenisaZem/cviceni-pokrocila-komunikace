import './style.css';
 
export const CoinButton = ({ value, onCoinClick }) => {

  const handleCoinClick =()=>{
    onCoinClick(value)
  }

  return (
    <button onClick={handleCoinClick} className="icon-button">
      <i className="plus-icon" />
      <div className="button-label">{value}</div>
    </button>
  );
};
