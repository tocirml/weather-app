import { NavLink } from 'react-router-dom';
import { parstToDayName } from '../utils/utilities';

const WeatherDisplayBox = ({ dayData }) => {
  return (
    <NavLink
      to={parstToDayName(dayData.day).toLowerCase()}
      className="weather-display-box"
    >
      <div className="day">{dayData.day}</div>
      <div className="icon">
        <img
          src={`/weather-icons/${dayData.weatherIcon}.svg`}
          alt={dayData.weatherIcon}
        />
      </div>
      <div className="temperature">
        <span className="temperature-high">{`${dayData.highTemp}°`} </span>
        {`${dayData.lowTemp}°`}
      </div>
    </NavLink>
  );
};

export default WeatherDisplayBox;
