"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";



// Custom Next Arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 right-[-30px] z-10 cursor-pointer"
      onClick={onClick}
    >
       <IoIosArrowForward className="text-[50px]" />
    </div>
  );
};

// Custom Previous Arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 left-[-30px] z-10 cursor-pointer"
      onClick={onClick}
    >
        <IoIosArrowBack className="text-[50px]" />
    </div>
  );
};

const UsersConnected = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
        <div className="bg-black py-[150px]">
            <div>
                <h2 className="text-white text-[36px] md:text-[75px] leading-[40px] md:leading-[95px] tracking-[0.01em] font-bold text-center max-w-[1279px] mx-auto">
                    למעלה מ- 150 אלף משתמשים כבר התחברו למערכת.. הנה מה שכתבו לנו
                </h2>
                <div className="max-w-[1300px] mx-auto mt-10 md:px-28 lg:px-10 px-10">
                    <Slider {...settings}>
                        <div className="px-4 my-5">
                            <img src="/assets/users.svg" alt="User review 1" className="w-full h-[170px]"/>
                        </div>
                        <div className="px-4 my-5">
                            <img src="/assets/users.svg" alt="User review 1" className="w-full h-[170px]"/>
                        </div>
                        <div className="px-4 my-5">
                            <img src="/assets/users.svg" alt="User review 1" className="w-full h-[170px]"/>
                        </div>
                        <div className="px-4 my-5">
                            <img src="/assets/users.svg" alt="User review 1" className="w-full h-[170px]"/>
                        </div>
                        <div className="px-4 my-5">
                            <img src="/assets/users.svg" alt="User review 1" className="w-full h-[170px]"/>
                        </div>
                        <div className="px-4 my-5">
                            <img src="/assets/users.svg" alt="User review 1" className="w-full h-[170px]"/>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
        
        <div className="bg-white text-black py-10 md:py-[100px] max-w-[1440px] mx-auto px-4">
            <h2 className="text-[24px] md:text-[40px] leading-normal sm:leading-[60px] md:leading-[95px] tracking-[0.01em] text-center font-normal max-w-[900px] mx-auto">
                אם הגעת עד לכאן,כנראה שכבר הבנת כמה הבינה המלאכותית משנה את העולם,ויותר מזה.. כמה העסק שלך יכול להפיק ממנה!
            </h2>
            <h3 className="text-[#FF4747] text-[36px] md:text-[61px] leading-normal sm:leading-[60px] md:leading-[95px] tracking-[0.01em] font-bold text-center py-5 md:py-10">
                כמה שווה לך?
            </h3>
            <ul className="custom-bullets flex items-end justify-end flex-col">
                <li className="text-[24px] leading-normal sm:leading-[60px] md:text-[40px] md:leading-[95px] tracking-[0.01em] text-right py-2 md:py-4">
                    עוזר אישי שמכיר אותך, יודע הכל וזמין לך 24/7 לכל שאלה
                </li>
                <li className="text-[24px] leading-normal sm:leading-[60px] md:text-[40px] md:leading-[95px] tracking-[0.01em] text-right py-2 md:py-4">
                    להכפיל פי 100 הצלחות בחיים ובעסק.. ולפנות לעצמך זמן לדברים אחרים
                </li>
                <li className="text-[24px] leading-normal sm:leading-[60px] md:text-[40px] md:leading-[95px] tracking-[0.01em] text-right py-2 md:py-4">
                    להפסיק לעבוד לבד או להיתלות באחרים
                </li>
                <li className="text-[24px] leading-normal sm:leading-[60px] md:text-[40px] md:leading-[95px] tracking-[0.01em] text-right py-2 md:py-4">
                    להשתחרר מכל הפעולות שלא מעניינות אותך בעסק
                </li>
            </ul>
            <h2 className="text-[24px] md:text-[40px] leading-normal sm:leading-normal md:leading-[95px] text-black tracking-[0.01em] text-center mt-10">
                איך אפשר בכלל לכמת את זה במחיר..
            </h2>
        </div>

        <div className="bg-black pb-[100px] px-4">
            <div className="max-w-[1440px] mx-auto py-8 md:py-[120px]">
                <h2 className="text-[30px] md:text-[75px] leading-[45px] md:leading-[95px] tracking-[0.01em] text-center font-bold max-w-[1279px] mx-auto">ובכל זאת.. הנה מה שעולה להשתמש בכלים שיוניצ’אט נותנת לך:</h2>
                <ul className="flex items-end justify-end flex-col py-8 md:py-[106px] tracking-[0.01em] text-right font-normal leading-[40px] md:leading-[95px] text-[18px] md:text-[40px]">
                    <li className='flex items-start gap-2'>ג’יפיטי 4o או ודאלי 3 - ₪79.90 (חודשי)<GoDotFill className='md:text-[50px] text-[30px] mt-1.5 md:mt-5'/></li>
                    <li className='flex items-start gap-2'>מידג’רני - ₪79.90 (חודשי)<GoDotFill className='md:text-[50px] text-[30px] mt-1.5 md:mt-5'/></li>
                    <li className='flex items-start gap-2'>קלוד 3 - ₪79.90 (חודשי)<GoDotFill className='md:text-[50px] text-[30px] mt-1.5 md:mt-5'/></li>
                    <li className='flex items-start gap-2'>סטייבל דפיוז’ן + סטביליטי אי איי - ₪99.90 (חודשי)<GoDotFill className='md:text-[50px] text-[30px] mt-1.5 md:mt-5'/></li>
                    <li className='flex items-start gap-2'>קורס התמחות במודל טקסט - ₪450 (חד פעמי)<GoDotFill className='md:text-[50px] text-[30px] mt-1.5 md:mt-5'/></li>
                    <li className='flex items-start gap-2'>קורס התמחות במודל תמונות - ₪280 (חד פעמי)<GoDotFill className='md:text-[50px] text-[30px] mt-1.5 md:mt-5'/></li>
                </ul>

                <p className="text-[14px] md:text-[30px] lg:text-[40px] leading-[30px] md:leading-[80px] lg:leading-[95px] font-bold text-right">וכל זה מבלי לדבר על פרילאנסרים, מעצבים, קופירייטרים, מנהלי משרד, יועצי שיווק, יועצים עסקיים, מנהלי מכירות, יועצי דין ועוד.. או על הזמן שחסכת מהרגע שהתחלת לעבוד עם יוניצ’אט.</p>
                <p className="text-[14px] md:text-[30px] lg:text-[40px] leading-[30px] md:leading-[80px] lg:leading-[95px] font-normal text-center md:px-10 mt-2 md:mt-[105px]">חשוב לי שכל עסק בישראל ידע למנף את יכולות הבינה המלאכותית, ושיצליח להפיק ממנה את המירב בקלות. זו בדיוק הסיבה שאנחנו מציעים מנוי ללא הגבלה למערכת במחיר הזה:</p>
                <h2 className="text-[25px] md:text-[45px] lg:text-[55px] leading-[35px] md:leading-[80px] lg:leading-[95px] text-center font-bold my-4">במקום</h2>
                <div className="flex justify-center text-[23px] md:text-[60px] lg:text-[80px] leading-[35px] md:leading-[85px] lg:leading-[95px] font-normal text-center mt-2">
                    <h4 className='mr-2'>חד פעמי</h4>
                    <span className="text-[35px] mt-4"> ₪ </span><del>730</del>
                    <h4 className='mx-2'>+ בחודש  </h4>
                    <span className="text-[35px] mt-4"> ₪</span><del>350</del> 
                </div>
                <h2 className="text-[25px] md:text-[45px] lg:text-[55px] leading-[35px] md:leading-[80px] lg:leading-[95px] text-center font-bold py-2 md:py-5">רק</h2>
                <h2 className="text-[30px] md:text-[70px] leading-[55px] md:leading-[95px] text-center mt-2"> (בחודש)<span className="text-[25px] ml-2">₪</span><span className="text-[40px] md:text-[100px]">74.90</span></h2>
            </div>

            <div className='max-w-[1015px] mx-auto border-[6px] rounded-[33px] border-dashed border-[#FF5E5E] p-3 sm:p-5 md:p-10'>
                <h2 className='text-[40px] md:text-[60px] font-bold leading-[60px] md:leading-[95px] tracking-[0.01em] text-center text-[#FFFFFF]'>כל מה שנשאר לך לעשות זה..</h2>
                <p className="text-[30px] md:text-[40px] leading-[40px] md:leading-[60px] text-center font-normal mt-4 md:mt-6">ללחוץ על הכפתור, למלא את הפרטים, לאשר את התשלום, להפוך את העסק שלך למכונה משומנת ואת הראש שלך לנקי ושקט יותר מאי פעם.</p>
                <div className='flex flex-col md:flex-row items-center justify-between max-w-[95%] gap-[30px] mx-auto my-4 md:my-[70px]'>
                    <Image src='/assets/arrow-down.svg' alt="Icons" width={50} height={83} className='mx-auto md:mx-0' />
                    <div className='bg-custom-gradient w-full md:w-[514.8px] h-[90px] md:h-[128px] rounded-[90px] flex items-center justify-center relative'>
                        <button className='font-bold text-[24px] md:text-[48px] leading-[1.2] md:leading-[95px] tracking-[0.01em] text-center mr-8'>ניסיון חינם!</button>
                        <div className='flex flex-col items-center justify-center absolute right-0 border border-black h-[90px] md:h-[130px] w-[90px] md:w-[133px] rounded-full'>
                            <h2 className='text-[24px] md:text-[50px] font-semibold -mt-2 md:-mt-4'>7</h2>
                            <h4 className='text-[16px] md:text-[30px] leading-[5px] tracking-[0.01em] text-center font-bold'>ימים</h4>
                        </div>
                    </div>
                    <Image src='/assets/arrow-down.svg' alt="Icons" width={50} height={83} className='mx-auto md:mx-0' />
                </div>
                <button className='rounded-xl w-full h-[70px] md:h-[115px] font-bold text-[20px] md:text-[36px] leading-[60px] md:leading-[82px] tracking-[0.04em] text-center bg-[#FF4747] mb-2 md:mb-[40px]'>אני רוצה להתחיל!</button>
                <Image src='/assets/cards.svg' alt="Cards" width={400} height={40} className="text-center md:max-w-[400px] mx-auto py-5" />
                <p className="text-[15px] md:text-[25px] leading-[30px] md:leading-[55px] tracking-[0.01em] font-normal text-center mt-2">*ההצעה יכולה להיגמר ללא התרעה מוקדמת.</p>
                <p className='text-[20px] md:text-[30px] leading-[30px] md:leading-[55px] tracking-[0.01em] font-normal max-w-[95%] mx-auto text-center my-4'>זו ההזדמנות שלך לקחת את כל מה שיש לבינה המלאכותית להציע לעסק שלך עוד לפני שכולם שם, ולהנות מתנופה משמעותית בתקופה קריטית להצלחה שלך.</p>
            </div>
        </div>
    </>
  );
};

export default UsersConnected;
