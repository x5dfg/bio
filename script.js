const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let audioContext;
let analyser;
let dataArray;
let bufferLength;
let gainNode;

// Для хранения времени и радиусов волн
let waves = []; // Массив для хранения информации о волнах

document.getElementById('playButton').addEventListener('click', function() {
  const audio = new Audio('Мы_один_смешарик_where_is_my_mind_x_баламут_и_обормот.mp3');
  audio.play();

  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const source = audioContext.createMediaElementSource(audio);

    // Узел регулировки громкости
    gainNode = audioContext.createGain();
    gainNode.gain.value = 10; // Увеличиваем громкость

    analyser = audioContext.createAnalyser();
    source.connect(analyser);
    analyser.connect(gainNode);
    gainNode.connect(audioContext.destination);

    analyser.fftSize = 256;

    bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);

    animate();
  }
});

function animate() {
  requestAnimationFrame(animate);
  analyser.getByteFrequencyData(dataArray);
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Получаем среднее значение частоты для изменения цвета
  let avgFrequency = dataArray.reduce((sum, value) => sum + value, 0) / bufferLength;
  
  // Максимальная амплитуда для изменения размера круга
  let maxAmplitude = Math.max(...dataArray);

  // Интерполяция цвета от светло-желтого к красному
  let red = 255;
  let green = Math.max(0, 255 - avgFrequency * 2);
  let blue = 0;

  // Прозрачность от 0.5 до 1 в зависимости от громкости
  let minAlpha = 0.2;
  let maxAlpha = 0.8;
  let alpha = minAlpha + (maxAmplitude / 255) * (maxAlpha - minAlpha);

  // Создание новой волны
  const waveInterval = 100; // Интервал в миллисекундах для новых волн
  const currentTime = Date.now();
  if (currentTime - (waves[waves.length - 1]?.timestamp || 0) > waveInterval) {
    waves.push({
      radius: Math.min(canvas.width, canvas.height) * 0.05 + maxAmplitude * 1,
      timestamp: currentTime,
    });
  }

  // Рисуем волны
  ctx.strokeStyle = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  ctx.lineWidth = 2;
  
  waves.forEach(wave => {
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, wave.radius, 0, Math.PI * 2);
    ctx.stroke();
  });

  // Убираем старые волны
  const lifespan = 1000; // Продолжительность жизни волны в миллисекундах
  waves = waves.filter(wave => Date.now() - wave.timestamp < lifespan);
}
