
import TypingAnimation from '@/components/ui/typing-animation';
import BlurIn from '@/components/ui/blur-in';
import Contact_cv from '@/components/contact-cv/contact_cv';


const Headline = () => {
  return (
    <div className="flex flex-col  relative ">
      <div className="mt-[15%] ml-[10%] ">
        <div className=" font-extrabold">
          <BlurIn word="Hola! Soy Matías Videla" />
        </div>
        <div className="mt-4 flex-col gap-3 ">
          <div className="flex gap-4">
            <p className="text-[30px] ">Soy un desarrollador</p>
            <TypingAnimation
              className="text-[30px] text-blueA-100 underline"
              text="Full Stack"
            />
          </div>
          <div>
            <p className="text-[30px] ">apasionado por el mundo IT</p>
          </div>
        </div>
        <div className="mt-8">
          <Contact_cv />
        </div>
      </div>
    </div>
  );
};

export default Headline;
