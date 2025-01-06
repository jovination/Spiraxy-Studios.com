
import GetStartedButton from '../components/get-started-button'

function Hero(){
    return(
        <div>
            <section className="w-full h-[368px] md:h-[508px] lg:h-[528px] bg-[--charcoal] rounded-[32px] mt-10">
            <div className="w-full flex items-end md:items-center h-full p-4 md:p-8 lg:p-10">
        <div className="flex    flex-col space-y-6 p-4 md:p-6 lg:p-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white">
            We Building Custom <br /> Website for Business
          </h1>
          <p className="text md:text-lg text-[--gray-faded] font-normal max-w-2xl">
            Streamline operations, drive growth, and empower your business with tailored solutions.
          </p>
          <div className="mt-4 lg:mt-6 md:w-[190px]">
            <GetStartedButton />
          </div>
        </div>
      </div>
         </section>
        </div>   

    );
}
export default Hero;