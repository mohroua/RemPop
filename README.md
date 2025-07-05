<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>سجل أدوات العمال - نظام تتبع متطور</title>
  
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
  <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap" rel="stylesheet" media="print" onload="this.media='all'">
  <noscript><link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap" rel="stylesheet"></noscript>

  <style>
    /* الخطوط: استخدام خط Tajawal إذا كان متاحًا، وإلا العودة لخطوط النظام */
    body {
      font-family: 'Tajawal', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(to bottom right, #e0f2f7, #c6e0f0); /* تدرج لوني هادئ ومريح */
      margin: 0;
      padding: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
      color: #333;
      overflow-x: hidden; /* منع التمرير الأفقي غير المرغوب فيه */
    }

    h1 {
      text-align: center;
      color: #2c3e50;
      margin-bottom: 35px; /* زيادة الهامش السفلي قليلاً */
      font-size: 2.8em; /* تكبير حجم العنوان */
      font-weight: 700; /* جعل الخط أثقل */
      letter-spacing: 1.2px;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.15); /* ظل نصي أكثر وضوحًا */
    }

    /* بطاقة الحاوية الرئيسية التي تضم النموذج والجدول */
    .container {
      background-color: #ffffff;
      padding: 35px; /* زيادة البادينغ */
      border-radius: 20px; /* حواف مستديرة أكثر */
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15); /* ظل أعمق وأكثر جاذبية */
      width: 100%;
      max-width: 950px; /* زيادة أقصى عرض قليلاً */
      margin-bottom: 30px;
      display: flex;
      flex-direction: column;
      gap: 25px; /* زيادة المسافة بين النموذج والجدول */
      animation: fadeIn 0.8s ease-out; /* تأثير ظهور ناعم */
    }

    /* تأثير الظهور */
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    form {
      background: #fcfcfc; /* لون خلفية أفتح قليلاً */
      padding: 30px; /* زيادة البادينغ */
      border-radius: 15px; /* حواف مستديرة أكثر */
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1); /* ظل خفيف للنموذج */
      border: 1px solid #e5e5e5; /* حدود رفيعة */
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 25px; /* زيادة المسافة بين حقول النموذج */
    }

    form label {
      font-weight: 600;
      margin-top: 5px;
      display: block;
      color: #444; /* لون نص أغمق قليلاً */
      grid-column: span 2;
      font-size: 1.05em; /* تكبير حجم الخط للتسميات */
    }

    form input,
    form select {
      width: calc(100% - 20px); /* ضبط العرض للبادينغ والحدود */
      padding: 12px; /* زيادة البادينغ للحقول */
      margin-top: 8px;
      font-size: 1.05em; /* تكبير حجم الخط للحقول */
      border-radius: 10px; /* حواف مستديرة أكثر */
      border: 1px solid #d0d0d0;
      transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
      box-sizing: border-box;
      background-color: #f9f9f9; /* خلفية خفيفة للحقول */
    }

    form input[list] {
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%23666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>');
        background-repeat: no-repeat;
        background-position: left 12px center; /* ضبط موضع الأيقونة */
        padding-right: 40px; /* مساحة أكبر للأيقونة */
        direction: rtl;
    }

    .quantity-group {
      display: flex;
      gap: 12px; /* زيادة المسافة قليلاً */
      grid-column: span 2;
      margin-top: 8px;
    }

    .quantity-group input {
      flex: 3;
      width: auto;
    }

    .quantity-group select {
      flex: 1;
      width: auto;
      text-align: center;
      background-color: #e9ecef; /* خلفية مميزة للوحدات */
    }

    form input:focus,
    form select:focus {
      border-color: #007bff;
      box-shadow: 0 0 10px rgba(0, 123, 255, 0.3); /* ظل أعمق عند التركيز */
      transform: translateY(-2px); /* تأثير رفع بسيط عند التركيز */
      outline: none;
    }

    form button[type="submit"] {
      grid-column: span 2;
      background: linear-gradient(to right, #007bff, #0056b3);
      color: white;
      padding: 14px 25px; /* زيادة حجم الزر */
      margin-top: 25px; /* زيادة الهامش */
      font-size: 1.2em; /* تكبير حجم الخط للزر */
      border: none;
      border-radius: 10px; /* حواف مستديرة أكثر */
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 5px 15px rgba(0, 123, 255, 0.4); /* ظل أقوى */
      font-weight: 600; /* خط أثقل للزر */
    }

    form button[type="submit"]:hover {
      transform: translateY(-3px); /* تأثير رفع أكثر وضوحًا */
      box-shadow: 0 8px 20px rgba(0, 123, 255, 0.5);
    }

    table {
      width: 100%;
      background: #ffffff;
      border-collapse: separate;
      border-spacing: 0;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1); /* ظل أقوى للجدول */
      border-radius: 18px; /* حواف مستديرة أكثر للجدول */
      overflow: hidden;
    }

    th, td {
      border: 1px solid #e9ecef;
      padding: 14px 18px; /* زيادة البادينغ للخلايا */
      text-align: center;
      font-size: 1em; /* ضبط حجم الخط للخلايا */
    }

    th {
      background: linear-gradient(to right, #34495e, #2c3e50);
      color: white;
      font-weight: 600;
      position: sticky;
      top: 0;
      z-index: 10;
      padding: 15px 18px; /* بادينغ أكبر لرؤوس الجدول */
    }

    tr:nth-child(even) {
      background-color: #f8f9fa;
    }

    tr:hover {
      background-color: #e6f3ff; /* لون أزرق فاتح جميل عند التمرير */
      transition: background-color 0.3s ease;
    }

    .returned {
      background-color: #d4edda !important;
      color: #155724;
      font-weight: 500;
      opacity: 0.9; /* شفافية بسيطة للصفوف المرجعة */
    }

    .btn-return {
      background: #28a745;
      color: white;
      border: none;
      padding: 9px 18px; /* زيادة حجم الزر */
      border-radius: 8px; /* حواف مستديرة أكثر */
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
      font-size: 0.95em;
      box-shadow: 0 3px 8px rgba(40, 167, 69, 0.3); /* ظل أقوى للزر */
    }

    .btn-return:hover:not(:disabled) {
      background: #218838;
      transform: translateY(-2px);
      box-shadow: 0 5px 12px rgba(40, 167, 69, 0.4);
    }

    .btn-return:disabled {
      background: #cccccc;
      cursor: not-allowed;
      box-shadow: none;
      opacity: 0.7; /* شفافية للزر المعطل */
    }

    td:nth-child(6) {
      font-weight: bold;
    }
    td[data-status="returned"] {
      color: #28a745;
    }
    td[data-status="not-returned"] {
      color: #dc3545;
    }

    /* الاستجابة لتناسب الشاشات الصغيرة (Responsive Design) */
    @media (max-width: 768px) {
      body {
        padding: 20px;
      }
      h1 {
        font-size: 2.2em;
        margin-bottom: 25px;
      }
      .container {
        padding: 25px;
        border-radius: 15px;
        gap: 20px;
      }
      form {
        grid-template-columns: 1fr;
        padding: 20px;
        gap: 15px;
      }
      form label, form button[type="submit"] {
        grid-column: span 1;
      }
      .quantity-group {
        flex-direction: column;
        gap: 8px;
      }
      .quantity-group input, .quantity-group select {
        width: 100%;
        margin-top: 0; /* إزالة هامش إضافي غير ضروري */
      }
      table, thead, tbody, th, td, tr {
        display: block;
      }
      thead tr {
        position: absolute;
        top: -9999px;
        left: -9999px;
      }
      tr {
        border: 1px solid #ddd;
        margin-bottom: 12px; /* زيادة الهامش بين البطاقات */
        border-radius: 10px;
      }
      td {
        border: none;
        border-bottom: 1px solid #eee;
        position: relative;
        padding-left: 55%; /* زيادة المساحة لاسم العمود الوهمي */
        text-align: right;
        font-size: 0.9em; /* تصغير حجم الخط في الخلايا */
      }
      td:last-child {
        border-bottom: none;
      }
      td:before {
        position: absolute;
        top: 6px;
        left: 8px; /* ضبط الموضع ليتناسب مع RTL */
        width: 45%;
        padding-right: 10px;
        white-space: nowrap;
        text-align: left;
        font-weight: bold;
        color: #666;
        font-size: 0.95em; /* تصغير حجم خط التسمية */
      }
      td:nth-of-type(1):before { content: "العامل:"; }
      td:nth-of-type(2):before { content: "الأداة:"; }
      td:nth-of-type(3):before { content: "الكمية:"; }
      td:nth-of-type(4):before { content: "وقت الإخراج:"; }
      td:nth-of-type(5):before { content: "وقت الإرجاع:"; }
      td:nth-of-type(6):before { content: "الحالة:"; }
      td:nth-of-type(7):before { content: "إجراء:"; }
    }
  </style>
</head>
<body>

<h1>نظام تتبع أدوات العمال</h1>

<div class="container">
  <form id="toolForm">
    <label for="worker">اسم العامل:</label>
    <input type="text" id="worker" list="worker-suggestions" required placeholder="اكتب أو اختر اسم العامل...">
    <datalist id="worker-suggestions"></datalist>

    <label for="tool">نوع الأداة:</label>
    <input type="text" id="tool" list="tool-suggestions" required placeholder="اكتب أو اختر أداة...">
    <datalist id="tool-suggestions"></datalist>

    <label for="quantity-value">الكمية والوحدة:</label>
    <div class="quantity-group">
      <input type="number" id="quantity-value" min="0.1" step="0.1" required placeholder="الكمية">
      <select id="quantity-unit" required>
        <option value="un">وحدة (un)</option>
        <option value="kg">كيلوغرام (kg)</option>
        <option value="m">متر (m)</option>
        <option value="qtx">كرتون (qtx)</option>
        <option value="L">لتر (L)</option>
      </select>
    </div>

    <button type="submit">تسجيل إخراج</button>
  </form>

  <table id="logTable">
    <thead>
      <tr>
        <th>العامل</th>
        <th>الأداة</th>
        <th>الكمية</th>
        <th>وقت الإخراج</th>
        <th>وقت الإرجاع</th>
        <th>الحالة</th>
        <th>إجراء</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
</div>

<script>
  const form = document.getElementById("toolForm");
  const tableBody = document.querySelector("#logTable tbody");
  const workerInput = document.getElementById("worker");
  const workerSuggestionsDatalist = document.getElementById("worker-suggestions");
  const toolInput = document.getElementById("tool");
  const toolSuggestionsDatalist = document.getElementById("tool-suggestions");
  const quantityValueInput = document.getElementById("quantity-value");
  const quantityUnitSelect = document.getElementById("quantity-unit");

  let logs = JSON.parse(localStorage.getItem("toolLogs")) || [];
  let availableTools = JSON.parse(localStorage.getItem("availableTools")) || [];
  let availableWorkers = JSON.parse(localStorage.getItem("availableWorkers")) || [];

  function saveLogs() {
    localStorage.setItem("toolLogs", JSON.stringify(logs));
  }

  function saveAvailableTools() {
    localStorage.setItem("availableTools", JSON.stringify(availableTools));
  }

  function saveAvailableWorkers() {
    localStorage.setItem("availableWorkers", JSON.stringify(availableWorkers));
  }

  function updateToolSuggestions() {
    toolSuggestionsDatalist.innerHTML = "";
    // استخدام Set لضمان عدم تكرار الأدوات في قائمة الاقتراحات
    const uniqueTools = [...new Set(availableTools)];
    uniqueTools.forEach(tool => {
      const option = document.createElement("option");
      option.value = tool;
      toolSuggestionsDatalist.appendChild(option);
    });
  }

  function updateWorkerSuggestions() {
    workerSuggestionsDatalist.innerHTML = "";
    // استخدام Set لضمان عدم تكرار الأسماء
    const uniqueWorkers = [...new Set(availableWorkers)];
    uniqueWorkers.forEach(worker => {
      const option = document.createElement("option");
      option.value = worker;
      workerSuggestionsDatalist.appendChild(option);
    });
  }

  function renderLogs() {
    tableBody.innerHTML = "";
    logs.forEach((log, index) => {
      const row = document.createElement("tr");
      if (log.returnedAt) row.classList.add("returned");
      const statusText = log.returnedAt ? "✅ تم الإرجاع" : "❌ لم يرجع";
      const statusData = log.returnedAt ? "returned" : "not-returned";
      row.innerHTML = `
        <td>${log.worker}</td>
        <td>${log.tool}</td>
        <td>${log.quantity} ${log.unit}</td>
        <td>${log.takenAt}</td>
        <td>${log.returnedAt || "-"}</td>
        <td data-status="${statusData}">${statusText}</td>
        <td>
          <button class="btn-return" ${log.returnedAt ? "disabled" : ""} onclick="returnTool(${index})">إرجاع</button>
        </td>
      `;
      tableBody.appendChild(row);
    });
  }

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const worker = workerInput.value.trim();
    const tool = toolInput.value.trim();
    const quantity = parseFloat(quantityValueInput.value);
    const unit = quantityUnitSelect.value;
    const now = new Date();
    // استخدام ar-DZ لتنسيق الوقت والتاريخ في الجزائر، بنظام 24 ساعة
    const takenAt = now.toLocaleString("ar-DZ", {
      year: 'numeric', month: 'numeric', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric',
      hour12: false 
    });

    if (!worker || !tool || isNaN(quantity) || quantity <= 0) {
      alert("الرجاء إدخال جميع البيانات المطلوبة وبكمية رقمية صحيحة (يجب أن تكون الكمية أكبر من 0).");
      return;
    }

    // إضافة الأداة الجديدة إلى قائمة الأدوات المتاحة إذا لم تكن موجودة بالفعل
    if (!availableTools.includes(tool)) {
      availableTools.push(tool);
      saveAvailableTools();
      updateToolSuggestions(); // تحديث الاقتراحات بعد إضافة أداة جديدة
    }

    // إضافة اسم العامل الجديد إلى قائمة العمال المتاحة إذا لم يكن موجوداً
    if (!availableWorkers.includes(worker)) {
      availableWorkers.push(worker);
      saveAvailableWorkers();
      updateWorkerSuggestions(); // تحديث اقتراحات العمال بعد إضافة عامل جديد
    }

    const newLog = { worker, tool, quantity, unit, takenAt, returnedAt: null };
    logs.push(newLog);
    saveLogs();
    renderLogs();
    form.reset();
    quantityUnitSelect.value = "un"; // إعادة تعيين الوحدة الافتراضية
  });

  function returnTool(index) {
    const now = new Date();
    // استخدام ar-DZ لتنسيق وقت الإرجاع في الجزائر، بنظام 24 ساعة
    logs[index].returnedAt = now.toLocaleString("ar-DZ", {
      year: 'numeric', month: 'numeric', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric',
      hour12: false 
    });
    saveLogs();
    renderLogs();
  }

  // تهيئة الأدوات الأولية. ستعمل هذه الكتلة فقط إذا كان localStorage فارغًا.
  if (availableTools.length === 0) {
    availableTools = [
      // كهرباء
      "Tournevis isolé (مفك عازل)", "Pinces coupantes (كماشات قطع)", "Gaine ICTA 20mm (أنبوب كهربائي 20مم)",
      "Boîte de dérivation (علبة توصيل)", "Disjoncteur 16A (قاطع كهربائي 16 أمبير)", "Lampe LED 18W (مصباح LED 18 واط)",
      "Interrupteur double (مفتاح مزدوج)", "Fusible 10A (فيوز 10A)", "Testeur de tension (جهاز فحص الجهد)",
      "Multimètre numérique (متعدد القياسات الرقمي)", "Pince ampèremétrique (كماشة قياس التيار)",
      "Enrouleur électrique 50m (بكرة كابل 50م)", "Transformateur 220V/12V (محول 220V/12V)",
      "Projecteur LED 100W (كشاف LED 100 واط)", "Prise de courant étanche (مقبس كهربائي مقاوم للماء)",
      "Chemin de câble perforé (مسار كابل مثقب)", "Connecteur de câble étanche (موصل كابل مقاوم للماء)",
      "Attache-câbles (رباط كابلات)", "Domino électrique (وصلة كهربائية)", "Disjoncteur différentiel (قاطع تفاضلي)",
      "Générateur électrique 3kW (مولد كهربائي 3 كيلو واط)", "Batterie 12V (بطارية 12 فولت)",
      "Chargeur de batterie (شاحن بطارية)", "Onduleur 1000W (محول طاقة 1000 واط)",

      // الترصيص
      "Clé à molette (مفتاح فرنسي)", "Filasse (ليف السد)", "Pâte à joint (عجينة وصل)",
      "Tube multicouche 20mm (أنبوب متعدد الطبقات 20مم)", "Raccord laiton 1/2 (وصلة نحاس 1/2)",
      "Manchon PVC 40mm (مفصل بلاستيك 40مم)", "Embout fileté 1/2 (رأس ملولب 1/2)", "Rondelle caoutchouc (حلقة مطاطية)",
      "Coude PVC 90° (كوع PVC 90 درجة)", "Té PVC 50mm (وصلة تي PVC 50مم)", "Collier de serrage (رباط تثبيت)",
      "Robinet d'arrêt (صمام إغلاق)", "Vanne à boisseau (صمام كرة)", "Pompe à dessouder (مضخة لحام)",
      "Pince à cintrer (كماشة ثني الأنابيب)", "Détendeur gaz (منظم غاز)", "Joint torique (حلقة دائرية مانعة للتسرب)",
      "Flexible de douche (خرطوم دش)", "Mécanisme de chasse d'eau (آلية تدفق المرحاض)",
      "Siphon de lavabo (مصرف مغسلة)", "Furet déboucheur (سلك تسليك المجاري)", "Chalumeau de plombier (موقد سباكة)",
      "Soudeuse PP-R (آلة لحام PP-R)", "Compteur d'eau (عداد مياه)", "Soupape de sécurité (صمام أمان)",

      // البناء
      "Truelle (مسطرين)", "Niveau à bulle 60cm (ميزان ماء 60سم)", "Seau de maçon (سطل بناء)",
      "Marteau de maçon (مطرقة بناء)", "Brique creuse 8 trous (طوب مثقوب 8 ثقوب)", "Ciment blanc 25kg (إسمنت أبيض 25كغ)",
      "Plâtre fin (جبس ناعم)", "Fer à béton Ø12mm (حديد بناء قطر 12مم)", "Pelle carrée (مجرفة مربعة)",
      "Pelle ronde (مجرفة دائرية)", "Pioche (فأس)", "Mètre ruban 5m (شريط قياس 5م)",
      "Brouette (عربة يدوية)", "Bétonnière 350L (خلاطة إسمنت 350 لتر)", "Marteau-piqueur 20kg (شاكوش تكسير 20كغ)",
      "Compacteur de sol (ضاغط تربة)", "Niveau laser rotatif (ميزان ليزري دوار)",
      "Disqueuse 230mm (صاروخ 230مم)", "Carrelette (قاطعة بلاط)", "Taloche à lisser (مالج التنعيم)",
      "Scie à béton (منشار خرسانة)", "Mèche à béton (ريشة مثقاب خرسانة)", "Pistolet à silicone (مسدس سيليكون)",
      "Sable de rivière (رمل نهري)", "Gravier concassé (حصى مكسرة)", "Barre à mine (عتلة حديدية)",
      "Treillis soudé (شبك ملحوم)", "Panneau de coffrage (لوح قوالب)", "Fil de fer recuit (سلك حديد مجدول)",
      "Cutter professionnel (قاطع محترف)", "Corde 20m (حبل 20م)", "Bâche de protection (غطاء حماية)",
      "Seau doseur (دلو قياس)", "Brosse métallique (فرشاة معدنية)", "Disque diamant (قرص ماسي)"
    ];
    saveAvailableTools();
  }

  // تهيئة أسماء العمال الأولية. ستعمل هذه الكتلة فقط إذا كان localStorage فارغًا.
  if (availableWorkers.length === 0) {
    availableWorkers = [
      "أحمد محمد",
      "فاطمة علي",
      "خالد حسن",
      "مريم سعيد",
      "يوسف منصور",
      "ليلى كريم",
      "جمال بوعلام",
      "زينب فريد",
      "عمر بن علي",
      "هند رشيد"
    ];
    saveAvailableWorkers();
  }

  // تهيئة الاقتراحات وعرض السجلات عند تحميل الصفحة لأول مرة
  updateToolSuggestions();
  updateWorkerSuggestions();
  renderLogs();
</script>

</body>
</html>
