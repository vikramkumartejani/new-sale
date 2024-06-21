'use client'
import { useState } from 'react';
import Image from 'next/image'
import {  AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";


const faqs = [
  {
    question: "האם צריך לשלם על משהו מעבר למנוי",
    answer: "לא! המנוי ליוניצ’אט כולל את העלויות של המנויים לכל המודלים שמחוברים למערכת, אינך צריך להוסיף שקל אחד כדי להנות מכולם."
  },
  {
    question: "לאילו מודלים של הבינה יוניצ’אט מחברת אותי",
    answer: "לגרסאות המתקדמות ביותר של המודלים הבאים:מידג’רני, צ’אט ג’יפיטי, דאלי, קלוד וסטייבל דיפיוז’ן.",
  },
  {
    question: "אפשר לבצע משימות בעברית",
    answer: "כן, המערכת עובדת בכל השפות לרבות בעברית, ויודעת לבצע את המשימות על הצד הטוב ביותר גם בעברית. כן, כולל ייצור תמונות.",
  },
  {
    question: "אפשר לבצע משימות בהודעות קוליות",
    answer: "חיובי, אפשר להקליט הודעה קולית ולשלוח אותה בווטסאפ למערכת והיא תבצע את הבקשה שלך בתוך כמה דקות.",
  },
  {
    question: "צריך מנוי לכל מכשיר",
    answer: "ממש לא, אפשר להתחבר עם מנוי אחד לטלפון, למחשב או לכל דפדפן.",
  },
  {
    question: "למה המחיר כל כך נמוך",
    answer: "מכיוון שאנחנו מחברים מגוון מערכות להמון אנשים, אנחנו מצליחים לייצר מחיר נמוך יחסית לשירותים של כולם.",
  },
  {
    question: "האם החיבור נעשה באופן רשמי",
    answer: "כמובן, הכל נעשה בצורה חוקית ודרך הערוצים של המודלים עצמם בשיתוף מלא.",
  },
  {
    question: "האם יש גישה לתכנים שלי",
    answer: "אין שימוש או גישה לתכנים של המשתמשים, הם נשמרים בין המשתמש למכשיר המקומי שלו, ומועברים ישירות למודלים לצורך יצירת התכנים.",
  },
  {
    question: "האם מותר לי להשתמש בתמונות באופן מסחרי",
    answer: "כן, לתמונות ולתכנים שנוצרים על ידי בינה מלאכותית יש אישור שימוש בלתי מוגבל בכל העולם.",
  },
];

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <div className='bg-black pt-[142px] pb-[75px] px-4'>
        <div className='max-w-[1015px] mx-auto border-[6px] rounded-[33px] border-dashed border-[#FF5E5E] p-5 md:p-10'>
                <h2 className='text-[30px] sm:text-[40px] md:text-[60px] font-bold leading-[60px] md:leading-[95px] tracking-[0.01em] text-center text-[#FFFFFF]'>למקרה ששאלת..</h2>
                {/* FAQ */}
                <div className='py-[50px] md:py-[75px] lg:py-[100px]'>
                  {faqs.map((faq, index) => (
                    <div key={index} className='mb-8'>
                      <div className='flex md:items-center justify-between gap-2 text-right cursor-pointer' onClick={() => handleToggle(index)}>
                        {expandedIndex === index ? (
                          <AiOutlineMinus className='min-w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[37px] lg:h-[37px]' />
                        ) : (
                          <AiOutlinePlus className='min-w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[37px] lg:h-[37px]' />
                        )}
                        <h2 className='text-[20px] leading-[30px] md:text-[30px] md:leading-[40px] lg:text-[40px] lg:leading-[50px] font-normal tracking-[0.01em]'><span>?</span>{faq.question}</h2>
                      </div>
                      <div
                        className={`transition-max-height text-right duration-500 ease-in-out overflow-hidden ${
                          expandedIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className='text-[16px] leading-[24px] md:text-[20px] md:leading-[30px] lg:text-[30px] lg:leading-[40px] tracking-[0.01em] font-normal text-right mt-2 md:mt-4'>{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>

              <p className='text-[20px] sm:text-[30px] md:text-[40px] leading-[40px] md:leading-[60px] text-center font-normal'>אם יש לך שאלות נוספות, אפשר לדבר איתי ישירות דרך הווטסאפ (המספר נשלח אחרי שמתחילים לעבוד עם המערכת), באמת שאין סיבה לא להתחיל..</p>
              <div className='flex flex-col md:flex-row items-center justify-between max-w-[95%] gap-[30px] mx-auto my-4 md:my-[70px]'>
                  <Image src='/assets/arrow-down.svg' alt="Icons" width={50} height={83} className='mx-auto md:mx-0' />
                  <div className='bg-custom-gradient w-full md:w-[514.8px] h-[88px] md:h-[128px] rounded-[90px] flex items-center justify-center relative'>
                      <button className='font-bold text-[24px] md:text-[48px] leading-[1.2] md:leading-[95px] tracking-[0.01em] text-center mr-8'>ניסיון חינם!</button>
                      <div className='flex flex-col items-center justify-center absolute right-0 border border-black h-[90px] md:h-[130px] w-[90px] md:w-[133px] rounded-full'>
                      <h2 className='text-[24px] md:text-[50px] font-semibold -mt-2 md:-mt-4'>7</h2>
                    <h4 className='text-[16px] md:text-[30px] leading-[5px] tracking-[0.01em] text-center font-bold'>ימים</h4>
                  </div>
                </div>
                <Image src='/assets/arrow-down.svg' alt="Icons" width={50} height={83} className='mx-auto md:mx-0' />
              </div>
              <button className='rounded-xl w-full h-[70px] md:h-[115px] font-bold text-[20px] md:text-[36px] leading-[60px] md:leading-[82px] tracking-[0.04em] text-center bg-[#FF4747] mb-2 md:mb-[40px]'>אני רוצה להתחיל!</button>
              <Image src='/assets/cards.svg' alt="Cards" width={400} height={40} className="text-center md:max-w-[400px] mx-auto" />
              <p className="text-[15px] md:text-[25px] leading-[30px] md:leading-[55px] tracking-[0.01em] font-normal text-center mt-2">*ההצעה יכולה להיגמר ללא התרעה מוקדמת.</p>
              <p className='text-[20px] md:text-[30px] leading-[30px] md:leading-[55px] tracking-[0.01em] font-normal max-w-[95%] mx-auto text-center mt-4'>זו ההזדמנות שלך לקחת את כל מה שיש לבינה המלאכותית להציע לעסק שלך עוד לפני שכולם שם, ולהנות מתנופה משמעותית בתקופה קריטית להצלחה שלך.</p>
        </div>
    </div>
  )
}

export default FAQ