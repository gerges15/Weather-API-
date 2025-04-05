const apiKey = '2ccff718d9aeef30cc70f97551426d73';
const city = 'Washington';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

const dayStatus = function (url) {
  try {
    return getStatus(url);
  } catch (e) {
    console.log(`${e}`);
  }
};

const getStatus = async url => {
  const response = await fetch(url);
  const data = await response.json();
  const result = data.weather[0].main;
  return result;
};

const dayS = await dayStatus(url);
console.log(dayS);
