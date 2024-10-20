import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";

const testimonials = [
  {
    text: "Stress-free package delivery",
    imageSrc: avatar1.src,
    name: "Universities",
    avatarImg: avatar1
  },
  {
    text: "Stress-free package delivery",
    imageSrc: avatar2.src,
    name: "Residential Settings",
    avatarImg: avatar2
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl text-center tracking-tighter font-bold">Solutions</h2>
        <p className="text-black text-lg md:text-xl text-center mt-5 tracking-tight max-w-sm mx-auto">
          Here we present possible use cases of our smart parcel lockers.
        </p>
        <div className="overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_80%,transparent)]">
          <div className="flex gap-5">
            {testimonials.map(testimonial => (
              <div 
                key={testimonial.name} 
                className="border border-black/1 p-6 md:p-10 rounded-xl max-w-xs md:max-w-md flex-none relative"
                style={{
                  backgroundImage: `url(${testimonial.avatarImg.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  color: '#fff',
                  height: '300px' // Adjust the height as needed
                }}
              >
                <div className="absolute inset-0 bg-[rgba(140,69,244,0.5)] mix-blend-soft-light rounded-xl" />
                <div className="relative z-10 flex flex-col justify-center h-full">
                  <h3 className="text-2xl font-semibold">{testimonial.name}</h3> {/* Increased font size */}
                  <div className="mt-4 text-lg tracking-tight"> {/* Increased margin for spacing */}
                    {testimonial.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
