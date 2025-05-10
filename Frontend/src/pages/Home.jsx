import React from 'react'
import SecondSection from '../components/SecondSection'
import Searchbar from '../components/Searchbar'
import Card from '../components/Card'

function Home() {
  return (
    <>
      <div className="relative h-[100vh] w-full flex flex-col gap-4 items-center justify-center overflow-hidden">
        
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="kodex1213-UsskE-vv55E-unsplash.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-90 blur-md"
          />
          <div className="absolute inset-0 bg-blue-200 opacity-30"></div> 
        </div>

        {/* Content Layer */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white font-bold text-5xl drop-shadow-lg">
            "Your City Has Secrets. Let’s Discover Them."
          </h1>
          <p className="mt-4 font-semibold text-white drop-shadow-md">
            "Uncover the unseen. Discover nature’s hidden stories in your own city — gardens, peaceful places, and secret escapes await."
          </p>
        </div>
        <Searchbar/>
      </div>
      <div className=" relative h-[100vh] w-full bg-white">
          <div className=" w-full text-center">
             <p className="text-black font-bold text-4xl p-4">Explore Top Destination</p>
          </div>
          <div className="absolute flex flex-row gap-4 p-15">
            <Card image="bhedhagat.jpeg" tittle="Bhedhaghat" description="Bhedaghat is a scenic spot near Jabalpur, known for its stunning Marble Rocks and the roaring Dhuandhar Falls. A boat ride on the Narmada River offers a magical view of the glowing marble cliffs."/>
            <Card image="nidan.jpg" tittle="Nidaan" description="Nidan Waterfall, also known as Katangi Falls, cascades over 100 feet amidst striking black rock formations. This hidden gem near Jabalpur is perfect for monsoon treks and nature photography." />
            <Card image="payli.jpg" tittle="Payli" description="Payli is a serene village nestled by the backwaters of Bargi Dam, offering tranquil landscapes and a haven for nature enthusiasts. It's an ideal spot for eco-tourism, adventure activities, and peaceful retreats. "/>
          </div>
      </div>

      <SecondSection />

     
    </>
  )
}

export default Home
