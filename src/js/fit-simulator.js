export function initFitSimulator() {
  const modeBtns = document.querySelectorAll('.sim-mode-btn');
  const heightSlider = document.getElementById('sim-height');
  const chestSlider = document.getElementById('sim-chest');
  const torsoSlider = document.getElementById('sim-torso');

  const heightVal = document.getElementById('val-height');
  const chestVal = document.getElementById('val-chest');
  const torsoVal = document.getElementById('val-torso');

  const scoreEl = document.getElementById('sim-score');
  const waterRiskEl = document.getElementById('sim-water-risk');
  const flexEl = document.getElementById('sim-flex');

  if (!heightSlider || !chestSlider || !torsoSlider) return;

  let currentMode = 'suuts'; // 'suuts' | 'standard'

  const torsoLabels = {
    1: 'Compact / Short',
    2: 'Athletic / Mid',
    3: 'Tall / Long',
  };

  const torsoLabelsDE = {
    1: 'Kompakt / Kurz',
    2: 'Athletisch / Mittel',
    3: 'Groß / Lang',
  };

  function updateValues() {
    const h = parseInt(heightSlider.value, 10);
    const c = parseInt(chestSlider.value, 10);
    const t = parseInt(torsoSlider.value, 10);

    // Update Slider Value Displays
    if (heightVal) heightVal.textContent = `${h} cm`;
    if (chestVal) chestVal.textContent = `${c} cm`;
    if (torsoVal) {
      const isDE = document.documentElement.lang === 'de';
      torsoVal.textContent = isDE ? torsoLabelsDE[t] : torsoLabels[t];
    }

    if (currentMode === 'suuts') {
      // 3D Custom Fit always delivers precision tailored to individual body
      if (scoreEl) {
        scoreEl.textContent = '99.4%';
        scoreEl.className = 'sim-result-val';
      }
      if (waterRiskEl) {
        waterRiskEl.textContent = '< 0.5%';
        waterRiskEl.className = 'sim-result-val';
      }
      if (flexEl) {
        flexEl.textContent = '98.8%';
        flexEl.className = 'sim-result-val';
      }
    } else {
      // Standard Off-The-Rack M Size calculation deviates from ideal fit
      const deltaH = Math.abs(h - 178);
      const deltaC = Math.abs(c - 98);
      const deltaT = Math.abs(t - 2);

      const penalty = (deltaH * 0.9) + (deltaC * 1.3) + (deltaT * 12);
      const fitScore = Math.max(38, Math.min(84, Math.round(92 - penalty)));
      const waterRisk = Math.max(12, Math.min(68, Math.round(penalty * 0.75 + 12)));
      const flexScore = Math.max(45, Math.min(80, Math.round(86 - penalty * 0.5)));

      if (scoreEl) {
        scoreEl.textContent = `${fitScore}%`;
        scoreEl.className = fitScore < 60 ? 'sim-result-val danger' : 'sim-result-val warning';
      }
      if (waterRiskEl) {
        waterRiskEl.textContent = `${waterRisk}%`;
        waterRiskEl.className = waterRisk > 30 ? 'sim-result-val danger' : 'sim-result-val warning';
      }
      if (flexEl) {
        flexEl.textContent = `${flexScore}%`;
        flexEl.className = flexScore < 65 ? 'sim-result-val warning' : 'sim-result-val';
      }
    }
  }

  modeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      modeBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentMode = btn.dataset.mode;
      updateValues();
    });
  });

  heightSlider.addEventListener('input', updateValues);
  chestSlider.addEventListener('input', updateValues);
  torsoSlider.addEventListener('input', updateValues);

  updateValues();
}
