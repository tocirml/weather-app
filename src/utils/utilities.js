import _ from 'underscore';

export const groupDataPerDay = list => {
  return _.groupBy(list, element => parseToDay(element.dt_txt).toLowerCase());
};

export const parseDayData = data => {
  // each day has 8 different hours, so I decided to parse the data to be used by the component box
  // Im obtaining all the info needed for display
  const day = new Date(data[0].dt_txt).toString().split(' ')[0];
  const tempsAndWeather = data.reduce(
    (dayData, day) => {
      if (day.main.temp < dayData.lowTemp) dayData.lowTemp = day.main.temp;
      if (day.main.temp > dayData.highTemp) dayData.highTemp = day.main.temp;
      return {
        ...dayData,
        [day.weather[0].main]: dayData[day.weather[0].main]
          ? dayData[day.weather[0].main] + 1
          : 1,
      };
    },
    {
      lowTemp: 500,
      highTemp: 0,
    }
  );

  const sortByStrongerWeather = Object.entries(tempsAndWeather)
    .slice(2)
    .sort((a, b) => a[1] - b[1]);

  const weatherIcon = mapWeatherIcon(
    sortByStrongerWeather[sortByStrongerWeather.length - 1][0]
  );

  return {
    lowTemp: kevinToFahrenheit(tempsAndWeather.lowTemp),
    highTemp: kevinToFahrenheit(tempsAndWeather.highTemp),
    day,
    weatherIcon,
  };
};

export const kevinToFahrenheit = kevin => {
  return Math.round(((kevin - 273.15) * 9) / 5 + 32);
};

export const mapWeatherIcon = weather => {
  // Im not sure about all the different types of weather that the API can return
  // So Im mapping the ones I know with the corresponding Icon
  const icons = {
    Clouds: 'cloud',
    Rain: 'rain-cloud',
    Clear: 'sun',
    Snowy: 'snow',
  };

  return icons[weather] || 'cloud';
};

export const parseHourData = data => {
  let hour = new Date(data.dt_txt).getHours();
  const ampm = hour >= 12 ? 'pm' : 'am';
  hour = `${hour}:00${ampm}`;
  const icon = mapWeatherIcon(data.weather[0].main);
  const weather = data.weather[0].main;
  const temperature = kevinToFahrenheit(data.main.temp);

  return { hour, icon, weather, temperature };
};

const days = {
  Mon: 'Monday',
  Tue: 'Tuesday',
  Wed: 'Wednesday',
  Thu: 'Thursday',
  Fri: 'Friday',
  Sat: 'Saturday',
  Sun: 'Sunday',
};

export const parseToDay = date => {
  const day = new Date(date).toString().split(' ')[0];
  return days[day];
};

export const parstToDayName = dayAbrv => {
  return days[dayAbrv];
};
