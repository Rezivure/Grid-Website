import { Link } from '@saas-ui/react'
import * as React from 'react'

const faq = {
  title: 'Frequently Asked Questions',
  description: 'Common questions about Grid.',
  items: [
    {
      q: 'How does Grid protect my privacy?',
      a: (
        <>
          Your location is encrypted on your phone before it’s sent, using the
          Matrix protocol. Only the people you’ve shared with can decrypt it.
          We can’t read it on our servers.
        </>
      ),
    },
    {
      q: 'What is Matrix and why do you use it?',
      a: (
        <>
          Matrix is an open protocol for end-to-end encrypted messaging. It’s
          the same protocol Element uses for secure chat, and it’s been
          independently audited several times. Building on Matrix means we
          don’t have to roll our own encryption.
        </>
      ),
    },
    {
      q: 'What maps does Grid use and why?',
      a: (
        <>
          Grid uses Protomaps, an open-source map renderer. We serve the tiles
          from our own infrastructure on Cloudflare, so Google and Apple never
          see where you’re looking around the map.
        </>
      ),
    },
    {
      q: 'Can I use Grid on GrapheneOS?',
      a: (
        <>
          Yes. Grid runs on GrapheneOS and other de-Googled Android devices
          with <strong>no Google Play Services</strong>. We wrote our own
          open-source location plugin,{' '}
          <Link
            href="https://github.com/Rezivure/libre-location"
            isExternal
            color="#1FD9A0"
            _hover={{ color: '#19B587' }}
          >
            libre_location
          </Link>
          , that gets GPS directly from the OS. No sandboxed Play Services or
          workarounds needed.
        </>
      ),
    },
    {
      q: 'What do I need to sign up for Grid?',
      a: (
        <>
          Just a passkey and a username. New accounts sign up with a passkey,
          no phone number or email needed. Older accounts that signed up with
          SMS verification still work, but we’re phasing that out.
        </>
      ),
    },
    {
      q: 'Can I self-host Grid?',
      a: (
        <>
          Yes. Grid runs on Matrix, so you can point the app at your own
          homeserver. The mobile app is open source on{' '}
          <Link
            href="https://github.com/Rezivure/Grid-Mobile"
            isExternal
            color="#1FD9A0"
            _hover={{ color: '#19B587' }}
          >
            GitHub
          </Link>
          . Hop in our Discord if you want help getting set up.
        </>
      ),
    },
    {
      q: 'Is Grid free to use?',
      a: (
        <>
          Yes. The core features (encrypted location sharing, unlimited groups,
          end-to-end encryption) are free. There’s an optional satellite maps
          add-on for $4.99/month if you want satellite imagery, which helps pay
          for development. Nothing else is paywalled.
        </>
      ),
    }
  ],
}

export default faq