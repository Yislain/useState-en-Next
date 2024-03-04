import Head from 'next/head';
import Counter from '../components/Counter';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Contador</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto py-8">
        <Counter />
      </main>
    </div>
  );
}