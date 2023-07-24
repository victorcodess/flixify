import React from 'react'
import TrendingCard from './TrendingCard'
import RegularCard from './RegularCard'

const Recommended = () => {
  return (
    <div className="flex flex-col items-start justify-center w-full gap-[16px] sm:gap-[25px] mt-[24px] mb-[61px] sm:mt-[34px] px-5">

      <h1 className="text-white text-[20px] sm:text-[32px] font-light">
        Recommended for you
      </h1>
      {/* <div></div> */}
      <div className="grid w-[100%]  grid-cols-2 grid-rows-1 place-content-center place-items-center gap-x-4 gap-y-4 sm:grid-cols-3 lg:grid-cols-4">
       <RegularCard/>
       <RegularCard/>
       <RegularCard/>
       <RegularCard/>
       <RegularCard/>
       <RegularCard/>
       <RegularCard/>
       <RegularCard/>
       <RegularCard/>
       <RegularCard/>
       <RegularCard/>
       <RegularCard/>
       <RegularCard/>
       <RegularCard/>
       <RegularCard/>
       <RegularCard/>
       <RegularCard/>
       <RegularCard/>
       <RegularCard/>
       <RegularCard/>
       <RegularCard/>
       <RegularCard/>
       <RegularCard/>
       <RegularCard/>
      </div>
    </div>
  )
}

export default Recommended