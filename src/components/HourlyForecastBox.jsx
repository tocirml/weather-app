const HourlyForecastBox = ({ hourInfo }) => {
  return (
    <div className="hourly-forecast-box">
      <div className="hour">{`${hourInfo.hour} UTC`}</div>
      <div className="icon">
        <img
          src={`/weather-icons/${hourInfo.icon}.svg`}
          alt={hourInfo.weather}
        />
      </div>
      {`${hourInfo.temperature}°`}
    </div>
  );
};

export default HourlyForecastBox;
