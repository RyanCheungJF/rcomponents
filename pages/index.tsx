import Head from 'next/head'
import Button from '../components/Button'

export default function Home() {
  return (
    <>
      <Head>
        <title>rComponents</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button buttonText={'Click Me!'} buttonHandler={() => console.log('Clicked!')} />
    </>
  )
}
