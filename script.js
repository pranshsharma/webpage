const snowContainer = document.getElementById("snow-container");

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.innerHTML = "❄";

  const size = Math.random() * 10 + 10;
  const startPosition = Math.random() * window.innerWidth;
  const duration = Math.random() * 5 + 5;
  const opacity = Math.random();

  snowflake.style.left = startPosition + "px";
  snowflake.style.fontSize = size + "px";
  snowflake.style.animationDuration = duration + "s";
  snowflake.style.opacity = opacity;

  snowContainer.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, duration * 1000);
}

setInterval(createSnowflake, 100);
