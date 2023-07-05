const inputText = document.querySelector(".main__section-1-text");
console.log(inputText);
const message = document.querySelector(".textarea_2");
const box1 = document.getElementById("main__section2");
const box2 = document.getElementById("div-oculta");

function encryptButton() {
  box1.style.display = "none";
  box2.style.display = "block";
  const encryptedText = encryptMessage(inputText.value);
  message.value = encryptedText;
}

function encryptMessage(sure) {
  let codeMatrix = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  sure = sure.toLowerCase();
  for (let i = 0; i < codeMatrix.length; i++) {
    if (sure.includes(codeMatrix[i][0])) {
      sure = sure.replaceAll(codeMatrix[i][0], codeMatrix[i][1]);
    }
  }
  return sure;
}

function decryptButton() {
  const textoDesencriptado = decrypt(inputText.value);
  message.value = textoDesencriptado;
}

function decrypt(key) {
  let codeMatrix2 = [
    ["enter", "e"],
    ["imes", "i"],
    ["ai", "a"],
    ["ober", "o"],
    ["ufat", "u"],
  ];
  key = key.toLowerCase();
  for (let i = 0; i < codeMatrix2.length; i++) {
    if (key.includes(codeMatrix2[i][0])) {
      key = key.replaceAll(codeMatrix2[i][0], codeMatrix2[i][1]);
    }
  }
  return key;
}

function copyButton() {
  message.select();
  document.execCommand("copy");
  alert("Haz copiado con exito el mensaje");
}