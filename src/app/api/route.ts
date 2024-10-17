
import {NextResponse,NextRequest} from 'next/server'

export async function GET(request:NextRequest,response:NextResponse) {
    const url = new URL(request.url)
    console.log("checkurl ?>>>>>",url)
    const searchParams = new URLSearchParams(url.search)
    const fileName = searchParams.get("audio");
    console.log("checkSearchParams >>>>" ,searchParams)

    console.log("checkfileName >>>>" ,fileName)
    return await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/tracks/${fileName}`)

    
    
}

