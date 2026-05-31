export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="../public/hairbar.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Left Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/45 to-transparent"></div>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="w-full pl-4 md:pl-8 lg:pl-12 pr-8 lg:pr-20">

          <div className="flex items-center">

            {/* Vertical Text */}
            <div className="flex items-center mr-8 lg:mr-10">
              <h2
                className="
                  text-white
                  text-4xl
                  lg:text-6xl
                  font-bold
                  rotate-[-90deg]
                  whitespace-nowrap
                "
              >
                the
              </h2>

              <div className="w-[2px] h-24 lg:h-32 bg-white ml-8"></div>
            </div>

            {/* Main Content */}
            <div className="relative w-[52%]">

              {/* HAIRBAR */}
              <h1
                className="
                  text-white
                  uppercase
                  leading-[0.9]
                  tracking-tight
                  text-[100px]
                  md:text-[135px]
                  lg:text-[170px]
                  xl:text-[190px]
                  font-black
                "
                style={{
                  fontFamily: "Archivo Black, sans-serif",
                }}
              >
                HAIRBA
              </h1>

              {/* Subtitle */}
              <p
                className="
                  text-white
                  mt-2
                  text-lg
                  md:text-2xl
                  lg:text-[38px]
                  font-light
                "
              >
                A Luxury Salon Initiative
              </p>

              {/* Badge */}
              <div
                className="
                  absolute
                  right-[-220px]
                  bottom-[-2px]
                  bg-[#E4A861]
                  px-8
                  lg:px-14
                  py-3
                  lg:py-4
                  shadow-xl
                "
              >
                <h3
                  className="
                    text-white
                    italic
                    whitespace-nowrap
                    text-2xl
                    md:text-3xl
                    lg:text-4xl
                    leading-none
                  "
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                  }}
                >
                  Care Of Your Hair
                </h3>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}