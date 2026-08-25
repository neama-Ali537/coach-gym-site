// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function ClientPage() {
//   const [name, setName] = useState("");
//   const [password, setPasswaord] = useState("");
   
  
//   const navigate = useNavigate();


//   return <div className='row'>
//   <div className="col-md-9 ">
//             <label htmlFor="name">Name</label>
//             <input
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               type="text"
//               name=""
//               id=""
//             />
//             <label htmlFor="number">Password</label>
//             <input
//               value={password}
//               onChange={(e) => setPasswaord(e.target.value)}
//               type="text"
//               name=""
//               id=""
//             />
            
//   <button className="btn btn-dark">

//              تسجيل
//             </button>
           
//           </div>
//   </div>;
// }
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ClientPage() {
  const navigate = useNavigate();

  // بيانات العميل
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [goal, setGoal] = useState("");
  const [injury, setInjury] = useState("");
  const [subscriptionDate, setSubscriptionDate] = useState("");
  const [subscriptionDuration, setSubscriptionDuration] =
    useState("شهر");
  const [notes, setNotes] = useState("");

  // ==========================================
  // إرسال بيانات العميل إلى WhatsApp
  // ==========================================

  const handleSubmit = (e) => {
    e.preventDefault();

    // التحقق من البيانات الأساسية
    if (
      !name.trim() ||
      !age ||
      !phone.trim() ||
      !height ||
      !weight ||
      !goal.trim() ||
      !subscriptionDate
    ) {
      alert("من فضلك املأ جميع البيانات المطلوبة");
      return;
    }

    // رقم WhatsApp الخاص بالأدمن
    // اكتبي رقم الأدمن هنا بدون +
    // مثال مصر: 201xxxxxxxxx
    const adminWhatsApp = "201227312528";

    // ==========================================
    // تجهيز رسالة WhatsApp
    // ==========================================

    const message = `
🏋️ طلب اشتراك جديد

━━━━━━━━━━━━━━

👤 بيانات العميل

الاسم:
${name}

العمر:
${age} سنة

رقم الهاتف:
${phone}

━━━━━━━━━━━━━━

📏 القياسات

الطول:
${height} سم

الوزن:
${weight} كجم

━━━━━━━━━━━━━━

🎯 الهدف من الاشتراك

${goal}

━━━━━━━━━━━━━━

🩹 الإصابات

${injury.trim() || "لا يوجد"}

━━━━━━━━━━━━━━

📅 بيانات الاشتراك

تاريخ بداية الاشتراك:
${subscriptionDate}

مدة الاشتراك:
${subscriptionDuration}

━━━━━━━━━━━━━━

📝 ملاحظات إضافية

${notes.trim() || "لا يوجد"}

━━━━━━━━━━━━━━

تم إرسال الطلب من موقع التدريب 🏋️
`;

    // تحويل الرسالة إلى صيغة مناسبة للرابط
    const encodedMessage = encodeURIComponent(message);

    // فتح WhatsApp
    const whatsappUrl = `https://wa.me/${adminWhatsApp}?text=${encodedMessage}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="row">

      <div className="col-md-9">

        <h2>طلب الاشتراك</h2>

        <form onSubmit={handleSubmit}>

          {/* ==============================
              بيانات العميل
          =============================== */}

          <label htmlFor="name">
            الاسم
          </label>

          <input
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            type="text"
            id="name"
            className="form-control"
            placeholder="اكتب اسمك"
          />

          <label htmlFor="age">
            العمر
          </label>

          <input
            value={age}
            onChange={(e) =>
              setAge(e.target.value)
            }
            type="number"
            id="age"
            className="form-control"
            placeholder="العمر"
          />

          <label htmlFor="phone">
            رقم الهاتف
          </label>

          <input
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
            type="tel"
            id="phone"
            className="form-control"
            placeholder="رقم الهاتف"
          />

          {/* ==============================
              القياسات
          =============================== */}

          <label htmlFor="height">
            الطول
          </label>

          <input
            value={height}
            onChange={(e) =>
              setHeight(e.target.value)
            }
            type="number"
            id="height"
            className="form-control"
            placeholder="الطول بالسنتيمتر"
          />

          <label htmlFor="weight">
            الوزن
          </label>

          <input
            value={weight}
            onChange={(e) =>
              setWeight(e.target.value)
            }
            type="number"
            step="0.1"
            id="weight"
            className="form-control"
            placeholder="الوزن بالكيلو"
          />

          {/* ==============================
              الهدف
          =============================== */}

          <label htmlFor="goal">
            الهدف من الاشتراك
          </label>

          <input
            value={goal}
            onChange={(e) =>
              setGoal(e.target.value)
            }
            type="text"
            id="goal"
            className="form-control"
            placeholder="مثال: خسارة وزن / بناء عضلات"
          />

          {/* ==============================
              الإصابة
          =============================== */}

          <label htmlFor="injury">
            الإصابة أو أي مشكلة صحية تؤثر على التمرين
          </label>

          <input
            value={injury}
            onChange={(e) =>
              setInjury(e.target.value)
            }
            type="text"
            id="injury"
            className="form-control"
            placeholder="اكتب الإصابة إن وجدت"
          />

          {/* ==============================
              تاريخ الاشتراك
          =============================== */}

          <label htmlFor="subscriptionDate">
            تاريخ بداية الاشتراك
          </label>

          <input
            value={subscriptionDate}
            onChange={(e) =>
              setSubscriptionDate(e.target.value)
            }
            type="date"
            id="subscriptionDate"
            className="form-control"
          />

          {/* ==============================
              مدة الاشتراك
          =============================== */}

          <label htmlFor="subscriptionDuration">
            مدة الاشتراك
          </label>

          <select
            value={subscriptionDuration}
            onChange={(e) =>
              setSubscriptionDuration(
                e.target.value
              )
            }
            id="subscriptionDuration"
            className="form-control"
          >
            <option value="شهر">
              شهر
            </option>

            <option value="شهرين">
              شهرين
            </option>

            <option value="3 شهور">
              3 شهور
            </option>

            <option value="6 شهور">
              6 شهور
            </option>

            <option value="سنة">
              سنة
            </option>
          </select>

          {/* ==============================
              ملاحظات
          =============================== */}

          <label htmlFor="notes">
            ملاحظات إضافية
          </label>

          <textarea
            value={notes}
            onChange={(e) =>
              setNotes(e.target.value)
            }
            id="notes"
            className="form-control"
            rows="4"
            placeholder="أي معلومات إضافية تحب توضحها للكابتن..."
          />

          {/* ==============================
              زر التسجيل
          =============================== */}

          <button
            type="submit"
            className="btn btn-dark"
          >
            إرسال طلب الاشتراك
          </button>

        </form>

      </div>

    </div>
  );
}
