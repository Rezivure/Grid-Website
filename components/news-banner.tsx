'use client'

import { useState, useEffect } from 'react'
import { Box, HStack, Text, IconButton, Container } from '@chakra-ui/react'
import { FiX } from 'react-icons/fi'

interface NewsData {
  message: string
  timestamp: string
}

function getTimeAgo(timestamp: string): string {
  const now = new Date()
  const then = new Date(timestamp)
  const diffInSeconds = Math.floor((now.getTime() - then.getTime()) / 1000)
  
  if (diffInSeconds < 60) {
    return `${diffInSeconds} second${diffInSeconds !== 1 ? 's' : ''} ago`
  }
  
  const diffInMinutes = Math.floor(diffInSeconds / 60)
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes !== 1 ? 's' : ''} ago`
  }
  
  const diffInHours = Math.floor(diffInMinutes / 60)
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`
  }
  
  const diffInDays = Math.floor(diffInHours / 24)
  if (diffInDays < 30) {
    return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`
  }
  
  const diffInMonths = Math.floor(diffInDays / 30)
  return `${diffInMonths} month${diffInMonths !== 1 ? 's' : ''} ago`
}

export default function NewsBanner() {
  const [newsData, setNewsData] = useState<NewsData | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [timeAgo, setTimeAgo] = useState('')

  useEffect(() => {
    // Check if banner was previously closed in this session
    const closedAt = sessionStorage.getItem('newsBannerClosedAt')
    const closedMessage = sessionStorage.getItem('newsBannerClosedMessage')

    // Fetch news data from local API route
    fetch('/api/news')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        return res.json()
      })
      .then((data: NewsData) => {
        setNewsData(data)
        
        // Show banner if it's a new message or wasn't closed
        if (!closedAt || closedMessage !== data.message) {
          setIsVisible(true)
        }
        
        // Set initial time ago
        setTimeAgo(getTimeAgo(data.timestamp))
      })
      .catch(err => {
        console.error('Failed to fetch news:', err)
        // Always show fallback data for now to ensure banner works
        const fallbackData = {
          message: "🚀 Check out our new discord!",
          timestamp: new Date().toISOString()
        }
        setNewsData(fallbackData)
        if (!closedAt || closedMessage !== fallbackData.message) {
          setIsVisible(true)
        }
        setTimeAgo(getTimeAgo(fallbackData.timestamp))
      })
  }, [])

  // Update time ago every minute
  useEffect(() => {
    if (!newsData) return
    
    const interval = setInterval(() => {
      setTimeAgo(getTimeAgo(newsData.timestamp))
    }, 60000) // Update every minute
    
    return () => clearInterval(interval)
  }, [newsData])

  const handleClose = () => {
    setIsVisible(false)
    if (newsData) {
      sessionStorage.setItem('newsBannerClosedAt', new Date().toISOString())
      sessionStorage.setItem('newsBannerClosedMessage', newsData.message)
    }
  }

  if (!isVisible || !newsData) return null

  return (
    <Container maxW="container.xl" px={{ base: 2, md: 4 }}>
      <HStack justify="center" py={2}>
        <Box
          bg="rgba(107, 114, 128, 0.5)"
          _dark={{ bg: "rgba(107, 114, 128, 0.5)" }}
          backdropFilter="blur(4px)"
          borderRadius="full"
          px={{ base: 3, sm: 4 }}
          py={{ base: 1.5, sm: 2 }}
          display="inline-flex"
          alignItems="center"
          gap={2}
          boxShadow="sm"
          maxW={{ base: '95%', sm: 'auto' }}
        >
          <Text
            fontSize={{ base: 'xs', sm: 'sm' }}
            fontWeight="medium"
            color="white"
          >
            {newsData.message}
          </Text>
          <IconButton
            aria-label="Close"
            icon={<FiX />}
            size="xs"
            variant="ghost"
            color="gray.400"
            _hover={{
              bg: 'whiteAlpha.100'
            }}
            onClick={handleClose}
            minW={4}
            h={4}
            p={0}
            flexShrink={0}
          />
        </Box>
      </HStack>
    </Container>
  )
}