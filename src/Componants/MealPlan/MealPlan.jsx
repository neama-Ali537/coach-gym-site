import React, { useState } from "react";

export default function MealPlan() {
  let [breakfast, setBreakFast] = useState("");
  let [dinner, setDinner] = useState("");
  let [lunch, setLunch] = useState("");
  // تكوين محتوى النظام الغذائي
  const generateContent = (e) => {
    return `
    🥐 فطار:
    ${breakfast}

    🍗 غداء:
    ${lunch}

    🍽️ عشاء:
    ${dinner}
    `;
  };
  const downloadTxtFile = () => {
    const content = generateContent();
    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "Meal_Plan.txt";
    link.click();
  };

  // 🔹 إرسال عبر واتساب
  const sentViaWhatsApp = () => {
    const message = `📋 *نظام غذائي مقترح*\n\n🥐 *فطار:* ${breakfast}\n🍗 *غداء:* ${lunch}\n🍽️ *عشاء:* ${dinner}`;
    const whatsAppURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsAppURL, "_blank");
  };

  return (
    <>
      <div className="container">
        <h2 className="text-center my-3">📋 إنشاء نظام غذائي</h2>
        <div className="row">
          <div className="col-md-4">
            <h4>🥐 فطار</h4>
            <textarea
              className="form-control"
              rows="4"
              placeholder="اكتب وجبه الفطار هنا..."
              value={breakfast}
              onChange={(e) => setBreakFast(e.target.value)}
            ></textarea>
          </div>
          <div className="col-md-4">
            <h4>🍗 غداء</h4>
            <textarea
              className="form-control"
              rows="4"
              placeholder="اكتب وجبه الغدا هنا..."
              value={lunch}
              onChange={(e) => setLunch(e.target.value)}
            ></textarea>
          </div>
          <div className="col-md-4">
            <h4>🍽️ عشاء</h4>
            <textarea
              className="form-control"
              rows="4"
              placeholder="اكتب وجبات العشاء هنا..."
              value={dinner}
              onChange={(e) => setDinner(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="text-center my-4">
          <button className="btn btn-primary mx-2" onClick={downloadTxtFile}>
            {" "}
            📄 تحميل كـ TXT
          </button>

          <button className="btn btn-success mx-2" onClick={sentViaWhatsApp}>
            {" "}
            📩 إرسال عبر واتساب
          </button>
        </div>
      </div>
    </>
  );
}
