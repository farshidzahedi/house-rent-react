import React from "react";

function Contact() {
  return (
    <div>
      <h1 className="text-kilid font-bold text-3xl mb-5">تماس با ما</h1>
      <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
      <form
        id="contact"
        name="contact"
        accept-charset="utf-8"
        className="flex flex-col gap-5 w-[600px] mx-auto mt-6"
      >
        <label className="flex flex-col">
          <span>نام شما</span>
          <input name="name" type="text" placeholder="نام شما" className="border p-2 rounded-md" />
        </label>
        <label className="flex flex-col">
          <span>ایمیل</span>
          <input name="email" type="email" placeholder="ایمیل" className="border p-2 rounded-md"/>
        </label>
        <label className="flex flex-col">
          <span>پیام شما</span>
          <textarea name="message" placeholder="پیام شما" className="border p-2 rounded-md"></textarea>
        </label>
        <input name="submit" type="submit" value="ارسال" className="border-[1px] text-white font-light px-6 py-3 bg-kilid rounded-md text-xs transition duration-150	delay-100	 hover:bg-transparent hover:text-kilid hover:border-[1px] hover:border-kilid	" />
      </form>
    </div>
  );
}

export default Contact;
