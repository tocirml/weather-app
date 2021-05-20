import cantSee from '../assets/cant-see.png';
const OutOfRange = () => {
  return (
    <div className="out-of-range">
      <div className="message">
        Sorry!, can't see weather more than 5 days ahead
      </div>
      <img className="out-of-range-picture" src={cantSee} alt="cant-see" />
    </div>
  );
};

export default OutOfRange;
