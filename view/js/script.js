function Weather() {}

Weather.prototype.fetchResults = async function (val) {
  const suggestions = document.getElementById("suggestions");
  try {
    const res = await fetch(
        `https://jsonmock.hackerrank.com/api/weather?name=${val}`
      ),
      parsedRes = await res.json(),
      data = parsedRes.data;
    let suggestionItem = document.createElement("div");
    suggestionItem.classList.add("suggestionItem");

    //remove all elements from suggestions
    suggestions.innerHTML = "";
    if (data.length === 0) {
      suggestionItem.classList.add("error");
      suggestionItem.innerText = "No Rsults";
      suggestions.appendChild(suggestionItem);
    } else {
      listItems = data.reduce((result, item) => {
        result += `<div class="suggestionItem">${item.name}</div>`;

        return result;
      }, "");
      suggestions.innerHTML = listItems;
    }
  } catch (err) {
    console.log(err);
  }
};

let timer;
Weather.prototype.onKeyup = function (e) {
  clearTimeout(timer);
  timer = setTimeout(() => {
    this.fetchResults(e.target.value);
  }, 1000);
};

Weather.prototype.updatecitySelect = function (results) {};

Weather.prototype.updateSuggestions = function () {};

Weather.prototype.reset = function () {
  document.getElementById("city").value = "";
  suggestions.innerHTML = "";
};

Weather.prototype.init = function () {
  this.timer = null;
  this.weatherResults = [];
  this.$city = document.getElementById("city");
  this.$suggestions = document.getElementById("suggestions");
  this.$selectedInfo = document.getElementById("selectedCityInfo");
  this.$selectedCity = document.getElementById("selectedCity");
  this.$selctedWeather = document.getElementById("selctedWeather");
  this.$selectedStatus = document.getElementById("selectedStatus");
  this.$resetBtn = document.getElementById("resetBtn");
  this.$city.addEventListener("keyup", this.onKeyup.bind(this));
  this.$resetBtn.addEventListener("click", this.reset.bind(this));
};

var weatherApp = new Weather();
weatherApp.init();
