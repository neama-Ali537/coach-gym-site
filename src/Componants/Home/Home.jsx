import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home container">
      <div className="row">
        <div className="cover">
          <div className="cover-img"></div>
          <div>
            <h1 className="typing-effect2">Welcome to C.Hagar Alaa</h1>
            <div className="d-flex">
              <Link to={"/feedback"}>
                {" "}
                <button className="cta-button">Feed Back</button>
              </Link>
              <Link to={"/services"}>
                {" "}
                <button className="cta-button cta2">Get Start</button>
              </Link>
            </div>
          </div>
        </div>
        <section className="profile-data mt-2">
          <p className="w-100 fs-2 bg-main">
            "WHAT SEEMS IMPOSSIBLE TODAY WILL SOON BECOME YOUR WARM-UP"💪🏽
          </p>
          <div className="row d-flex justify-content-between align-items-center">
          <h2 className="mb-3">C. Hagar Alaa</h2>
          <h6 className="text-primary">ABOUT ME</h6>
            <div className="col-md-6">
             

              <div className="text-start mt-4">
                <h5 className="text-secondary">Certifications</h5>
                <ul>
                  <li>
                    Certificate of Appreciation for completing 18h training,
                    aiding in rescuing people's lives – Middle East Pharmacists.
                  </li>
                  <li>
                    Certificate of Achievement in Basic Life Support, CPR, and
                    Emergency Course – Pharmacists of Syndicate of Sharkia.
                  </li>
                  <li>
                    Certificate of Attendance in Basic Business Skills (BBSa) –
                    Delaware American University.
                  </li>
                </ul>

                <h5 className="text-secondary mt-4">Work Experience</h5>
                <h6 className="fw-bold">
                  Forma Gym, Port Said (Total: 5 years)
                </h6>
                <ul>
                  <li>
                    Assistant Trainer for 1 year, supporting senior trainers.
                  </li>
                  <li>
                    Promoted to Certified Personal Trainer & Rehabilitation
                    Specialist for 4 years.
                  </li>
                  <li>
                    Designed and implemented personalized fitness and
                    rehabilitation programs.
                  </li>
                  <li>
                    Conducted one-on-one training sessions focusing on fitness
                    goals and injury prevention.
                  </li>
                </ul>

                <h6 className="fw-bold mt-3">Ahmed Nabil Center</h6>
                <ul>
                  <li>
                    Oversaw all gym activities and ensured smooth operations.
                  </li>
                  <li>Delivered personalized training programs for clients.</li>
                  <li>
                    Supervised fitness staff and conducted client assessments.
                  </li>
                </ul>

                <h6 className="fw-bold mt-3">
                  Station-Soho Square Gym, Port Said (Since 2023)
                </h6>
                <ul>
                  <li>Certified Trainer & Rehabilitation Specialist.</li>
                  <li>Working under Captain Abdelrahman Qalawina.</li>
                  <li>
                    Conducting personalized training and rehabilitation
                    programs.
                  </li>
                  <li>
                    Specializing in injury recovery, mobility enhancement, and
                    post-injury strength training.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <img
                className="w-100 rounded-1"
                src="/Assets/rev/img1.jpg"
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="services ">
          <h2 className="fw-bold">Subscription plan & خطه الاشتراكات</h2>
          <div className="cards  flex-md-column">
            <div className="card ">
              <span> 🍽️Meal plan</span>
              <span className="text-end "> نظام غذائي</span>{" "}
            </div>
            <div className="card">
              <span>💪🏽Exercises of the week</span>
              <span className="text-end"> تمارين الاسبوع</span>{" "}
            </div>
            <div className="card">
              <span>📖Sports injurt and rehabilitation system</span>{" "}
              <span className="text-end">
                نظام خاص للاصابات و التأهيل الرياضي
              </span>
            </div>
          </div>
        </section>
        <h2 className="text-end">اشترك دلوقتي عشان تقدر تشوف الخطه</h2>
        <Link to="clientpage">
          {" "}
          <div className="card ">دوس هنا عشان تسجل بياناتك</div>
        </Link>
      </div>
    </div>
  );
}
