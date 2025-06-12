<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <title>RemPop v1.1</title>
  <style>
    body {
      font-family: sans-serif;
      text-align: center;
      padding-top: 50px;
      background-color: #f0f0f0;
    }
    .popup {
      display: none;
      position: fixed;
      top: 20%;
      left: 50%;
      transform: translateX(-50%);
      background-color: white;
      border: 2px solid #444;
      padding: 20px;
      z-index: 9999;
      box-shadow: 0 0 15px #00000077;
      border-radius: 10px;
    }
    .popup img {
      max-width: 300px;
      max-height: 300px;
      border-radius: 10px;
    }
  </style>
</head>
<body>
  <h1>RemPop v1.1 - مراجعة بالصور</h1>
  <p>سيتم عرض الصور تلقائيًا بشكل منبثق كل 5 ثوانٍ.</p>

  <div id="popup" class="popup">
    <img id="popup-img" src="" alt="صورة التذكير" />
  </div>

  <script>
    const images = [
      "img1.jpg",
      "img2.jpg",
      "img3.jpg"
    ];
    let index = 0;

    function showPopup() {
      const popup = document.getElementById("popup");
      const img = document.getElementById("popup-img");

      img.src = images[index];
      popup.style.display = "block";

      setTimeout(() => {
        popup.style.display = "none";
        index = (index + 1) % images.length;
        setTimeout(showPopup, 5000); // الوقت بين الصور
      }, 4000); // مدة عرض الصورة
    }

    window.onload = () => {
      setTimeout(showPopup, 2000); // أول ظهور بعد ثانيتين
    };
  </script>
</body>
</html>
