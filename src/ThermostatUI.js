$(document).ready(function(){


  var thermostat = new Thermostat();
  var api_key = "90e9089cddc68f01cf03c6169b4b0ed5";

  getTemperature();

  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + "London" + "&units=metric&APPID=" + api_key,function(result){
    $("#outside_temperature").text(result.main.temp + " ˚C");
  });

  var cityName = $("#citylist").val();
  $("#citylist").change(function(){
    var cityName = $("#citylist").val();
    console.log(cityName);
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&APPID=" + api_key,function(result){
      $("#outside_temperature").text(result.main.temp + " ˚C");
    });
  });
  $("#down").click(function (){
    thermostat.down();
    updateTemperature();
  });

  $("#up").click(function (){
    thermostat.up();
    updateTemperature();
  });
  $("#reset").click(function (){
    thermostat.reset();
    updateTemperature();
  });
  $("#powersaverOn").click(function (){
    thermostat.setPowersaverOn();
    updateTemperature();
    $("#pwsStatus").text("On");
  });
  $("#powersaverOff").click(function (){
    thermostat.setPowersaverOff();
    updateTemperature();
    $("#pwsStatus").text("Off");
  });
  function updateTemperature(){
    $("#temperature").text(thermostat.temperature + " ˚C");
    $("#temperature").attr('class', thermostat.usage());
    sendTemperature();
  }
function sendTemperature(){
  $.ajax({
    type: "POST",
    url: "http://localhost:4567/temperature",
    data: "temperature="+JSON.stringify(thermostat.temperature),
    datatype: "html",
  });
}

function getTemperature(){
  $.ajax({
    type: "GET",
    url: "http://localhost:4567/temperature",
  }).done(function(data){
    console.log('1');
    console.log(data);
    thermostat.temperature = data;
    updateTemperature();
  });
}

});
