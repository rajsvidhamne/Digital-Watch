function updateClock() {
   const clockElement = document.getElementById('clock');
   const now = new Date();

   let hours = now.getHours();
   const minutes = now.getMinutes();
   const seconds = now.getSeconds();
   const amPm = hours >= 12 ? 'PM' : 'AM';

   hours = hours % 12;
   hours = hours ? hours : 12; // the hour '0' should be '12'

   const strHours = hours.toString().padStart(2, '0');
   const strMinutes = minutes.toString().padStart(2, '0');
   const strSeconds = seconds.toString().padStart(2, '0');

   clockElement.textContent = `${strHours}:${strMinutes}:${strSeconds} ${amPm}`;
}

setInterval(updateClock, 1000);
updateClock(); // initial call to display clock immediately
