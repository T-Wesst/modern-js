class Weather {
  constructor(city) {
    this.apiKey = "909eac6cb4881e92ed895896fcc78b53";
    this.city = city;
  }
  // fetch weather from api
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${
        this.apiKey
      }&units=metric`
    );
    const responseData = await response.json();
    return responseData.current_observation;
  }
  // change weather location
  changeLocation(city) {
    this.city = city;
  }
}
