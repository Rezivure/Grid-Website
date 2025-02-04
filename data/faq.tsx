import * as React from 'react'

const faq = {
  title: 'Frequently Asked Questions',
  description: 'Learn more about Grid, our privacy-focused location sharing app',
  items: [
    {
      q: 'How does Grid protect my privacy?',
      a: (
        <>
          Grid uses end-to-end encryption (E2EE) through Matrix, a secure 
          communication protocol. This means your location data is encrypted before it leaves 
          your device and can only be decrypted by the intended recipients. No one else, 
          including us, can access your location data.
        </>
      ),
    },
    {
      q: 'What is Matrix and why do you use it?',
      a: (
        <>
          Matrix is an open protocol for secure communication. We chose Matrix for its 
          robust end-to-end encryption that comes built-in. It's open source, extensively 
          audited, and has a proven track record for secure communications. Using Matrix 
          allows us to focus on building features while ensuring your data remains private 
          and secure.
        </>
      ),
    },
    {
      q: 'What maps does Grid use and why?',
      a: (
        <>
          Grid uses Protomaps, an open-source alternative to Google and Apple Maps. 
          We chose Protomaps because it provides excellent map data while respecting 
          user privacy - no tracking, no third-party servers, and full control over 
          your location data. This aligns with our commitment to privacy while still 
          providing high-quality mapping services.
        </>
      ),
    },
    {
      q: 'Can I use Grid on GrapheneOS?',
      a: (
        <>
          Currently, Grid requires Google Play Services for location functionality. 
          However, we're actively working on removing this dependency to better align 
          with our privacy-focused vision and to support privacy-conscious operating 
          systems like GrapheneOS. We'll announce when this update is available - 
          making Grid fully compatible with de-Googled devices is a priority for us.
        </>
      ),
    },
    {
      q: 'What do I need to sign up for Grid?',
      a: (
        <>
          Grid only requires a phone number for initial verification. This is used 
          solely to prevent spam and create a secure account - your phone number is 
          never shared with other users or third parties. After verification, all 
          communication happens through encrypted Matrix channels, maintaining your 
          privacy.
        </>
      ),
    },
    {
      q: 'Can I self-host Grid?',
      a: (
        <>
          Yes! While Grid works by default with our servers using SMS verification, 
          you can self-host your own instance. Check our documentation for detailed 
          self-hosting instructions and best practices.
        </>
      ),
    }
  ],
}

export default faq