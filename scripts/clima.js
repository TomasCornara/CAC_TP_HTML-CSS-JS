const apiKey = '484e5f7c7c6f5fa3cd8f73e310f147b1';

fetch(`http://api.openweathermap.org/data/2.5/weather?q=Cordoba,ar&appid=${apiKey}&units=metric`)
.then(response => response.json())
  .then(data => {
    const temperatura = data['main']['temp'];
    document.getElementById('cordoba').textContent = `${temperatura}°C`;
  })
  .catch(error => {
    console.log('Ha ocurrido un error', error);
  });

fetch(`http://api.openweathermap.org/data/2.5/weather?q=Santa Fe,ar&appid=${apiKey}&units=metric`)
  .then(response => response.json())
  .then(data => {
    const temperatura = data.main.temp;
    document.getElementById('santafe').textContent = `${temperatura}°C`;
  })
  .catch(error => {
    console.log('Ha ocurrido un error', error);
  });

fetch(`http://api.openweathermap.org/data/2.5/weather?q=Mendoza,ar&appid=${apiKey}&units=metric`)
  .then(response => response.json())
  .then(data => {
    const temperatura = data.main.temp;
    document.getElementById('mendoza').textContent = `${temperatura}°C`;
  })
  .catch(error => {
    console.log('Ha ocurrido un error', error);
  });

fetch(`http://api.openweathermap.org/data/2.5/weather?q=Salta,ar&appid=${apiKey}&units=metric`)
  .then(response => response.json())
  .then(data => {
    const temperatura = data.main.temp;
    document.getElementById('salta').textContent = `${temperatura}°C`;
  })
  .catch(error => {
    console.log('Ha ocurrido un error', error);
  });