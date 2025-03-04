import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase/firebase"; // استيراد db من ملف firebase
import { updateDoc } from "firebase/firestore";

export default function AdminPage() {
  const [clients, setClients] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [weight, setWeight] = useState("");
  const [injury, setInjury] = useState("");
  const [goals, setGoals] = useState("");

  // جلب العملاء من Firestore
  useEffect(() => {
    const getClients = async () => {
      const clientCollection = collection(db, "clients");
      const clientSnapshot = await getDocs(clientCollection);
      const clientList = clientSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setClients(clientList);
    };

    getClients();
  }, []);

  // دالة لإضافة عميل جديد إلى Firestore
  const addClient = async () => {
    if (!name || !age || !phone || !weight || !goals) {
      alert("يرجى ملء جميع البيانات!");
      return;
    }

    try {
      const newClient = {
        name,
        age: parseInt(age),
        phone,
        weight,
        injury,
        goals,
        subscriptionDate: new Date().getTime(),
      };
      // fire-base
      const docRef = await addDoc(collection(db, "clients"), newClient);
      setClients([...clients, { id: docRef.id, ...newClient }]);

      setName("");
      setAge("");
      setPhone("");
      setGoals("");
      setInjury("");
      setWeight("");
    } catch (error) {
      console.error("Error adding client: ", error);
    }
  };

  // دالة لحذف عميل من Firestore
  const deleteClient = async (id) => {
    try {
      await deleteDoc(doc(db, "clients", id));
      setClients(clients.filter((client) => client.id !== id));
    } catch (error) {
      console.error("Error deleting client: ", error);
    }
  };

  // دالة لحساب الأيام المتبقية
  const getRemainingDays = (subscriptionDate) => {
    const now = new Date().getTime();
    const oneMonth = 30 * 24 * 60 * 60 * 1000;
    const remainingTime = subscriptionDate + oneMonth - now;
    return Math.max(0, Math.ceil(remainingTime / (1000 * 60 * 60 * 24)));
  };
  // تجديد الاشتراك
  const renewClintSubscribtion = async (clientID) => {
    try {
      const clientRef = doc(db, "clients", clientID);
      await updateDoc(clientRef, {
        subscriptionDate: new Date().getTime(),
      });
      //  ابديت للتاريخ لما بجدد الاشتراك
      const updateClint = clients.map((client) =>
        client.id === clientID
          ? { ...client, subscriptionDate: new Date().getTime() }
          : client
      );
      setClients(updateClint);
      return alert("تم تجديد الاشتراك بنجاح");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container home2">
      <h2 className="text-end">إدارة العملاء</h2>

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
          className=" form-control"
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label className="text-end" htmlFor="phone">
          رقم الهاتف
        </label>
        <input
          className=" form-control"
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label className="text-end" htmlFor="weight">
          الوزن
        </label>
        <input
          className=" form-control"
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <label className="text-end" htmlFor="injury">
          الاصابه
        </label>
        <input
          className=" form-control"
          type="text"
          id="injury"
          value={injury}
          onChange={(e) => setInjury(e.target.value)}
        />
        <label className="text-end" htmlFor="goals">
          الهدف
        </label>
        <input
          className=" form-control"
          type="text"
          id="phone"
          value={goals}
          onChange={(e) => setGoals(e.target.value)}
        />
        <button onClick={addClient} className="btn btn-dark m-2">
          إضافة عميل
        </button>
      </div>

      <h3 className="fw-bold text-end">العملاء المشتركين</h3>
      <div className="clients-list">
        {clients.map((client) => {
          const remainingDays = getRemainingDays(client.subscriptionDate);
          const isExpired = remainingDays === 0;

          return (
            <div
              key={client.id}
              className={`client-card m-2 ${isExpired ? "expired" : ""}`}
            >
              <div className="text-end">
                <p className="fw-bold text-bg-dark p-2">{client.name} :الاسم</p>
                <p className="fw-bold text-bg-dark p-2">{client.age} العمر</p>
                <p className="fw-bold text-bg-dark p-2">
                  {client.phone} :الموبايل
                </p>
                <p className="text-end fw-bold text-bg-dark p-2">{client.weight}  :الوزن</p>
                <p className="text-end fw-bold text-bg-dark p-2">الاصابه :{client.injury} </p>
                <p className="fw-bold text-bg-dark p-2">
                الهدف :{client.goals}
                </p>
              </div>

              <br />
              <div className="text-end text-time">
                <span>
                  اشتراكه من:{" "}
                  {new Date(client.subscriptionDate).toLocaleDateString()}
                </span>
                <br />
                {isExpired ? (
                  <span className="expired-text">انتهى الاشتراك!</span>
                ) : (
                  <span className="remaining-text">
                    متبقي: {remainingDays} يوم
                  </span>
                )}
              </div>

              <br />
              <button
                onClick={() => deleteClient(client.id)}
                className="btn btn-danger w-50 "
              >
                حذف العميل
              </button>
              <button
                onClick={() => renewClintSubscribtion(client.id)}
                className="btn btn-info w-50"
              >
                تجديد الاشتراك
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
