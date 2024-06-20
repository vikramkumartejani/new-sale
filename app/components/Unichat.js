import Image from 'next/image'
import React from 'react'

const Unichat = () => {
  const benefits = [
    {
      id: 1,
      title: 'כל מה שצריך למדיה החברתית',
      description: 'אינסטגרם, פייסבוק, טוויטר, טיקטוק ועוד.. טסקטים מדהימים בכל שפה, כולל תמונות מותאמות אישית בכל הגדלים בתוך כמה דקות',
      imgSrc: '/assets/unichat-img.svg',
    },
   {
    id: 2,
    title: 'יועץ עסקי שכבר מכיר את העסק שלך',
    description: 'יועץ עסקי שחי את העסק שלך,  שמכיר את המודלים העסקיים המתקדמים והחדשיים ביותר בעולם זמין לשרותך 24-7',
    imgSrc: '/assets/unichat-img.svg',
   },
   {
    id: 3,
    title: 'מומחה לשיווק שחי את היעדים שלך',
    description: 'איש השיווק המושלם, שיעזור לך לבנות בנק תכנים, ילמד את המתחרים שלך ויקדם אותך במנועי חיפוש',
    imgSrc: '/assets/unichat-img.svg',
   },
   {
    id: 4,
    title: 'מנהל המוצר המושלם',
    description: 'רוצה להוסיף מוצר חדש לעסק שלך, או לפתח מוצר קיים וצריך עזרה בקביעת המחיר, או אפיון ועיצוב המוצר? יש לך את העוזר המושלם.',
    imgSrc: '/assets/unichat-img.svg',
   },
   {
    id: 5,
    title: 'לנתח את המתחרים שלך, ולהתעלות עליהם',
    description: 'בדיוק כמו שהמערכת יכולה ללמוד את העסק שלך, היא יכולה ללמוד את המתחרים שלך, לאפיין אותם ולבדל אותך בצורה שתביא אותך להוביל.',
    imgSrc: '/assets/unichat-img.svg',
   },
   {
    id: 6,
    title: 'כל שירותי המשרד..',
    description: 'מהצעת מחיר, דרך הזמנת עבודה עד לניתוח חוזים וניסוח מיילים בכל השפות - יש לך את מנהלת המשרד המושלמת לצידך - לכל צורך.',
    imgSrc: '/assets/unichat-img.svg',
   },
   {
    id: 7,
    title: 'סטודיו לעיצוב - זמין רק לך!',
    description: 'החל מלוגו ועד לבאנרים מכל הסוגים, המערכת מייצרת עבורך בהתאמה אישית עיצובים לכל צורך, תוך כמה דק.',
    imgSrc: '/assets/unichat-img.svg',
   },
   {
    id: 8,
    title: 'מישהו שעוזר לך במכירות',
    description: 'לכתוב ולשפר תסריטי שיחה, לעבור על יעדים, למדוד הצלחה במכירות, לקבל משוב על הצלחות וכשלונות - והכל בזמן אמת.',
    imgSrc: '/assets/unichat-img.svg',
   },
   {
    id: 9,
    title: 'ועוד אינספור אפשרויות...',
    description: 'יוניצ’אט היא מערכת שמתפתחת בכל יום כדי לענות על כל הצרכים של העסק שלך, בכל שלב של העסק בצורה אופטימלית.',
    imgSrc: '/assets/unichat-img.svg',
   },
  ];

  const benefitsbouns = [
    {
      id: 10,
      title:'טיפים ועצות בשוטף ',
      description: 'קבוצה עם בעלי עסקים כמוך ובה עדכונים וטיפים לשימוש במערכת ובכלים.',
      imgSrc: '/assets/unichat-img.svg',
    },
    {
      id: 11,
      title:'עדכונים בלי הפסקה',
      description: 'ככל שיוצאים מודלים מתקדמים יותר, איתם משתדרגת המערכת עבורך מבלי להוסיף במחיר.',
      imgSrc: '/assets/unichat-img.svg',
    },
  ]

  return (
    <div className='bg-[#B398EF] relative mx-auto mt-[200px]'>
    <Image
      src='/assets/unichat.svg'
      alt='UniChat Logo'
      width={257}
      height={250}
      className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
    />
    <div className='pt-[150px] pb-[100px] md:pt-[200px] md:pb-[150px] text-center max-w-[1300px] mx-auto px-4'>
      <h2 className='font-bold text-[32px] sm:text-[36px] md:text-[85px] leading-[40px] md:leading-[95px] tracking-[0.01em]'>
        ברוכים הבאים ליוניצ’אט!
      </h2>
      <div className='flex justify-end items-end flex-col'>
        <h2 className='mt-[20px] md:mt-[34px] text-[20px] sm:text-[24px] md:text-[40px] leading-[35px] md:leading-[60px] tracking-[0.01em] text-right border-b border-white'>
          אז מה בתכל’ס יוצא לך ממנוי למערכת?
        </h2>
      </div>
      <div className='mt-[50px] md:mt-[144px] flex flex-col gap-[30px] md:gap-[60px]'>
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className='border border-black rounded-[20px] p-5 bg-white flex flex-col md:flex-row items-center justify-between gap-5 max-w-[1300px] mx-auto'
          >
            <div className='relative'>
              <Image
                src={benefit.imgSrc}
                alt='Logo'
                width={242}
                height={242}
                className='min-w-[100px] min-h-[100px] md:min-w-[242px] md:min-h-[242px]'
              />
              <span className='absolute left-2 md:left-6 bottom-[-10px] text-black text-[20px] md:text-[36px] leading-[40px] md:leading-[95px] tracking-[0.01em] font-bold'>
                {benefit.id}
              </span>
            </div>
            <div className='text-black lg:pr-[50px] md:pr-[100px]'>
              <div className='flex justify-end gap-3 mb-2'>
                <h2 className='text-[20px] sm:text-[24px] md:text-[35px] leading-[35px] md:leading-[50px] tracking-[0.01em] font-bold text-right'>
                  {benefit.title}
                </h2>
                <h3 className='text-[20px] sm:text-[24px] md:text-[35px] leading-[35px] md:leading-[50px] tracking-[0.01em] font-bold text-right'>
                  .{benefit.id}
                </h3>
              </div>
              <p className='text-[15px] sm:text-[18px] md:text-[28px] leading-[25px] md:leading-[36px] tracking-[0.01em] text-right font-bold'>
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2 className='text-[36px] md:text-[85px] leading-[40px] md:leading-[95px] tracking-[0.01em] font-bold my-[30px] md:my-[60px]'>
          + בונוסים:
        </h2>
        {/* Bonuses */}
        <div className='flex flex-col md:flex-row max-w-[1300px] mx-auto gap-[20px] md:gap-[34px]'>
          {benefitsbouns.map((benefitb) => (
            <div
              key={benefitb.id}
              className='border border-black rounded-[20px] p-5 bg-white flex items-center flex-col justify-between gap-5 flex-1'
            >
              <div className='flex flex-col md:flex-row justify-between items-center w-full'>
                <div className='relative'>
                  <Image
                    src={benefitb.imgSrc}
                    alt='Logo'
                    width={112}
                    height={112}
                    className='min-w-[100px] min-h-[100px] md:min-w-[112px] md:min-h-[112px]'
                  />
                  <span className='absolute left-2 bottom-[5px] text-black text-[15px] md:text-[20px] tracking-[0.01em] font-bold'>
                    {benefitb.id}
                  </span>
                </div>
                <h2 className='text-[24px] md:text-[35px] leading-[35px] md:leading-[50px] tracking-[0.01em] font-bold text-right text-black mt-5 md:mt-0'>
                  {benefitb.title}
                </h2>
              </div>
              <p className='text-[18px] md:text-[28px] leading-[25px] md:leading-[36px] tracking-[0.01em] text-right font-bold text-black'>
                {benefitb.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <p className='text-[18px] md:text-[40px] leading-[20px] md:leading-[42px] tracking-[0.01em] font-normal text-center mt-[30px] md:mt-[60px] max-w-[1177px] mx-auto'>
        בכל יום בערך עולם הבינה המלאכותית מתעדכן, והמערכת שלנו מתעדכנת איתו. אנחנו מחויבים לאפשר לך חיבור מהיר, פשוט ויעיל לכל היכולות הבולטות של הבינה המלאכותית - במקום שהכי נח לך להשתמש בהן - בווטסאפ, באפליקציה ובאתר.
      </p>
      <button className='sm:w-[512px] w-full min-h-[60px] md:min-h-[115px] bg-[#231154] mt-[50px] md:mt-[100px] text-[24px] md:text-[36px] leading-[40px] md:leading-[82px] tracking-[0.04em] font-bold text-center rounded-xl'>
        אני רוצה להתחיל!
      </button>
    </div>
  </div>
  );
}

export default Unichat
