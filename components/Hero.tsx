import Image from 'next/image'
import GetStartedButton from '../components/get-started-button'
import illustration1 from  '../images/illustration1.png'
import illustration2 from  '../images/illustration2.png'
import illustration3 from  '../images/illustration3.png'



function Hero(){
    return(
        <div>
            <section className="w-full h-[450px] md:h-[508px] lg:h-[528px] bg-[--charcoal] rounded-[32px] mt-10">
            <div className="w-full flex items-end md:items-center h-full p-4 md:p-8 lg:p-10">
        <div className="flex    flex-col space-y-6 p-4 md:p-6 lg:p-8">
        <h1 
  className="text-4xl md:text-5xl lg:text-6xl font-medium text-white   w-[250px]  md:w-[600px] lg:w-[800px]  ">
  We Build Custom Websites for Your Business.
</h1>


          <p className="text md:text-lg text-[--gray-faded] font-normal max-w-2xl">
          Let us create a modern, high-converting website that reflects your brand and drives action. Don’t let an outdated website hold you back.            </p>
          <div className="mt-4 lg:mt-6 md:w-[250px]">
            <GetStartedButton />
          </div>
        </div>
        <figure className='absolute top-32 right-10 md:right-24 lg:right-64 w-[120px] md:w-[170px] lg:w-[177px]'>
          <Image
          src={illustration2}
          className="filter brightness-125"

          alt = "illustration 2"
           />
        </figure>
        <figure className=' hidden md:flex absolute top-80 right-10 md:right-0 lg:right-8 w-[120px] md:w-[170px] lg:w-[188px]'>
          <Image
          src={illustration3}
          className="filter brightness-155"
          alt = "illustration 3"
           />
        </figure>
        <figure className='absolute hidden  lg:flex md:bottom-[-45px] lg:bottom-[-45px] right-10 md:right-24 lg:right-72 w-[120px] md:w-[160px] lg:w-[280px]'>
          <Image
          src={illustration1}
          className="filter brightness-155"
          alt = "illustration 3"
           />
        </figure>
      </div>
         </section>
        </div>   

    );
}
export default Hero;