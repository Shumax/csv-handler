'use client'

import { useState } from 'react';

import '@/styles/globals.css';

import Search from '@/components/Search';
import Grid from '@/components/Grid';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Grid searchTerm={searchTerm} />

    </main>
  );
}
