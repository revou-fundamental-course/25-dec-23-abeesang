const segitiga = {
  luas: (alas, tinggi) => {
    const luas = (alas * tinggi)/2;
    return luas;
  },
  luas_ABC: (alas, b, c) => {
    const keliling = alas + b + c;
    const halfper = keliling/2;
    const luas = Math.sqrt(halfper*(halfper-alas)*(halfper-b)*(halfper-c))
    return luas;
  },
  keliling: (alas, tinggi) => {
    const miring = Math.sqrt(Math.pow(alas, 2) + Math.pow(tinggi, 2));
    const keliling = alas + tinggi + miring;
    return keliling;
  },
  keliling_ABC: (alas, B, C) => {
    const keliling = alas + B + C;
    return keliling;
  },
};

const nilaiAlas = document.getElementById('alas');
const nilaiTinggi = document.getElementById('tinggi');
const nilaiB = document.getElementById('B');
const nilaiC = document.getElementById('C');
const buttonLuasSegitiga = document.getElementById('luas-segitiga');
const buttonKelilingSegitiga = document.getElementById('keliling-segitiga');
const buttonLuasSegitigaABC = document.getElementById('luas-segitiga-ABC');
const buttonKelilingSegitigaABC = document.getElementById('keliling-segitiga-ABC');
const outputLuas = document.getElementById('hasil-luas-segitiga');
const outputKeliling = document.getElementById('hasil-keliling-segitiga');

buttonLuasSegitiga.addEventListener('click', () => {
  const alas = Number(nilaiAlas.value);
  const tinggi = Number(nilaiTinggi.value);
  if (alas && tinggi) {
    const hasil = segitiga.luas(alas, tinggi);
    outputLuas.textContent = 'Luas: ' + hasil;
  } 
  else {
    alert('Input variabel perhitungan belum lengkap! Periksa kembali kotak input!');
  }
});
buttonLuasSegitigaABC.addEventListener('click', () => {
  const alas = Number(nilaiAlas.value);
  const B = Number(nilaiB.value);
  const C = Number(nilaiC.value);
  if (alas && B && C) {
    const hasil = segitiga.luas_ABC(alas, B, C);
    outputLuas.textContent = 'Luas: ' + hasil;
  } 
  else {
    alert('Input variabel perhitungan belum lengkap! Periksa kembali kotak input!');
  }
});
buttonKelilingSegitiga.addEventListener('click', () => {
  const alas = Number(nilaiAlas.value);
  const tinggi = Number(inputTinggi.value);
  if (alas && tinggi) {
    const hasil = segitiga.keliling(alas, tinggi);
    outputKeliling.textContent = 'Keliling: ' + hasil;
  } else {
    alert('Input variabel perhitungan belum lengkap! Periksa kembali kotak input!');
  }
});
buttonKelilingSegitigaABC.addEventListener('click', () => {
  const alas = Number(nilaiAlas.value);
  const B = Number(nilaiB.value);
  const C = Number(nilaiC.value);
  if (alas && B && C) {
    const hasil = segitiga.keliling_ABC(alas, B, C);
    outputKeliling.textContent = 'Keliling: ' + hasil;
  } else {
    alert('Input variabel perhitungan belum lengkap! Periksa kembali kotak input!');
  }
});
