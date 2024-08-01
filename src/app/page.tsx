import { CardList } from '@/components/CardList'
import { SITE_DESCRIPTION, SITE_NAME } from '@/utils/site'
import { Hero, CTA } from '@/components/Hero'
import { Stats } from '@/components/Stats'
import { ITEMS } from './check/items'
import { Categories } from '@/components/Categories'
import { Steps } from '@/components/Steps'

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Stats></Stats>
      <Categories></Categories>
      <Steps></Steps>
      <CTA></CTA>
      {/* <h2 className='text-2xl mb-2'>{SITE_NAME}</h2>
      <p>{SITE_DESCRIPTION}</p> */}

      {/* <div className='mt-4'>
        <h3 className='text-lg mb-2'>Operations</h3>
        <p className='mb-4'>The following links are depending on the token that you have.</p>

        <CardList items={ITEMS} />
      </div> */}
    </>
  )
}
