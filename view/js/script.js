function Weather() {
}

Weather.prototype.fetchResults = function(val) {
  
}

Weather.prototype.onKeyup = function(e) {
  
}

Weather.prototype.updatecitySelect = function(results) {
  
}

Weather.prototype.updateSuggestions = function() {
  
}

Weather.prototype.reset = function() {
  
}

Weather.prototype.init = function() {
  this.timer = null;
  this.weatherResults = [];
  this.$city = document.getElementById('city');
  this.$suggestions = document.getElementById('suggestions');
  this.$selectedInfo = document.getElementById('selectedCityInfo');
  this.$selectedCity = document.getElementById('selectedCity');
  this.$selctedWeather = document.getElementById('selctedWeather');
  this.$selectedStatus = document.getElementById('selectedStatus');
  this.$resetBtn = document.getElementById('resetBtn');
  this.$city.addEventListener('keyup', this.onKeyup.bind(this));
  this.$resetBtn.addEventListener('click', this.reset.bind(this));
}

var weatherApp = new Weather();
weatherApp.init();

