import Image from 'next/image'
import React from 'react'


const FAQ = () => {
  return (
    <div className='bg-black pt-[142px] pb-[75px]'>
        <div className='max-w-[1015px] mx-auto border-[6px] rounded-[33px] border-dashed border-[#FF5E5E] p-5 md:p-10'>
                <h2 className='text-[40px] md:text-[60px] font-bold leading-[60px] md:leading-[95px] tracking-[0.01em] text-center text-[#FFFFFF]'>למקרה ששאלת..</h2>
                {/* FAQ */}
                <div>
                    
                </div>

                <p className='text-[30px] md:text-[40px] leading-[40px] md:leading-[60px] text-center font-normal mt-4 md:mt-6'>אם יש לך שאלות נוספות, אפשר לדבר איתי ישירות דרך הווטסאפ (המספר נשלח אחרי שמתחילים לעבוד עם המערכת), באמת שאין סיבה לא להתחיל..</p>
                <div className='flex flex-col md:flex-row items-center justify-between max-w-[95%] gap-[30px] mx-auto my-4 md:my-[70px]'>
                    <Image src='/assets/arrow-down.svg' alt="Icons" width={50} height={83} className='mx-auto md:mx-0' />
                    <div className='bg-custom-gradient w-full md:w-[514.8px] h-[88px] md:h-[128px] rounded-[90px] flex items-center justify-center relative'>
                        <button className='font-bold text-[24px] md:text-[48px] leading-[1.2] md:leading-[95px] tracking-[0.01em] text-center mr-4 md:mr-8'>ניסיון חינם!</button>
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