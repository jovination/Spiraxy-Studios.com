
import GetStartedButton from '../components/get-started-button'

function Hero(){
    return(
        <div>
            <section className="w-full h-[528px] bg-[--charcoal] rounded-[32px] mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-[65%_1fr] w-full h-full p-4 md:p-8 lg:p-10">
        <div className="flex justify-end md:justify-center flex-col space-y-6 p-4 md:p-6 lg:p-8">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-medium text-white">
            We Building Custom Website for Business
          </h1>
          <p className="text md:text-lg text-[--gray-faded] font-normal max-w-2xl">
            Streamline operations, drive growth, and empower your business with tailored solutions.
          </p>
          <div className="mt-4 lg:mt-6 md:w-[190px]">
            <GetStartedButton />
          </div>
        </div>
        <div className="hidden  md:flex"></div>
      </div>
         </section>
        </div>   

    );
}
export default Hero;