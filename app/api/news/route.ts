import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch('https://latest-news.mygrid.app', {
      headers: {
        'Accept': 'application/json',
      },
      // Cache for 5 minutes
      next: { revalidate: 300 }
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      }
    })
  } catch (error) {
    console.error('Failed to fetch news:', error)

    // Return a fallback response instead of throwing error
    return NextResponse.json(
      {
        message: "Welcome to Grid!",
        timestamp: new Date().toISOString()
      },
      {
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
        }
      }
    )
  }
}