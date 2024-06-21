import Image from 'next/image'
import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { BiSolidCheckCircle } from "react-icons/bi";



const Suitable = () => {
  return (
    <div className='py-[100px] text-black'>
       <div className='px-4'>
            {/* למי זה לא מתאים? */}
            <div className='text-center max-w-[1640px] mx-auto'>
                <h2 className='text-[40px] leading-[50px] md:text-[60px] md:leading-[70px] lg:text-[90px] lg:leading-[95px] tracking-[0.01em] font-bold text-black mb-[50px] md:mb-[75px] lg:mb-[100px]'>
                    ?<span>למי זה</span>  <span className='text-[#E21F1F]'>לא מתאים</span>
                </h2>
                <ul className='text-right w-full flex flex-col items-end justify-end gap-4 md:gap-6 lg:gap-10 text-[30px] leading-[40px] md:text-[45px] md:leading-[55px] lg:text-[60px] lg:leading-[70px] tracking-[0.01em]'>
                    <li className='flex items-start gap-2'>אנשים שמעדיפים לבזבז זמן על משימות חוזרות ומשעממות<RxCross2 className='text-[#FF0000] mt-2 md:mt-2 lg:mt-3 min-w-[25px] md:min-w-[50px]'/></li>
                    <li className='flex items-start gap-2'>בעלי עסקים שלא מעוניינים לצמוח ולהתפתח<RxCross2 className='text-[#FF0000] mt-2 md:mt-2 lg:mt-3 min-w-[25px] md:min-w-[50px]'/></li>
                    <li className='flex items-start gap-2'>מי שחושב שבינה מלאכותית היא רק טרנד חולף<RxCross2 className='text-[#FF0000] mt-2 md:mt-2 lg:mt-3 min-w-[25px] md:min-w-[50px]'/></li>
                    <li className='flex items-start gap-2'>מי שמעדיף לעבוד קשה יותר במקום לעבוד חכם יותר<RxCross2 className='text-[#FF0000] mt-2 md:mt-2 lg:mt-3 min-w-[25px] md:min-w-[50px]'/></li>
                </ul>
            </div>

            {/* למי זה כן מתאים? */}
            <div className='text-center max-w-[1640px] mx-auto mt-[100px] md:mt-[150px] lg:mt-[200px]'>
                <h2 className='text-[40px] leading-[50px] md:text-[60px] md:leading-[70px] lg:text-[90px] lg:leading-[95px] tracking-[0.01em] font-bold text-black mb-[50px] md:mb-[75px] lg:mb-[100px]'>
                    ?<span>למי זה</span>  <span className='text-[#26AD33]'>כן מתאים</span>
                </h2>
                <ul className='text-right w-full flex flex-col items-end justify-end gap-4 md:gap-6 lg:gap-10 text-[30px] leading-[40px] md:text-[45px] md:leading-[55px] lg:text-[60px] lg:leading-[70px] tracking-[0.01em]'>
                    <li className='flex items-start gap-2'>יזמים ובעלי עסקים שרוצים לייעל את העסק ולחסוך זמן יקר<BiSolidCheckCircle className='text-[#26AD33] mt-1 md:mt-3 lg:mt-5 text-[40px] md:text-[50px]'/></li>
                    <li className='flex items-start gap-2'>מנהלי שיווק שרוצים ליצור תוכן מעורר עניין במהירות ובקלות<BiSolidCheckCircle className='text-[#26AD33] mt-1 md:mt-3 lg:mt-5 text-[40px] md:text-[50px]'/></li>
                    <li className='flex items-start gap-2'>מנהלי מכירות שרוצים לשפר את התקשורת עם לקוחות<BiSolidCheckCircle className='text-[#26AD33] mt-1 md:mt-3 lg:mt-5 text-[40px] md:text-[50px]'/></li>
                    <li className='flex items-start gap-2'>מעצבים שרוצים רעיונות חדשים ומשוב מיידי על עבודתם<BiSolidCheckCircle className='text-[#26AD33] mt-1 md:mt-3 lg:mt-5 text-[40px] md:text-[50px]'/></li>
                    <li className='flex items-start gap-2'>כל מי שרוצה לנצל את הכוח של בינה מלאכותית<BiSolidCheckCircle className='text-[#26AD33] mt-1 md:mt-3 lg:mt-5 text-[40px] md:text-[50px]'/></li>
                </ul>
            </div>

            {/* BOX */}
            <h2 className='text-[40px] leading-[50px] md:text-[50px] md:leading-[60px] lg:text-[70px] lg:leading-[95px] tracking-[0.01em] text-center font-bold mb-8 md:mb-12 lg:mb-16 max-w-[1274px] mx-auto mt-[100px] md:mt-[150px] lg:mt-[200px]'>
                אם מצאת את עצמך בקבוצה השניה 
            </h2>
            <p className='text-[30px] leading-[40px] md:text-[40px] md:leading-[50px] lg:text-[70px] lg:leading-[95px] tracking-[0.01em] text-center font-normal lg:px-20 max-w-[1274px] mx-auto'>
                (וסביר להניח שכן, אחרת לא היית פה), אז יוניצ'אט היא הפתרון המושלם עבורך.
            </p>
            <div className='max-w-[1173px] mx-auto border-[6px] rounded-[33px] border-dashed border-[#FF5E5E] p-5 md:p-10 mt-[103px]'>
                <h2 className='text-[40px] md:text-[60px] font-bold leading-[60px] md:leading-[95px] tracking-[0.01em] text-center text-black '>מתחילים עכשיו!</h2>
                <p className='text-[30px] md:text-[40px] leading-[40px] md:leading-[60px] text-center font-normal mt-4 md:mt-6 max-w-[850px] mx-auto'>לוחצים על הכפתור, ממלאים פרטים, מאשרים תשלום, ולא נשארים מאחור.</p>
                <div className='flex flex-col md:flex-row items-center justify-center gap-5 md:gap-24 max-w-[95%] mx-auto my-4 md:my-[70px]'>
                    <Image src='/assets/arrow-down.svg' alt="Icons" width={50} height={83} className='mx-auto md:mx-0' />
                    <div className='bg-custom-gradient w-full md:w-[514.8px] h-[90px] md:h-[128px] rounded-[90px] flex items-center justify-center relative'>
                        <button className='text-white font-bold text-[24px] md:text-[48px] leading-[1.2] md:leading-[95px] tracking-[0.01em] text-center mr-8'>ניסיון חינם!</button>
                        <div className='text-white flex flex-col items-center justify-center absolute right-0 border border-black h-[90px] md:h-[130px] w-[90px] md:w-[133px] rounded-full'>
                            <h2 className='text-[24px] md:text-[50px] font-semibold -mt-2 md:-mt-4'>7</h2>
                            <h4 className='text-[16px] md:text-[30px] leading-[5px] tracking-[0.01em] text-center font-bold'>ימים</h4>
                        </div>
                    </div>
                    <Image src='/assets/arrow-down.svg' alt="Icons" width={50} height={83} className='mx-auto md:mx-0' />
                </div>
                <button className='text-white rounded-xl w-full h-[70px] md:h-[115px] font-bold text-[20px] md:text-[36px] leading-[60px] md:leading-[82px] tracking-[0.04em] text-center bg-[#FF4747] mb-2 md:mb-[40px]'>רוצה להתחיל עכשיו</button>
                <Image src='/assets/cards.svg' alt="Cards" width={400} height={40} className="text-center md:max-w-[400px] mx-auto my-6" />
            </div>
       </div>
    </div>
  )
}

export default Suitable