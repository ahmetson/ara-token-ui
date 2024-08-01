import EtherIcon from '@/assets/icons/ethereum.png'
import NotificationIcon from '@/assets/icons/notification.png'
import TokenIcon from '@/assets/icons/token.png'

export const ITEMS = [
  {
    title: 'Maintainer',
    description: 'Issue CHECK tokens.',
    image: EtherIcon.src,
    url: '/check/mint',
  },
  {
    title: 'Contributor',
    description: 'Exchange your CHECK tokens for a collateral tokens.',
    image: TokenIcon.src,
    url: '/check/burn',
  },
  {
    title: 'Notifications',
    description: 'All your transactions within the Token UI.',
    image: NotificationIcon.src,
    url: '/general/notifications',
  },
]
