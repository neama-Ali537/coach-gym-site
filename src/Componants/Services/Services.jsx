import React from "react";

export default function Services() {
  return (
    <div className="services-page container text-center">
      <h1 className="serv-heading">Choose Your Pricing Plan</h1>
      <div className="row d-flex justify-content-between align-items-center ">
        <div className="col-md-4 mt-5">
          <div className="box1">
            <h2 className="fs-1">تجربه يوميه</h2>
            <p>
              لمشاهده نظام غذائي لمده يوم واحد فقط لتجربه اذا كنت تريد الاشتراك{" "}
            </p>
            <button className="btn btn-dark btn-serv">اضغط هنا</button>
          </div>
        </div>
        <div className="col-md-4 mt-5">
          <div className="box1 box2">
            <h2 className="fs-1">اشتراك شهري</h2>
            <p>متابعه يوميه</p>
            <p>نظام غذائي اسبوعي</p>
            <p>نظام رياضي اسبوعي</p>
            <p>نظام تدريبي شهري</p>
            <p>متابعه الاوزان و القياسات</p>
            <div className="div-price">
              لمعرفه الاسعار برجاء التواصل الشخصي مع الكابتن
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-5">
          <div className="box1 box2">
            <h2 className="fs-1">
             اشتراك 3 شهور
              </h2>

            <p>متابعه يوميه</p>
            <p>نظام غذائي اسبوعي</p>
            <p>نظام رياضي اسبوعي</p>
            <p>نظام تدريبي شهري</p>
            <p>متابعه الاوزان و القياسات</p>
            <p></p>
            <div className="div-price">
              لمعرفه الاسعار برجاء التواصل الشخصي مع الكابتن
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
