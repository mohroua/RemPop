<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <title>نافذة تذكير بالصور</title>
  <style>
    body {
      font-family: sans-serif;
      text-align: center;
      padding: 20px;
      background-color: #f0f0f0;
    }
    #popup {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 200px;
      height: 200px;
      background-color: white;
      border: 2px solid #333;
      box-shadow: 0 0 10px rgba(0,0,0,0.5);
      display: none;
      padding: 5px;
      z-index: 9999;
    }
    #popup img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    input, button {
      margin: 10px;
    }
  </style>
</head>
<body>
  <h2>🔔 أداة تذكير بالصور</h2>
  <p>اختر صورًا وستظهر على شكل نوافذ منبثقة كل فترة زمنية محددة</p>

  <input type="file" id="images" accept="image/*" multiple>
  <br>
  <label>المدة بين كل ظهور (بالثواني):</label>
  <input type="number" id="interval" value="30" min="5">
  <br>
  <label>مدة عرض الصورة (بالثواني):</label>
  <input type="number" id="displayTime" value="5" min="1">
  <br>
  <button onclick="startReminder()">ابدأ التذكير</button>

  <div id="popup">
    <img id="popupImage" src="" alt="تذكير بالصورة">
  </div>

  <script>
    let imageList = [];
    let index = 0;
    let intervalId;

    function startReminder() {
      const files = document.getElementById('images').files;
      const interval = parseInt(document.getElementById('interval').value) * 1000;
      const displayTime = parseInt(document.getElementById('displayTime').value) * 1000;

      if (files.length === 0) {
        alert("يرجى اختيار صور أولا");
        return;
      }

      imageList = Array.from(files).map(file => URL.createObjectURL(file));
      index = 0;

      if (intervalId) clearInterval(intervalId);

      intervalId = setInterval(() => {
        showImage(imageList[index], displayTime);
        index = (index + 1) % imageList.length;
      }, interval);

      // عرض أول صورة فورًا
      showImage(imageList[index], displayTime);
      index = (index + 1) % imageList.length;
    }

    function showImage(src, duration) {
      const popup = document.getElementById('popup');
      const img = document.getElementById('popupImage');
      img.src = src;
      popup.style.display = 'block';

      setTimeout(() => {
        popup.style.display = 'none';
      }, duration);
    }
  </script>
</body>
</html>
