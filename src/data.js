// import house images
import House1 from "./assets/img/houses/house1.png";
import House2 from "./assets/img/houses/house2.png";
import House3 from "./assets/img/houses/house3.png";
import House4 from "./assets/img/houses/house4.png";
import House5 from "./assets/img/houses/house5.png";
import House6 from "./assets/img/houses/house6.png";
import House7 from "./assets/img/houses/house7.png";
import House8 from "./assets/img/houses/house8.png";
import House9 from "./assets/img/houses/house9.png";
import House10 from "./assets/img/houses/house10.png";
import House11 from "./assets/img/houses/house11.png";
import House12 from "./assets/img/houses/house12.png";
// import house large images
import House1Lg from "./assets/img/houses/house1lg.png";
import House2Lg from "./assets/img/houses/house2lg.png";
import House3Lg from "./assets/img/houses/house3lg.png";
import House4Lg from "./assets/img/houses/house4lg.png";
import House5Lg from "./assets/img/houses/house5lg.png";
import House6Lg from "./assets/img/houses/house6lg.png";
import House7Lg from "./assets/img/houses/house7lg.png";
import House8Lg from "./assets/img/houses/house8lg.png";
import House9Lg from "./assets/img/houses/house9lg.png";
import House10Lg from "./assets/img/houses/house10lg.png";
import House11Lg from "./assets/img/houses/house11lg.png";
import House12Lg from "./assets/img/houses/house12lg.png";

// import apartments images
import Apartment1 from "./assets/img/apartments/a1.png";
import Apartment2 from "./assets/img/apartments/a2.png";
import Apartment3 from "./assets/img/apartments/a3.png";
import Apartment4 from "./assets/img/apartments/a4.png";
import Apartment5 from "./assets/img/apartments/a5.png";
import Apartment6 from "./assets/img/apartments/a6.png";
// import apartments large images
import Apartment1Lg from "./assets/img/apartments/a1lg.png";
import Apartment2Lg from "./assets/img/apartments/a2lg.png";
import Apartment3Lg from "./assets/img/apartments/a3lg.png";
import Apartment4Lg from "./assets/img/apartments/a4lg.png";
import Apartment5Lg from "./assets/img/apartments/a5lg.png";
import Apartment6Lg from "./assets/img/apartments/a6lg.png";

// import agents images
import Agent1 from "./assets/img/agents/agent1.png";
import Agent2 from "./assets/img/agents/agent2.png";
import Agent3 from "./assets/img/agents/agent3.png";
import Agent4 from "./assets/img/agents/agent4.png";
import Agent5 from "./assets/img/agents/agent5.png";
import Agent6 from "./assets/img/agents/agent6.png";
import Agent7 from "./assets/img/agents/agent7.png";
import Agent8 from "./assets/img/agents/agent8.png";
import Agent9 from "./assets/img/agents/agent9.png";
import Agent10 from "./assets/img/agents/agent10.png";
import Agent11 from "./assets/img/agents/agent11.png";
import Agent12 from "./assets/img/agents/agent12.png";

export const Menu = [
  { navmenu: "صفحه اصلی", link: "/" },
  {
    navmenu: "مگامنو",
    link: "#",
    img: "./assets/img/vila-megamenu.jpg",
    megamenu: true,
    submenu: [
      {subtitleUl: "ویلایی",
        link: "1",
        megamenu: true,
        subsubtitle: [
          { subtitle: "از 1 میلیون تا 2 میلیون", link: "/" },
          { subtitle: "از 2 میلیون تا 3 میلیون", link: "/" },
          { subtitle: "از 3 میلیون تا 4 میلیون", link: "/" },
          { subtitle: "از 4 میلیون تا 5 میلیون", link: "/" },
        ],
      },
      {
        subtitleUl: "مسکونی",
        link: "2",
        megamenu: true,
        subsubtitle: [
          { subtitle: "از 1 میلیون تا 2 میلیون", link: "/" },
          { subtitle: "از 2 میلیون تا 3 میلیون", link: "/" },
          { subtitle: "از 3 میلیون تا 4 میلیون", link: "/" },
          { subtitle: "از 4 میلیون تا 5 میلیون", link: "/" },
        ],
      },
      {
        subtitleUl: "ساحلی",
        link: "3",
        megamenu: true,
        subsubtitle: [
          { subtitle: "از 1 میلیون تا 2 میلیون", link: "/" },
          { subtitle: "از 2 میلیون تا 3 میلیون", link: "/" },
          { subtitle: "از 3 میلیون تا 4 میلیون", link: "/" },
          { subtitle: "از 4 میلیون تا 5 میلیون", link: "/" },
        ],
      },
    ],
  },
  { navmenu: "درباره ما", link: "about" },
  { navmenu: "تماس با ما", link: "contact" },
];

export const Data = [
  {
    id: 1,
    type: "ویلایی",
    name: "خانه ویلایی شیراز",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    image: House1,
    imageLg: House1Lg,
    country: "شیراز",
    address: "تهران خیابان پاسداران",
    bedrooms: "6",
    bathrooms: "3",
    surface: "200 متر",
    year: "2016",
    price: "1.850.000",
    agent: {
      image: Agent1,
      name: "علی احمدی",
      phone: "09192374722",
    },
  },
  {
    id: 2,
    type: "ویلایی",
    name: "ویلا  شماره 2",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    image: House2,
    imageLg: House2Lg,
    country: "یزد",
    address: "تهران خیابان پاسداران",
    bedrooms: "6",
    bathrooms: "3",
    surface: "200 متر",
    year: "2016",
    price: "1.450.000",
    agent: {
      image: Agent2,
      name: "علی احمدی",
      phone: "09192374722",
    },
  },
  {
    id: 3,
    type: "ویلایی",
    name: "ویلا شماره 3",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    image: House3,
    imageLg: House3Lg,
    country: "شیراز",
    address: "تهران، خیابان جردن،تابان غربی",
    bedrooms: "6",
    bathrooms: "3",
    surface: "200 متر",
    year: "2016",
    price: "1.450.000",
    agent: {
      image: Agent3,
      name: "علی احمدی",
      phone: "09192374722",
    },
  },
  {
    id: 4,
    type: "ویلایی",
    name: "ویلا ساحلی شماره 4",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    image: House4,
    imageLg: House4Lg,
    country: "یزد",
    address: "تهران، خیابان جردن،تابان غربی",
    bedrooms: "6",
    bathrooms: "3",
    surface: "200 متر",
    year: "2016",
    price: "1.450.000",
    agent: {
      image: Agent4,
      name: "علی احمدی",
      phone: "09192374722",
    },
  },
  {
    id: 5,
    type: "ساحلی",
    name: "ویلا ساحلی شماره 5",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    image: House5,
    imageLg: House5Lg,
    country: "شیراز",
    address: "تهران، خیابان  شریعتی",
    bedrooms: "5",
    bathrooms: "3",
    surface: "200 متر",
    year: "2015",
    price: "1.450.000",
    agent: {
      image: Agent5,
      name: "علی احمدی",
      phone: "09192374722",
    },
  },
  {
    id: 6,
    type: "ساحلی",
    name: "ویلا ساحلی شماره 6",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    image: House6,
    imageLg: House6Lg,
    country: "گیلان",
    address: "تهران، خیابان  شریعتی",
    bedrooms: "6",
    bathrooms: "3",
    surface: "200 متر",
    year: "2014",
    price: "1.650.000",
    agent: {
      image: Agent6,
      name: "علی احمدی",
      phone: "09192374722",
    },
  },
  {
    id: 7,
    type: "ساحلی",
    name: "ویلا ساحلی شماره 7",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: "گیلان",
    address: "تهران، خیابان  شریعتی",
    bedrooms: "2",
    bathrooms: "1",
    surface: "200 متر",
    year: "2012",
    price: "1.650.000",
    agent: {
      image: Agent7,
      name: "علی احمدی",
      phone: "09192374722",
    },
  },
  {
    id: 8,
    type: "سوییت",
    name: "سوییت شماره 8",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: "شیراز",
    address: "تهران، خیابان دزاشیب",
    bedrooms: "3",
    bathrooms: "1",
    surface: "200 متر",
    year: "2011",
    price: "1.650.000",
    agent: {
      image: Agent8,
      name: "علی احمدی",
      phone: "09192374722",
    },
  },
  {
    id: 9,
    type: "سوییت",
    name: "سوییت شماره 9",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: "شیراز",
    address: "تهران، خیابان یاسر",
    bedrooms: "2",
    bathrooms: "1",
    surface: "200 متر",
    year: "2011",
    price: "1.150.000",
    agent: {
      image: Agent9,
      name: "علی احمدی",
      phone: "09192374722",
    },
  },
  {
    id: 10,
    type: "سوییت",
    name: "سوییت شماره 10",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    image: House7,
    imageLg: House7Lg,
    country: "تبریز",
    address: "تهران، خیابان یاسر",
    bedrooms: "5",
    bathrooms: "3",
    surface: "200 متر",
    year: "2015",
    price: "1.150.000",
    agent: {
      image: Agent10,
      name: "علی احمدی",
      phone: "09192374722",
    },
  },
  {
    id: 11,
    type: "سوییت",
    name: "سوییت شماره 11",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    image: House8,
    imageLg: House8Lg,
    country: "مشهد",
    address: "تهران خیابان پاسداران",
    bedrooms: "7",
    bathrooms: "2",
    surface: "200 متر",
    year: "2019",
    price: "1.150.000",
    agent: {
      image: Agent11,
      name: "علی احمدی",
      phone: "09192374722",
    },
  },
  {
    id: 12,
    type: "سوییت",
    name: "سوییت شماره 12",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    image: House9,
    imageLg: House9Lg,
    country: "شیراز",
    address: "تهران خیابان پاسداران",
    bedrooms: "4",
    bathrooms: "4",
    surface: "200 متر",
    year: "2015",
    price: "1.000.000",
    agent: {
      image: Agent12,
      name: "علی احمدی",
      phone: "09192374722",
    },
  },
  {
    id: 13,
    type: "سوییت",
    name: "سوییت شماره 13",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    image: House10,
    imageLg: House10Lg,
    country: "شیراز",
    address: "تهران خیابان پاسداران",
    bedrooms: "5",
    bathrooms: "2",
    surface: "200 متر",
    year: "2014",
    price: "1.000.000",
    agent: {
      image: Agent1,
      name: "علی احمدی",
      phone: "09192374722",
    },
  },
  {
    id: 14,
    type: "سوییت",
    name: "سوییت شماره 14",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    image: House11,
    imageLg: House11Lg,
    country: "شیراز",
    address: "تهران خیابان پاسداران",
    bedrooms: "5",
    bathrooms: "2",
    surface: "200 متر",
    year: "2011",
    price: "1.000.000",
    agent: {
      image: Agent2,
      name: "فرشید زاهدی",
      phone: "09192374722",
    },
  },
  {
    id: 15,
    type: "سوییت",
    name: "سوییت شماره 15",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    image: House12,
    imageLg: House12Lg,
    country: "تهران",
    address: "تهران خیابان پاسداران",
    bedrooms: "4",
    bathrooms: "3",
    surface: "200 متر",
    year: "2013",
    price: "1.250.000",
    agent: {
      image: Agent3,
      name: "فرشید زاهدی",
      phone: "09192374722",
    },
  },
  {
    id: 16,
    type: "سوییت",
    name: "سوییت شماره 16",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: "تهران",
    address: "تهران خیابان پاسداران",
    bedrooms: "2",
    bathrooms: "1",
    surface: "200 متر",
    year: "2011",
    price: "1.250.000",
    agent: {
      image: Agent4,
      name: "فرشید زاهدی",
      phone: "09192374722",
    },
  },
  {
    id: 17,
    type: "سوییت",
    name: "سوییت شماره 17",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: "شیراز",
    address: "تهران خیابان پاسداران",
    bedrooms: "3",
    bathrooms: "1",
    surface: "200 متر",
    year: "2012",
    price: "1.250.000",
    agent: {
      image: Agent5,
      name: "فرشید زاهدی",
      phone: "09192374722",
    },
  },
  {
    id: 18,
    type: "سوییت",
    name: "سوییت شماره 18",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: "تهران",
    address: "تهران خیابان پاسداران",
    bedrooms: "3",
    bathrooms: "1",
    surface: "200 متر",
    year: "2010",
    price: "1.650.000",
    agent: {
      image: Agent6,
      name: "علی کامرانی",
      phone: "09192374722",
    },
  },
];
