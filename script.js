QRCode.toCanvas(document.getElementById('qrcode'), 'https://www.deine-website.com', function (error) {
    if (error) console.error(error);
    console.log('QR Code wurde erstellt!');
  });
  