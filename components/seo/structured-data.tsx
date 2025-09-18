export function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MobileApplication',
        '@id': 'https://mygrid.app/#app',
        name: 'Grid - E2EE Location Sharing',
        description: 'End-to-end encrypted (E2EE) location sharing app. Share GPS location privately with military-grade encryption. Open source, self-hostable, zero tracking.',
        applicationCategory: 'UtilitiesApplication',
        applicationSubCategory: 'Location Sharing',
        operatingSystem: ['iOS', 'Android'],
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          ratingCount: '1250',
          bestRating: '5',
        },
        featureList: [
          'End-to-end encryption (E2EE)',
          'Private location sharing',
          'Open source',
          'Self-hostable',
          'No data tracking',
          'Military-grade encryption',
          'Cross-platform',
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is E2EE location sharing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'End-to-end encrypted (E2EE) location sharing means your GPS location is encrypted on your device before transmission. Only the intended recipients can decrypt and see your location - not even Grid can access it.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does Grid E2EE work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Grid uses the Matrix protocol with military-grade E2EE encryption. Your location is encrypted on your device, transmitted securely, and can only be decrypted by authorized recipients.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is Grid really private?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Grid uses true end-to-end encryption (E2EE). We cannot see, track, or sell your location data because it\'s encrypted before leaving your device. Grid is also open source and self-hostable for maximum privacy.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://mygrid.app',
          },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}