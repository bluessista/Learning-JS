"use strict";

{
  const NOW = new Date();
  const END = new Date(2019, 0, 1, 0, 0);
  console.log(NOW, END);
  let diff, counterInterval;

  let $ = document.querySelector.bind(document);
  let $$ = document.querySelectorAll.bind(document);

  let getTimeFromNowToEnd = () => {

    diff = END - NOW;

    if (diff > 0) {
      let temp = Math.round(diff / 1000);
      let secondsOutput = temp % 60;
      temp = Math.floor(temp / 60);

      let minutesOutput = temp % 60;
      temp = Math.floor(temp / 60);

      let hoursOutput = temp % 24;
      temp = Math.floor(temp / 24);
      let daysOutput = temp;

      secondsOutput = formatOutputDigits(secondsOutput);
      minutesOutput = formatOutputDigits(minutesOutput);
      hoursOutput = formatOutputDigits(hoursOutput);
      daysOutput = formatOutputDigits(daysOutput);

      updateOutput (daysOutput, hoursOutput, minutesOutput, secondsOutput);
      //console.log(`${daysOutput}:${hoursOutput}:${minutesOutput}:${secondsOutput}`);

      NOW.setTime(NOW.getTime() + 1000); //Zeit wird neu gesetzt
    } else { //Interval braucht eine Zuweisung, damit das richtige Interval beendet wird. setInterval hat Rückgabewert als Index
      clearInterval(counterInterval);
      $('#container').innerHTML = "<h1>Happy New Year 2019!</h1>";
      };
    };

  let formatOutputDigits = (number) => {
    return (number >=10 ? number : "0" + number);
  };

  let updateOutput = (days, hours, minutes, seconds) => {
    $("#days").textContent = days;
    $("#hours").textContent = hours;
    $('#minutes').textContent = minutes;
    $('#seconds').textContent = seconds;
  };

  getTimeFromNowToEnd();
  counterInterval = setInterval(getTimeFromNowToEnd, 1000); //Variable für das Interval, damit diese zum Beenden (clearInterval) als Zuweisung verwendet werden kann
}
