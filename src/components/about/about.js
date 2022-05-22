const About=()=>{
    return(
        <>
        <div className="w-full h-screen  bg-[#2c0030]">
            <div className="flex justify-start items-start px-12 flex-col w-full h-full lg:justify-center lg:items-center">
                <div>
                <span className="text-slate-50 text-3xl border-b-4 border-[#f7ad94]">ABOUT</span>
            </div>
            <div className="lg:max-w-[1000px] w-full lg:grid lg:grid-cols-2 lg:mt-10 lg:gap-8">
            <div>
                <h1 className="text-3xl text-slate-200 mt-[30px]">Hi. I'm Rida, nice to meet you. Please take a look around.</h1>

            </div>
            <div>
                <p className="text-base text-slate-200 mt-[30px]">I am a MERN Stack web developer with 2 years of experience. I can make responsive websites using HTML,CSS ,bootstrap, materialize css, javascript ,React js, nodejs and mongodb. My aim has always been to build responsive ,professional and user friendly websites .</p>
            </div>
            </div>
            </div>

        </div>
        </>
    )
}
export default About;