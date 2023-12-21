import { Inter } from 'next/font/google'
import { Text } from '@radix-ui/themes';
import Head from 'next/head'
import Navbar from '@/components/navbar/navbar';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 mt-96 ${inter.className}`}
    >
      <Head>
        <title>InnoSpark</title>
        <meta property="description" content="Leading digital marketing service in Bangladesh" />

        <meta property="twitter:image" content="https://images2.imgbox.com/57/71/NYnzgUOV_o.png" />
        <meta property="twitter:card" content="summary_large_image" />


        <meta property="og:image" content="https://images2.imgbox.com/57/71/NYnzgUOV_o.png" />
        <meta property="og:title" content="InnoSpark" />
        <meta property="og:description" content="Leading digital marketing service in Bangladesh" />
        <meta property="og:url" content="https://innosparkbd.com" />

      </Head>

      <div className="flex">
        <Text size={"8"}>
          Innospark
        </Text>
      </div>
    </main>
  )
}
