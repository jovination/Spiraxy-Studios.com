import { Palette, Search, ShoppingCart, Repeat } from 'lucide-react';


const services = [
  {
    title: "Custom Website",
    description: "We prioritize aesthetics and functionality to create a site that speaks to your customers.",
    icon: Palette
  },
  {
    title: "SEO & Mobile Optimization",
    description: "Your site will look great and perform even better on any device, making sure your customers can always find you.",
    icon: Search
  },
  {
    title: "E-Commerce Solutions",
    description: "Ready to sell online? We’ll set up a smooth, hassle-free shopping experience for your customers.",
    icon: ShoppingCart
  },
 
];

const ServiceCard = ({ icon: Icon, title, description }) => {
    
  return (
    <div className="p-8 bg-white rounded-3xl  h-[260px]">
      <div className="space-y-4">
        <div className="w-12 h-12 flex items-center justify-center">
          <Icon className="w-8 h-8 text-gray-500" strokeWidth={1.5} />
        </div>
        <h3 className="text-2xl font-medium w-full">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};


function ServicesSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-[--background]">
      <div className="container px-2 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
            Solutions That Elevate Your Business
          </h2>
          <p className="text-lg text-gray-600 max-w-[800px]">
            We don't just design websites — we craft digital experiences that captivate your audience and convert visitors into customers. 
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;