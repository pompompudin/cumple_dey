const intro = document.getElementById("intro");
setTimeout(() => { intro.style.display = "none"; }, 3000);

function mostrarMensaje() {
  document.getElementById("mensaje").style.display = "block";
  document.getElementById("musica").play();
  lanzarFuegosArtificiales();
}

function mostrarSorpresa() {
  document.getElementById("sorpresa").style.display = "block";
  document.getElementById("respuesta").style.display = "block";
}

function mostrarVideo() {
  document.getElementById("video").style.display = "block";
}

function mostrarGaleria() {
  document.getElementById("galeria").style.display = "block";
}

function mostrarJuego() {
  document.getElementById("juego").style.display = "block";
}

function toggleModoNocturno() {
  document.body.style.backgroundColor = document.body.style.backgroundColor === 'black' ? '' : 'black';
}

// Fuegos artificiales
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function lanzarFuegosArtificiales() {
  let particles = [];
  for (let i = 0; i < 100; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: Math.random() * 3 + 1,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      dx: (Math.random() - 0.5) * 10,
      dy: (Math.random() - 0.5) * 10
    });
  }
  let interval = setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      p.radius *= 0.96;
    });
    if (particles.every(p => p.radius < 0.5)) clearInterval(interval);
  }, 30);
}

// Contador
const fechaCumple = new Date(); // hoy
const countdown = document.getElementById("countdown");

function actualizarContador() {
  const ahora = new Date();
  const diferencia = fechaCumple - ahora;
  if (Math.abs(diferencia) < 86400000) {
    countdown.innerHTML = ". . .";
  } else {
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / 1000 / 60) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);
    countdown.innerHTML = `🎂 Falta ${dias}d ${horas}h ${minutos}m ${segundos}s para tu cumpleaños`;
  }
}
setInterval(actualizarContador, 1000);
