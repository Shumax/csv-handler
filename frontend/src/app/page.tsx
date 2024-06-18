import '@/styles/globals.css';

import Search from '@/components/Search';
import Grid from '@/components/Grid';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <Search />

      <Grid />

    </main>
  );
}
