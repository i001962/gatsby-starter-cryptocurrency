import React, {Fragment} from 'react'
import {STATUSES} from '../components/schema/schemaHelpers'

export const schemaConfig = {
  title: (
    <Fragment>
      The Catalyst Network <strong>Roadmap</strong>
    </Fragment>
  ),
  theme: 'theme_two'
}

export const schema =  [
  {
    title: 'November 2018',
    items: [
      {
        status: STATUSES.DONE,
        icon: 'rocket',
        link: '/docs/catalyst-specs/catalyst-specs/',
        title: 'The project start',
        text:
          'Initial Idea was born and through community discussion, the technical specs were approved.'
      }
    ]
  },
  {
    title: 'December 2018',
    items: [
      {
        status: STATUSES.DONE,
        icon: 'megaphone',
        link: '/docs/links/#bitcointalk',
        title: 'Bitcointalk Announcement',
        text: 'The bitcoinTalk Announcement, things got serious now the world knows about Catalyst.'
      },
      {
        status: STATUSES.DONE,
        icon: 'linode',
        link: '/docs/catalyst-specs/pools',
        title: 'Infrastructure building',
        text:
          'At this point, the CLI was compiled and community members started to deploy public pools.'
      }
    ]
  },
  {
    title: 'Q1 — 2019',
    items: [
      {
        status: STATUSES.DONE,
        icon: 'user-add',
        link: '/docs/links/#links',
        title: 'Community',
        text:
          'Community building, creating Discord chat and various media sources, like Reddit, to spread the word about Catalyst'
      },
      {
        status: STATUSES.DONE,
        icon: 'exchange',
        link: '/docs/links/#exchanges',
        title: '1st Exchange',
        text:
          'Listing on FirstCryptoBankExchange to allow our community members to trade their CX assets.'
      }
    ]
  },
  {
    title: 'Q2 — 2019',
    items: [
      {
        status: STATUSES.DONE,
        icon: 'wallet',
        link: '/docs/catalyst-specs/getting-started',
        title: 'GUI Wallet',
        text:
          'Creating GUI wallet, for better user experience, and to allow people to sync remotely.'
      },
      {
        status: STATUSES.DONE,
        icon: 'wallet',
        link: '/docs/catalyst-specs/getting-started',
        title: 'Paper Wallet',
        text:
          'now by writing down and protecting the mnemonic seed, you will always have access to your funds!'
      },
      {
        status: STATUSES.DONE,
        icon: 'exchange',
        link: '/docs/links/#exchanges',
        title: '2nd Exchange',
        text: 'Listing on TradeCX to bing more trading volume, and give more options to the users.'
      }
    ]
  },
  {
    title: 'Q3 — 2019',
    items: [
      {
        status: STATUSES.DONE,
        icon: 'bitcoin',
        link: '/docs/funding',
        title: 'Funding System',
        text:
          'The Catalyst Funding System was put in to action by members of the Catalyst Community. Our goal is to have our community members fund each other in order to help Catalyst grow.'
      },
      {
        status: STATUSES.DONE,
        icon: 'flow-cross',
        link: '/docs/catalyst-specs/catalyst-specs',
        title: 'Algo. Change',
        text:
          'The algorithm change to Argon2/Chukwa to accelerate blockchain verification and make Catalyst’s network faster than the networks of the other CryptoNote-based cryptocurrencies.'
      }
    ]
  },
  {
    title: 'Q4 - 2019',
    items: [
      {
        status: STATUSES.IN_PROGRESS,
        icon: 'test',
        link: '/blog',
        title: 'Article series',
        text:
          'Starting a series of articles on Medium social platform with news and updates about Catalyst life.'
      },
      {
        status: STATUSES.FUNDING,
        icon: 'mobile',
        link: 'https://funding.cryptocatalyst.net/proposal/12',
        title: 'Mobile wallet',
        text:
          'It will allow CX users to use their smartphones to make instant payments and use CX Dapp services.'
      },
      {
        status: STATUSES.FUNDING,
        icon: 'chrome',
        link: 'https://funding.cryptocatalyst.net/proposal/13',
        title: 'Web wallet',
        text:
          'Integrated into our website It will allow users to have access to their funds without any additional software.'
      },
      {
        status: STATUSES.IN_PROGRESS,
        icon: 'website',
        link: '/docs/links/#links',
        title: 'New site',
        text:
          'Catalyst portal to host all the related data about the project, and provide various blockchain-related services.'
      },
      {
        status: STATUSES.DONE,
        icon: 'sitemap',
        link: '/docs/links/#3d-nodes-map',
        title: 'Nodes 3D Map',
        text:
          'The detailed three-dimensional map of Catalyst network nodes, to give an overview of the current network state.'
      },
      {
        status: STATUSES.IN_PROGRESS,
        icon: 'analytics',
        link: '/docs/analytics',
        title: 'Analytics',
        text:
          'The system will provide services to enhance and improve your trading experience on specific exchanges.'
      }
    ]
  },
  {
    title: 'Q1 2020',
    items: [
      {
        status: STATUSES.FUNDING,
        icon: 'exchange',
        link: 'https://funding.cryptocatalyst.net/proposal/15',
        title: 'More exchanges',
        text:
          'We want Catalyst to be as accessible to everyone, thus, the more exchanges we have the better.'
      },
      {
        status: STATUSES.TODO,
        icon: 'coinmarketcap',
        link: '/docs/links/#coinmarketcap-and-coingecko',
        title: 'CMC & CG listing',
        text:
          'Listing on CoinMarketCap and CoinGecko to gain better exposure, and let more people know about the project.'
      },
      {
        status: STATUSES.FUNDING,
        icon: 'chat',
        link: 'https://funding.cryptocatalyst.net/proposal/14',
        title: 'Add P2P Chat',
        text:
          'Add P2P chat into GUI, web and mobile wallets to allow Catalyst users to send secure messages to each other.'
      }
    ]
  },
  {
    title: 'Q2 2020',
    items: [
      {
        status: STATUSES.FUNDING,
        icon: 'exchange',
        link: 'https://funding.cryptocatalyst.net/proposal/14',
        title: 'OTC trading',
        text:
          'Add OTC trading functionality to the GUI, web and mobile wallets. To make Catalyst an exchange independent currency.'
      },
      {
        status: STATUSES.TODO,
        icon: 'bitcoin',
        link: '/docs/devs/sponsors',
        title: 'Sponsorship',
        text:
          'Recruit influential sponsors into CX community who believe in our goals, to support further development and natural growth of the project appreciation.'
      }
    ]
  },
  {
    title: 'Q3-Q4 2020',
    items: [
      {
        status: STATUSES.FUNDING,
        icon: 'security',
        link: 'https://funding.cryptocatalyst.net/proposal/14',
        title: 'Dapps',
        text: `Development and support of various decentralized applications secured by Catalyst's blockchain network.`
      }
    ]
  }
]
