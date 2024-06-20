import Image from 'next/image';
import React from 'react';

const AboutMyself = () => {
  return (
    <div className='text-black px-4'>
      <div className='max-w-[1465px] w-full mx-auto my-[50px] md:my-[100px] flex flex-col md:flex-row items-center'>
        <div className='max-w-full md:max-w-[643px] mx-auto mb-8 md:mb-0 md:mr-8'>
          <h2 className='text-[24px] md:text-[31px] font-bold leading-[36px] md:leading-[62px] tracking-[0.04em] text-right mb-4 md:mb-10'>
            אבל אולי כדאי שאגיד כמה מלים על עצמי..
          </h2>
          <h2 className='text-[24px] md:text-[31px] font-normal leading-[36px] md:leading-[62px] tracking-[0.04em] text-right mb-4'>
            שמי טל פלח, אני פריק של בינה מלאכותית וביחד עם הצוות הנפלא שלנו, הקמנו את יוניצ’אט:
          </h2>
          <h2 className='text-[24px] md:text-[31px] font-bold leading-[36px] md:leading-[62px] tracking-[0.04em] text-right mb-4'>
            מערכת שמאגדת את היכולות הבולטות ביותר של כלי בינה מלאכותית בצורה אנושית ופשוטה.
          </h2>
          <h2 className='text-[24px] md:text-[31px] font-normal leading-[36px] md:leading-[62px] tracking-[0.04em] text-right'>
            כבר למעלה מ- 150 אלף משתמשים הצליחו לייצר למעלה מ- 2.5 מליון משימות בפחות משנה!
          </h2>
        </div>
        <div className='w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full mx-auto'>
          <Image
            src='/assets/aboutmyself.svg'
            alt='Profile'
            width={500}
            height={500}
            className='bg-custom-gradient-one rounded-full w-full h-full'
          />
        </div>
      </div>
      <div className='max-w-full md:max-w-[995px] mx-auto text-center mb-[50px] md:mb-[110px] px-4'>
        <h2 className='text-[24px] md:text-[40px] leading-[36px] md:leading-[77px] tracking-[0.04em] font-bold mb-6 md:mb-14'>
          ואני יודע שגם העסק שלך יכול להנות מזה.
        </h2>
        <p className='text-[20px] md:text-[40px] leading-[30px] md:leading-[77px] tracking-[0.04em] font-normal mb-6'>
          איך אני יודע את זה?
        </p>
        <p className='text-[20px] md:text-[40px] leading-[30px] md:leading-[77px] tracking-[0.04em] font-normal mb-6 md:mb-14'>
          כי כבר היום למעלה מאלף עסקים בישראל משלימים עשרות אלפי משימות כל יום עם הבינה המלאכותית של יוניצ’אט, כי הם מחוברים למודלים המתקדמים ביותר שיש, ועובדים איתם ישירות דרך הווטסאפ ובכל שפה.
        </p>
        <p className='text-[20px] md:text-[40px] leading-[30px] md:leading-[77px] tracking-[0.04em] font-normal mb-6 md:mb-14'>
          בנוסף, חלקם אפילו נותנים הוראות למערכת בהודעה קולית... קלטת את זה? בזמן שהם בדרך למשרד או בדרך חזרה הם תופרים עוד ועוד משימות.
        </p>
        <h2 className='text-[24px] md:text-[40px] leading-[36px] md:leading-[77px] tracking-[0.04em] font-bold mb-6 md:mb-14'>
          בלי ללמוד כל היום על בינה מלאכותית, בלי לשלם הון תועפות על כלים או קורסים והדבר הכי יפה הוא שלא צריך שום ניסיון.
        </h2>
        <p className='text-[#B398EF] text-[20px] md:text-[40px] leading-[30px] md:leading-[77px] tracking-[0.04em] font-normal mb-6'>
          בינינו, למי יש זמן לצפות בכל הסרטונים ששמרת באינסטגרם שהיה בהם
        </p>
        <h2 className='text-[#B398EF] text-[24px] md:text-[40px] leading-[36px] md:leading-[77px] tracking-[0.04em] font-bold'>
          "טיפ שישנה לך את החיים עם בינה מלאכותית"..
        </h2>
      </div>
    </div>
  );
};

export default AboutMyself;
