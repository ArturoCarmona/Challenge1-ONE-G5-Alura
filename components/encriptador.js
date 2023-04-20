/* ================= ENCRIPTAR ===================== */
function encriptar() {
  let msj = document.getElementById("text-area");
  let msjOutput = document.getElementById("text-output");
  let textOut = encriptMsj(msj.value);
  msjOutput.innerHTML = textOut;
  msj.value = "";
}

function encriptMsj(msj) {
  let encrMsj = "";
  let letter = "";

  for (let i = 0; i < msj.length; i++) {
    letter = msj[i].toLowerCase();

    /* === keys === */
    switch (letter) {
      case "a":
        encrMsj += "ai";
        break;
      case "e":
        encrMsj += "enter";
        break;
      case "i":
        encrMsj += "imes";
        break;
      case "o":
        encrMsj += "ober";
        break;
      case "u":
        encrMsj += "ufat";
        break;
      default:
        encrMsj += letter;
        break;
    }
    letter = "";
  }
  return encrMsj;
}

/* ================= DESENCRIPTAR ===================== */
function desEncriptar() {
  let msj = document.getElementById("text-area");
  let msjOutput = document.getElementById("text-output");
  let textOut = desEncrMsj(msj.value);
  msjOutput.innerHTML = textOut;
  msj.value = "";
}

function desEncrMsj(msj) {
  let newText = msj.replaceAll("ai", "a");
  newText = newText.replaceAll("enter", "e");
  newText = newText.replaceAll("imes", "i");
  newText = newText.replaceAll("ober", "o");
  newText = newText.replaceAll("ufat", "u");
  return newText;
}

/* ================= COPIAR ===================== */
function copiar() {
  let textToCopy = document.getElementById("text-output");
  navigator.clipboard.writeText(textToCopy.value);
}

/* ================= COPIAR ===================== */
function nuevo() {
  let msj = document.getElementById("text-area");
  let msjOutput = document.getElementById("text-output");
  msj.value = "";
  msjOutput.value = "";
}
