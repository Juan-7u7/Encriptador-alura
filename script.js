document.addEventListener('DOMContentLoaded', function () {
  const encryptButton = document.getElementById('encryptButton');
  const decryptButton = document.getElementById('decryptButton');
  const inputText = document.getElementById('inputText');
  const outputText = document.getElementById('outputText');
  const copyButton = document.getElementById('copyButton');
  encryptButton.addEventListener('click', function () {
    const plaintext = inputText.value;
    const ciphertext = CryptoJS.AES.encrypt(plaintext, 'clave_secreta').toString();
    outputText.value = ciphertext;
  });
  decryptButton.addEventListener('click', function () {
    const ciphertext = inputText.value;
    if (!ciphertext.startsWith("U2FsdGVkX1")) {
      outputText.value = "Tu texto aún no ha sido encriptado ;-;";
    } else {
      const bytes = CryptoJS.AES.decrypt(ciphertext, 'clave_secreta');
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      outputText.value = decrypted;
    }
  });
  copyButton.addEventListener('click', function () {
    outputText.select();
    outputText.setSelectionRange(0, 99999); 
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
  });
});