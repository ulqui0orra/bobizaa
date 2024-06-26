import axios from 'axios';

const handler = async (m, {args}) => {
  if (!args[0]) return;
  try {
    const response = axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`,
    );
    const res = await response;
    const name = res.data.name;
    const Country = res.data.sys.country;
    const Weather = res.data.weather[0].description;
    const Temperature = res.data.main.temp + '°C';
    const Minimum_Temperature = res.data.main.temp_min + '°C';
    const Maximum_Temperature = res.data.main.temp_max + '°C';
    const Humidity = res.data.main.humidity + '%';
    const Wind = res.data.wind.speed + 'km/h';
    const wea = `「 📍 」${name}\n「 🗺️ 」${Country}\n「 🌤️ 」 ${Weather}\n「 🌡️ 」${Temperature}\n「 💠 」 ${Minimum_Temperature}\n「 📛 」${Maximum_Temperature}\n「 💦 」${Humidity}\n「 🌬️ 」${Wind}
  `;

    m.reply(wea);
  } catch (e) {
    return;
  }
};

handler.help = ['clima *<ciudad/país>*'];
handler.tags = ['info'];

handler.command = /^(clima|مناخ|المناخ)$/i;

export default handler;
