function Weather() {}

let suggestionItem = document.createElement("div");
suggestionItem.classList.add("suggestionItem");
Weather.prototype.fetchResults = async function (val) {
  try {
    const res = await fetch(
        `https://jsonmock.hackerrank.com/api/weather?name=${val}`
      ),
      parsedRes = await res.json(),
      data = parsedRes.data;

    //remove all elements from suggestions
    suggestions.innerHTML = "";
    if (data.length === 0) {
      suggestionItem.classList.add("error");
      suggestionItem.innerText = "No Results";
      suggestions.appendChild(suggestionItem);
    } else {
      data.forEach((item) => {
        suggestionItem.innerHTML += `<div class="suggestionItem">${item.name}</div>`;
        suggestions.appendChild(suggestionItem);
      });

      suggestionItem.addEventListener("click", async (e) => {
        const chosenCity = data.filter(
          (city) => city.name === e.target.innerText
        );
        selectedCity.innerText = chosenCity[0].name;
        selectedWeather.innerText = chosenCity[0].weather;
        selectedStatus.innerText = chosenCity[0].status;
      });

      window.addEventListener("click", () => {
        suggestions.innerHTML = "";
      });
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
  selectedCity.innerHTML = "";
  selectedWeather.innerHTML = "";
  this.$selectedStatus.innerHTML = "";
};

Weather.prototype.init = function () {
  this.timer = null;
  this.weatherResults = [];
  this.$city = document.getElementById("city");
  this.$suggestions = document.getElementById("suggestions");
  this.$selectedInfo = document.getElementById("selectedCityInfo");
  this.$selectedCity = document.getElementById("selectedCity");
  this.$selectedWeather = document.getElementById("selectedWeather");
  this.$selectedStatus = document.getElementById("selectedStatus");
  this.$resetBtn = document.getElementById("resetBtn");
  this.$city.addEventListener("keyup", this.onKeyup.bind(this));
  this.$resetBtn.addEventListener("click", this.reset.bind(this));
};

var weatherApp = new Weather();
weatherApp.init();
