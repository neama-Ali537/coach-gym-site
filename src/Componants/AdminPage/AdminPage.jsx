// import  { useEffect, useState } from "react";
// import {
 
//   collection,
//   addDoc,
//   getDocs,
//   deleteDoc,
//   doc,
// } from "firebase/firestore";
// import { db } from "../firebase/firebase"; // استيراد db من ملف firebase
// import { updateDoc } from "firebase/firestore";

// export default function AdminPage() {
//   const [clients, setClients] = useState([]);
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [phone, setPhone] = useState("");
//   const [weight, setWeight] = useState("");
//   const [injury, setInjury] = useState("");
//   const [goals, setGoals] = useState("");

//   // جلب العملاء من Firestore
//   useEffect(() => {
//     const getClients = async () => {
//       const clientCollection = collection(db, "clients");
//       const clientSnapshot = await getDocs(clientCollection);
//       const clientList = clientSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setClients(clientList);
//     };

//     getClients();
//   }, []);

//   // دالة لإضافة عميل جديد إلى Firestore
//   const addClient = async () => {
//     if (!name || !age || !phone || !weight || !goals) {
//       alert("يرجى ملء جميع البيانات!");
//       return;
//     }

//     try {
//       const newClient = {
//         name,
//         age: parseInt(age),
//         phone,
//         weight,
//         injury,
//         goals,
//         subscriptionDate: new Date().getTime(),
//       };
//       // fire-base
//       const docRef = await addDoc(collection(db, "clients"), newClient);
//       setClients([...clients, { id: docRef.id, ...newClient }]);

//       setName("");
//       setAge("");
//       setPhone("");
//       setGoals("");
//       setInjury("");
//       setWeight("");
//     } catch (error) {
//       console.error("Error adding client: ", error);
//     }
//   };

//   // دالة لحذف عميل من Firestore
//   const deleteClient = async (id) => {
//     try {
//       await deleteDoc(doc(db, "clients", id));
//       setClients(clients.filter((client) => client.id !== id));
//     } catch (error) {
//       console.error("Error deleting client: ", error);
//     }
//   };

//   // دالة لحساب الأيام المتبقية
//   const getRemainingDays = (subscriptionDate) => {
//     const now = new Date().getTime();
//     const oneMonth = 30 * 24 * 60 * 60 * 1000;
//     const remainingTime = subscriptionDate + oneMonth - now;
//     return Math.max(0, Math.ceil(remainingTime / (1000 * 60 * 60 * 24)));
//   };
//   // تجديد الاشتراك
//   const renewClintSubscribtion = async (clientID) => {
//     try {
//       const clientRef = doc(db, "clients", clientID);
//       await updateDoc(clientRef, {
//         subscriptionDate: new Date().getTime(),
//       });
//       //  ابديت للتاريخ لما بجدد الاشتراك
//       const updateClint = clients.map((client) =>
//         client.id === clientID
//           ? { ...client, subscriptionDate: new Date().getTime() }
//           : client
//       );
//       setClients(updateClint);
//       return alert("تم تجديد الاشتراك بنجاح");
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return (
//     <div className="container home2">
//       <h2 className="text-end">إدارة العملاء</h2>

//       <div className="form-container w-75 m-auto d-flex flex-column text-end">
//         <label className="text-end" htmlFor="name">
//           الاسم
//         </label>
//         <input
//           className="text-end form-control"
//           type="text"
//           id="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <label className="text-end" htmlFor="age">
//           العمر
//         </label>
//         <input
//           className=" form-control"
//           type="number"
//           id="age"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//         />
//         <label className="text-end" htmlFor="phone">
//           رقم الهاتف
//         </label>
//         <input
//           className=" form-control"
//           type="text"
//           id="phone"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//         />
//         <label className="text-end" htmlFor="weight">
//           الوزن
//         </label>
//         <input
//           className=" form-control"
//           type="number"
//           id="weight"
//           value={weight}
//           onChange={(e) => setWeight(e.target.value)}
//         />
//         <label className="text-end" htmlFor="injury">
//           الاصابه
//         </label>
//         <input
//           className=" form-control"
//           type="text"
//           id="injury"
//           value={injury}
//           onChange={(e) => setInjury(e.target.value)}
//         />
//         <label className="text-end" htmlFor="goals">
//           الهدف
//         </label>
//         <input
//           className=" form-control"
//           type="text"
//           id="phone"
//           value={goals}
//           onChange={(e) => setGoals(e.target.value)}
//         />
//         <button onClick={addClient} className="btn btn-dark m-2">
//           إضافة عميل
//         </button>
//       </div>

//       <h3 className="fw-bold text-end">العملاء المشتركين</h3>
//       <div className="clients-list">
//         {clients.map((client) => {
//           const remainingDays = getRemainingDays(client.subscriptionDate);
//           const isExpired = remainingDays === 0;

//           return (
//             <div
//               key={client.id}
//               className={`client-card m-2 ${isExpired ? "expired" : ""}`}
//             >
//               <div className="text-end">
//                 <p className="fw-bold text-bg-dark p-2">{client.name} :الاسم</p>
//                 <p className="fw-bold text-bg-dark p-2">{client.age} العمر</p>
//                 <p className="fw-bold text-bg-dark p-2">
//                   {client.phone} :الموبايل
//                 </p>
//                 <p className="text-end fw-bold text-bg-dark p-2">{client.weight}  :الوزن</p>
//                 <p className="text-end fw-bold text-bg-dark p-2">الاصابه :{client.injury} </p>
//                 <p className="fw-bold text-bg-dark p-2">
//                 الهدف :{client.goals}
//                 </p>
//               </div>

//               <br />
//               <div className="text-end text-time">
//                 <span>
//                   اشتراكه من:{" "}
//                   {new Date(client.subscriptionDate).toLocaleDateString()}
//                 </span>
//                 <br />
//                 {isExpired ? (
//                   <span className="expired-text">انتهى الاشتراك!</span>
//                 ) : (
//                   <span className="remaining-text">
//                     متبقي: {remainingDays} يوم
//                   </span>
//                 )}
//               </div>

//               <br />
//               <button
//                 onClick={() => deleteClient(client.id)}
//                 className="btn btn-danger w-50 "
//               >
//                 حذف العميل
//               </button>
//               <button
//                 onClick={() => renewClintSubscribtion(client.id)}
//                 className="btn btn-info w-50"
//               >
//                 تجديد الاشتراك
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

export default function AdminPage() {
  const [clients, setClients] = useState([]);

  // بيانات العميل
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [weight, setWeight] = useState("");
  const [injury, setInjury] = useState("");
  const [goals, setGoals] = useState("");

  // البحث
  const [search, setSearch] = useState("");

  // حالة التعديل
  const [editingClientId, setEditingClientId] = useState(null);

  // حالات التطبيق
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // ==============================
  // جلب العملاء من Firestore
  // ==============================

  useEffect(() => {
    const getClients = async () => {
      try {
        setLoading(true);
        setError("");

        const clientCollection = collection(db, "clients");

        const clientSnapshot = await getDocs(clientCollection);

        const clientList = clientSnapshot.docs.map((document) => ({
          id: document.id,
          ...document.data(),
        }));

        setClients(clientList);
      } catch (error) {
        console.error("Error fetching clients:", error);

        setError(
          "تعذر الاتصال بقاعدة البيانات. تأكد من اتصال الإنترنت وحاول مرة أخرى."
        );
      } finally {
        setLoading(false);
      }
    };

    getClients();
  }, []);

  // ==============================
  // تفريغ الفورم
  // ==============================

  const clearForm = () => {
    setName("");
    setAge("");
    setPhone("");
    setWeight("");
    setInjury("");
    setGoals("");
    setEditingClientId(null);
  };

  // ==============================
  // إضافة / تعديل العميل
  // ==============================

  const saveClient = async () => {
    if (!name.trim() || !age || !phone.trim() || !weight || !goals.trim()) {
      alert("يرجى ملء جميع البيانات المطلوبة!");
      return;
    }

    try {
      setSaving(true);
      setError("");

      // ==========================
      // تعديل عميل موجود
      // ==========================

      if (editingClientId) {
        const clientRef = doc(db, "clients", editingClientId);

        const updatedClient = {
          name: name.trim(),
          age: parseInt(age, 10),
          phone: phone.trim(),
          weight: parseFloat(weight),
          injury: injury.trim(),
          goals: goals.trim(),
        };

        await updateDoc(clientRef, updatedClient);

        setClients((prevClients) =>
          prevClients.map((client) =>
            client.id === editingClientId
              ? {
                  ...client,
                  ...updatedClient,
                }
              : client
          )
        );

        alert("تم تعديل بيانات العميل بنجاح");

        clearForm();

        return;
      }

      // ==========================
      // إضافة عميل جديد
      // ==========================

      const newClient = {
        name: name.trim(),
        age: parseInt(age, 10),
        phone: phone.trim(),
        weight: parseFloat(weight),
        injury: injury.trim(),
        goals: goals.trim(),
        subscriptionDate: Date.now(),
      };

      const docRef = await addDoc(
        collection(db, "clients"),
        newClient
      );

      setClients((prevClients) => [
        ...prevClients,
        {
          id: docRef.id,
          ...newClient,
        },
      ]);

      alert("تم إضافة العميل بنجاح");

      clearForm();
    } catch (error) {
      console.error("Error saving client:", error);

      setError(
        "حدث خطأ أثناء حفظ بيانات العميل. تأكد من اتصال الإنترنت."
      );
    } finally {
      setSaving(false);
    }
  };

  // ==============================
  // تجهيز العميل للتعديل
  // ==============================

  const editClient = (client) => {
    setEditingClientId(client.id);

    setName(client.name || "");
    setAge(client.age || "");
    setPhone(client.phone || "");
    setWeight(client.weight || "");
    setInjury(client.injury || "");
    setGoals(client.goals || "");

    // نرجع لأعلى الصفحة عند التعديل
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ==============================
  // حذف العميل
  // ==============================

  const deleteClient = async (id) => {
    const confirmDelete = window.confirm(
      "هل أنت متأكد من حذف هذا العميل؟"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      setError("");

      await deleteDoc(doc(db, "clients", id));

      setClients((prevClients) =>
        prevClients.filter((client) => client.id !== id)
      );

      // لو العميل المحذوف كان بيتعدل
      if (editingClientId === id) {
        clearForm();
      }

      alert("تم حذف العميل");
    } catch (error) {
      console.error("Error deleting client:", error);

      setError(
        "حدث خطأ أثناء حذف العميل. تأكد من اتصال الإنترنت."
      );
    }
  };

  // ==============================
  // حساب الأيام المتبقية
  // ==============================

  const getRemainingDays = (subscriptionDate) => {
    if (!subscriptionDate) {
      return 0;
    }

    const now = Date.now();

    const oneMonth = 30 * 24 * 60 * 60 * 1000;

    const remainingTime =
      Number(subscriptionDate) + oneMonth - now;

    return Math.max(
      0,
      Math.ceil(
        remainingTime / (1000 * 60 * 60 * 24)
      )
    );
  };

  // ==============================
  // تجديد الاشتراك
  // ==============================

  const renewClientSubscription = async (clientID) => {
    try {
      setError("");

      const newSubscriptionDate = Date.now();

      const clientRef = doc(
        db,
        "clients",
        clientID
      );

      await updateDoc(clientRef, {
        subscriptionDate: newSubscriptionDate,
      });

      setClients((prevClients) =>
        prevClients.map((client) =>
          client.id === clientID
            ? {
                ...client,
                subscriptionDate: newSubscriptionDate,
              }
            : client
        )
      );

      alert("تم تجديد الاشتراك بنجاح");
    } catch (error) {
      console.error(
        "Error renewing subscription:",
        error
      );

      setError(
        "حدث خطأ أثناء تجديد الاشتراك. تأكد من اتصال الإنترنت."
      );
    }
  };

  // ==============================
  // البحث عن العملاء
  // ==============================

  const filteredClients = clients.filter((client) => {
    const searchValue = search.trim().toLowerCase();

    if (!searchValue) {
      return true;
    }

    const clientName = String(client.name || "").toLowerCase();
    const clientPhone = String(client.phone || "");

    return (
      clientName.includes(searchValue) ||
      clientPhone.includes(searchValue)
    );
  });

  // ==============================
  // JSX
  // ==============================

  return (
    <div className="container home2">

      <h2 className="text-end">إدارة العملاء</h2>

      {/* ==========================
          رسالة الخطأ
      ========================== */}

      {error && (
        <div className="alert alert-danger text-end">
          {error}
        </div>
      )}

      {/* ==========================
          فورم العميل
      ========================== */}

      <div className="form-container w-75 m-auto d-flex flex-column text-end">

        <label className="text-end" htmlFor="name">
          الاسم
        </label>

        <input
          className="text-end form-control"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="text-end" htmlFor="age">
          العمر
        </label>

        <input
          className="form-control"
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <label className="text-end" htmlFor="phone">
          رقم الهاتف
        </label>

        <input
          className="form-control"
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label className="text-end" htmlFor="weight">
          الوزن
        </label>

        <input
          className="form-control"
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <label className="text-end" htmlFor="injury">
          الاصابه
        </label>

        <input
          className="form-control"
          type="text"
          id="injury"
          value={injury}
          onChange={(e) => setInjury(e.target.value)}
        />

        <label className="text-end" htmlFor="goals">
          الهدف
        </label>

        <input
          className="form-control"
          type="text"
          id="goals"
          value={goals}
          onChange={(e) => setGoals(e.target.value)}
        />

        <button
          onClick={saveClient}
          className="btn btn-dark m-2"
          disabled={saving}
        >
          {saving
            ? "جاري الحفظ..."
            : editingClientId
            ? "حفظ تعديل العميل"
            : "إضافة عميل"}
        </button>

        {/* زر إلغاء التعديل يظهر فقط أثناء التعديل */}

        {editingClientId && (
          <button
            onClick={clearForm}
            className="btn btn-secondary m-2"
          >
            إلغاء التعديل
          </button>
        )}
      </div>

      {/* ==========================
          البحث
      ========================== */}

      <div className="w-75 m-auto mt-4 mb-3">

        <input
          type="text"
          className="form-control text-end"
          placeholder="ابحث باسم العميل أو رقم الهاتف..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <h3 className="fw-bold text-end">
        العملاء المشتركين
      </h3>

      {/* ==========================
          Loading
      ========================== */}

      {loading && (
        <div className="text-end">
          جاري تحميل العملاء...
        </div>
      )}

      {/* ==========================
          لا يوجد عملاء
      ========================== */}

      {!loading && filteredClients.length === 0 && (
        <div className="text-end">
          {search
            ? "لا يوجد عميل بهذا الاسم أو رقم الهاتف."
            : "لا يوجد عملاء حتى الآن."}
        </div>
      )}

      {/* ==========================
          العملاء
      ========================== */}

      <div className="clients-list">

        {!loading &&
          filteredClients.map((client) => {

            const remainingDays =
              getRemainingDays(
                client.subscriptionDate
              );

            const isExpired =
              remainingDays === 0;

            return (
              <div
                key={client.id}
                className={`client-card m-2 ${
                  isExpired ? "expired" : ""
                }`}
              >

                <div className="text-end">

                  <p className="fw-bold text-bg-dark p-2">
                    {client.name} :الاسم
                  </p>

                  <p className="fw-bold text-bg-dark p-2">
                    {client.age} :العمر
                  </p>

                  <p className="fw-bold text-bg-dark p-2">
                    {client.phone} :الموبايل
                  </p>

                  <p className="text-end fw-bold text-bg-dark p-2">
                    {client.weight} :الوزن
                  </p>

                  <p className="text-end fw-bold text-bg-dark p-2">
                    الاصابه : {client.injury || "لا يوجد"}
                  </p>

                  <p className="fw-bold text-bg-dark p-2">
                    الهدف : {client.goals}
                  </p>

                </div>

                <br />

                <div className="text-end text-time">

                  <span>
                    اشتراكه من:{" "}
                    {client.subscriptionDate
                      ? new Date(
                          client.subscriptionDate
                        ).toLocaleDateString()
                      : "غير محدد"}
                  </span>

                  <br />

                  {isExpired ? (

                    <span className="expired-text">
                      انتهى الاشتراك!
                    </span>

                  ) : (

                    <span className="remaining-text">
                      متبقي: {remainingDays} يوم
                    </span>

                  )}

                </div>

                <br />

                {/* ==========================
                    أزرار العميل
                ========================== */}

                <button
                  onClick={() =>
                    deleteClient(client.id)
                  }
                  className="btn btn-danger w-50"
                >
                  حذف العميل
                </button>

                <button
                  onClick={() =>
                    renewClientSubscription(
                      client.id
                    )
                  }
                  className="btn btn-info w-50"
                >
                  تجديد الاشتراك
                </button>

                <button
                  onClick={() =>
                    editClient(client)
                  }
                  className="btn btn-dark w-100 mt-2"
                >
                  تعديل بيانات العميل
                </button>

              </div>
            );
          })}

      </div>
    </div>
  );
}