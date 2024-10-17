'use client'
import React from 'react'
import {useSearchParams} from 'next/navigation'
import WaveTrack from '@/components/track/wave.track'
const DetailTrackPage = ({params}:{params: {plug:string} }) => {
  const searckParam=useSearchParams()
  const param=searckParam.get("audio")
    // console.log("checkslug",param)
  return (
   <div>
    TrackPage
    <div>
    <WaveTrack></WaveTrack>
    </div>
   </div>
  )
}

export default DetailTrackPage