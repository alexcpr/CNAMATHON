const launchDate = new Date("2023-12-10T00:00:00").getTime();

const updateCountdown = () => {
  const currentDate = new Date().getTime();
  const timeDifference = launchDate - currentDate;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById(
    "timer"
  ).innerHTML = `Lancement : ${days}j ${hours}h ${minutes}m ${seconds}s`;

  if (timeDifference < 0) {
    document.getElementById("timer").innerHTML = `<a href="#" class="cta-button">Acheter maintenant</a>`;
  }
};

setInterval(updateCountdown, 1000);
updateCountdown();
