function iniciarExploracao() {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('conteudo').style.display = 'block';

  const solX = window.innerWidth / 2 - 25;
  const solY = window.innerHeight / 2 - 25;
  const sol = document.querySelector('.sol');
  sol.style.left = `${solX}px`;
  sol.style.top = `${solY}px`;

  const mercurio = {
    speed: 0.005,
    theta: 0,
    radius: 90,
    el: document.querySelector('.mercurio')
  };

  const venus = {
    speed: 0.005,
    theta: 0.4,
    radius: 130,
    el: document.querySelector('.venus')
  };

  const terra = {
    speed: 0.0067,
    theta: 1.2,
    radius: 170,
    el: document.querySelector('.terra')
  };

  const marte = {
    speed: 0.006,
    theta: 1.3,
    radius: 210,
    el: document.querySelector('.marte')
  };

  const jupiter = {
    speed: 0.004,
    theta: 2.3,
    radius: 280,
    el: document.querySelector('.jupiter')
  };

  const saturno = {
    speed: 0.003,
    theta: 1.9,
    radius: 320,
    el: document.querySelector('.saturno')
  };

  const urano = {
    speed: 0.003,
    theta: 1.3,
    radius: 370,
    el: document.querySelector('.urano')
  };

  const neptuno = {
    speed: 0.003,
    theta: 2.4,
    radius: 430,
    el: document.querySelector('.neptuno')
  };

  function update(planeta) {
    planeta.theta += planeta.speed;
    planeta.el.style.left = `${Math.cos(planeta.theta) * planeta.radius + solX + 25}px`;
    planeta.el.style.top = `${Math.sin(planeta.theta) * planeta.radius + solY + 25}px`;
  }

  setInterval(() => {
    update(mercurio);
    update(venus);
    update(terra);
    update(marte);
    update(jupiter);
    update(saturno);
    update(urano);
    update(neptuno);
  }, 10);
}

function mostrarPagina(pagina) {
  const paginas = ['pagina1', 'pagina2', 'pagina3', 'pagina4', 'pagina5', 'pagina6', 'pagina7', 'pagina8', 'pagina9', 'pagina10' ];
  paginas.forEach((p) => {
    document.getElementById(p).style.display = 'none';
  });
  document.getElementById(pagina).style.display = 'block';
}






