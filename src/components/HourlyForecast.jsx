import { parseHourData, parseToDay } from '../utils/utilities';
import HourlyForecastBox from './HourlyForecastBox';

const HourlyForecast = ({ hourlyForecast }) => {
  return (
    <div className="hourly-forecast">
      <div className="hourly-forecast-day">
        {parseToDay(hourlyForecast[0].dt_txt)}
      </div>
      <div className="hourly-forecast-container">
        {hourlyForecast &&
          hourlyForecast.map((hourlyInfo, index) => (
            <HourlyForecastBox
              key={index}
              hourInfo={parseHourData(hourlyInfo)}
            />
          ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
