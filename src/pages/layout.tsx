import Head from 'next/head'

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        <title>Covid Chart</title>
        <meta name="description" content="Generated by KKK" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {children}
      </main>
    </>
  )
}