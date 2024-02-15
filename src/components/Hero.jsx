import { homeImage } from "../assets"

const Hero = () => {
  return (
    <section className="h-[calc(100vh-60px)] min-h-[600px] px-[5%] grid place-content-center gap-6 md:flex md:justify-center md:items-center">
      <div className="flex flex-col gap-2">
        <p className="text-3xl text-secondaryBlack font-semibold">Hello,</p>
        <h1 className="text-3xl font-bold">I am <span className="text-purple-600">Varun Salat</span></h1>
        <h2 className="text-secondaryBlack mb-4">Dedicated to building dynamic web applications with React, merging creativity and technical expertise to deliver seamless solutions</h2>
        <a href="#" className="px-2 py-1 md:text-xl md:font-semibold shadow-md hover:shadow-xl transition-all duration-300 bg-primary text-white w-fit rounded-md ">Resume</a>
      </div>
      <figure>
        <img src={homeImage} alt="varun salat" />
      </figure>
    </section>
  )
}

export default Hero
