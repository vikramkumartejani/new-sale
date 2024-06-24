import Image from 'next/image';
import React from 'react';

const Shekel = () => {
  return (
    <div className='bg-black w-full'>
        <div className='max-w-[1920px] mx-auto w-full py-10 px-4 md:py-[212px] lg:px-[100px]'>
            {/* Box */}
            <div className='bg-[#141515] bg-opacity-60 z-40 rounded-[20px] p-6 md:px-20 max-w-[1720px] mx-auto relative'>
                <h2 className='text-rtl text-custom-color max-w-full md:max-w-[1177px] mx-auto text-[32px] md:text-[50px] lg:text-[85px] leading-[1.2] md:leading-[95px] tracking-[0.01em] text-center py-6 md:py-[72px] relative z-10'>לשכפל את עצמך פי 10 מבלי להוציא שקל על משכורות ופרילנסרים!</h2>
                <div className='absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 -bottom-[40px] md:-bottom-[60px] bg-[#141515] rounded-full z-50'>
                <Image src='/assets/arrow-hero.svg' alt='arrow' width={62} height={62} className='w-[40px] h-[40px] md:w-[62px] md:h-[62px] z-50 bg-[#141515] rounded-full cursor-pointer' />        
                </div>
            </div>
            
            {/* Content */}
            <div className='text-white text-center max-w-full md:max-w-[950px] mx-auto text-[24px] md:text-[40px] font-bold leading-[1.2] md:leading-[49px] tracking-[0.04em] mt-16 md:mt-[63px] mb-10 md:mb-[110px]'>
                <h4 className='pb-4 md:pb-8 text-rtl'>מהפכת הבינה המלאכותית מאפשרת לאנשים שלא מפחדים ללמוד דברים חדשים להתפתח בקצב של עד פי 10 מאנשים רגילים ולייצר תוצאות מדהימות.</h4>
                <h4 className='pb-4 md:pb-8 text-rtl'>נכון, ההתחלה קצת קשה, ולא תמיד ברור לנו איך זה בכלל יכול לעזור לנו?!</h4>
                <h4 className='pb-4 md:pb-8 text-rtl'>ואין ספק שלהכיר אינסוף כלים חדשים שצצים כל יום כמו פטריות אחרי הגשם - יכול להרתיע.</h4>
                <h4 className='text-rtl'>אז איך בכל זאת אפשר למנף את היכולות של בינה מלאכותית בעסק, מבלי לעשות תואר בכל כלי חדש שיוצא, ומבלי שיווצר פער שישאיר אותך מאחור? </h4>
            </div>
            <div className='text-white text-center max-w-full md:max-w-[950px] mx-auto text-[24px] md:text-[59px] font-bold leading-[1.2] md:leading-[82px] tracking-[0.04em] mt-6 md:mt-[63px] mb-10 md:mb-[167px]'>
                <h5 className='text-rtl text-[20px] md:text-[40px] pb-4'>או במלים אחרות:</h5>
                <h4 className='text-rtl pb-4 md:pb-8'>איך להינות מעצמתם של כלי ה- AI החדשים בקלות ובנוחות, ולהכפיל את העסק שלך!</h4>
                <h4 className='text-rtl'>מבלי להוציא הון עתק על עובדים ופרילנסרים.</h4>
            </div>

            {/* Box */}
            <div className='text-rtl max-w-full md:max-w-[1148px] mx-auto border-[3px] md:border-[6px] rounded-[33px] border-dashed border-[#FF5E5E] p-6 md:p-10 mb-10 md:mb-[122px]'>
                <h2 className='text-[32px] md:text-[60px] font-bold leading-[1.2] md:leading-[95px] tracking-[0.01em] text-center text-[#FFFFFF] max-w-full md:max-w-[600px] mx-auto py-6 md:py-[50px]'>אבל למה לקרוא על זה כשאפשר לנסות את זה..</h2>
                <div className='flex items-center justify-center my-6 md:my-[52px]'>
                    <div className='bg-custom-gradient w-full md:w-[514.8px] h-[88px] md:h-[128px] rounded-[90px] flex items-center justify-center relative'>
                        <button className='font-bold text-[24px] md:text-[48px] leading-[1.2] md:leading-[95px] tracking-[0.01em] text-center mr-4 md:mr-8'>ניסיון חינם!</button>
                        <div className='flex flex-col items-center justify-center absolute right-0 border border-black h-[90px] md:h-[130px] w-[90px] md:w-[133px] rounded-full'>
                            <h2 className='text-[24px] md:text-[50px] font-semibold -mt-2 md:-mt-4'>7</h2>
                            <h4 className='text-[16px] md:text-[30px] leading-[5px] tracking-[0.01em] text-center font-bold'>ימים</h4>
                        </div>
                    </div>
                </div>
                <h4 className='text-[20px] md:text-[40px] leading-[1.2] md:leading-[61px] tracking-[0.01em] text-center font-normal max-w-full md:max-w-[850px] mx-auto mb-6 md:mb-[71px]'>נרשמים ומתחילים כבר עכשיו לעבוד עם המערכת - לגמרי בחינם.</h4>
                <button className='rounded-xl w-full h-[60px] md:h-[129px] font-bold text-[20px] md:text-[36px] leading-[1.2] md:leading-[82px] tracking-[0.04em] text-center bg-[#FF4747] mb-6 md:mb-[52px]'>אני רוצה להתחיל!</button>
                <p className='text-[20px] md:text-[30px] leading-[1.2] md:leading-[55px] tracking-[0.01em] font-normal max-w-full md:max-w-[850px] mx-auto text-center'>זו ההזדמנות שלך לקחת את כל מה שיש לבינה המלאכותית להציע לעסק שלך עוד לפני שכולם שם, ולהנות מתנופה משמעותית בתקופה קריטית להצלחה שלך.</p>
            </div>
            <div className='text-rtl max-w-full md:max-w-[995px] mx-auto mb-10 md:mb-[133px]'>
                <h2 className='text-[32px] md:text-[57px] leading-[1.2] font-bold tracking-[0.04em] text-center'>זה לא סוד...</h2>
                <h4 className='text-[20px] md:text-[40px] leading-[1.2] font-normal tracking-[0.04em] text-center max-w-full md:max-w-[850px] mx-auto mt-4 md:mt-8'>שהבינה המלאכותית כבר משנה את החיים כמו שאנחנו מכירים אותם, במיוחד במגזר העסקי. </h4>
            </div>
            <div className='grid md:grid-cols-2 gap-1 grid-cols-1 max-w-full md:max-w-[1465px] mx-auto'>
                <Image src='/assets/no-secret-one.svg' alt='Its no secret' width={725} height={161} className='w-full bg-white h-full' />
                <Image src='/assets/no-secret-two.svg' alt='Its no secret' width={738} height={161} className='w-full bg-white h-full' />
                <Image src='/assets/no-secret-three.svg' alt='Its no secret' width={725} height={161} className='w-full bg-white h-full' />
                <Image src='/assets/no-secret-four.svg' alt='Its no secret' width={738} height={161} className='w-full bg-white h-full' />
            </div>
            <div className='text-rtl max-w-full md:max-w-[995px] mx-auto text-center mt-6 md:mt-[87px]'>
                <h4 className='mb-6 md:mb-10 text-[20px] md:text-[40px] leading-[1.2] md:leading-[77px] tracking-[0.04em] font-bold max-w-full md:max-w-[850px] mx-auto'>אני בטוח שזה יכול להלחיץ ואולי אפילו לאיים. אבל חשוב לזכור שבכל איום יש הזדמנות אדירה, </h4>
                <h4 className='text-[#FF4747] text-[24px] md:text-[50px] leading-[1.2] md:leading-[77px] tracking-[0.04em] font-bold'>זה הזמן שלך לאמץ את היכולות האלו ולאחוז בהזדמנות הזאת בשתי ידיים:</h4>
                <p className='mt-4 md:mt-10 text-[20px] md:text-[40px] leading-[1.2] md:leading-[77px] tracking-[0.04em] font-bold max-w-full md:max-w-[880px] mx-auto'>ביד אחת ללמוד איך למנף אותה לטובת העסק שלך וביד השניה להגשים ולקדם את עצמך ברמה האישית, כי אין סיכוי למי שישאר מאחור.</p>
            </div>
        </div>
    </div>
  );
};

export default Shekel;
