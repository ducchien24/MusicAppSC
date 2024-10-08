import React, { useEffect, useState } from 'react'

export  const useHasMounted = () => {
    const [isClient,setIsClient]= useState<boolean>(false)
    useEffect(() => {
        setIsClient(true)
    },[])
  return isClient
}

