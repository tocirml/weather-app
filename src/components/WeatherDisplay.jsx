import { useEffect, useState } from 'react';
import WeatherDisplayBox from './WeatherDisplayBox';
import { weatherApiUrl, weatherApiKey } from '../constants';
import {
  groupDataPerDay,
  parseDayData,
  parseToTempDate,
} from '../utils/utilities';
import HourlyForecast from './HourlyForecast';
import CitySearch from './CitySearch';
import OutOfRange from './OutOfRange';
import TemperatureGraphic from './TemperatureGraphic';

// const cityId = '5879092';

const WeatherDisplay = props => {
  const { day } = props.match.params;
  const [days, setDays] = useState({});
  const [hourlyDay, setHourlyDay] = useState(day);
  const [cityId, setCityId] = useState('3621717');
  const [currentCity, setCurrentCity] = useState('');

  useEffect(() => {
    fetch(`${weatherApiUrl}?id=${cityId}&appid=${weatherApiKey}`)
      .then(res => res.json())
      .then(data => {
        const chunkList = groupDataPerDay(data.list);
        if (data.city)
          setCurrentCity(`${data.city.name}, ${data.city.country} Weather`);
        setDays(chunkList);
      });

    setHourlyDay(day);
  }, [day, cityId]);

  const onSearchChange = event => {
    console.log(event.target.value);
    setCityId(event.target.value);
  };

  return (
    <div className="weather-display">
      <div className="current-city">{currentCity}</div>
      <CitySearch value={cityId} changeHandler={onSearchChange} />

      {Object.keys(days).length > 0 && ( // basically checks if loading the data
        <>
          <div className="weather-container">
            {Object.keys(days).map((day, index) => (
              <WeatherDisplayBox
                key={index}
                dayData={parseDayData(days[day])}
              />
            ))}
          </div>

          {days[hourlyDay] ? (
            <>
              <HourlyForecast hourlyForecast={days[hourlyDay]} />
              <TemperatureGraphic data={parseToTempDate(days[hourlyDay])} />
            </>
          ) : (
            day && <OutOfRange /> // API cant see more than 5 days ahead, so this will display when checking a day out of range
          )}
        </>
      )}
    </div>
  );
};

export default WeatherDisplay;
