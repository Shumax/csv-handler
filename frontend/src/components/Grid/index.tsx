'use client'

import { useEffect, useState } from "react";

type UserProps = {
  name: string;
  city: string;
  country: number;
  favorite_sport: string;
}

interface GridProps  {
  searchTerm: string;
}

export default function Grid({ searchTerm }: GridProps ) {
  const [dataGrid, setDataGrid] = useState<UserProps[]>([]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_BASE_URL+'/api/users?q=all')
     .then(async response => {
        const { data } = await response.json();
        setDataGrid(data);
      })
     .catch(error => console.log(error));
  }, []);

  const filteredData = searchTerm ? dataGrid.filter((user) => {
    console.log(user.name.toLowerCase(), searchTerm.toLowerCase())

    for (const value of Object.values(user)) {
      if (value.toLowerCase().includes(searchTerm.toLowerCase())) return user;
    }

  }) : dataGrid;

  return <>
    <section
      className='
        grid
        grid-cols-4	
        max-md:grid-cols-2	
        max-sm:grid-cols-1
        gap-8
        lg:gap-8

        p-4
        w-full
        h-full
      '
    >
      {
        filteredData?.map((user, index) => (
          <div
            key={index}
            className='
              bg-white
              border
              border-solid	
              border-gray-400
              rounded-lg	
              p-4
              h-32

              flex
              items-center
              justify-center
              flex-col

              lg:w-4/5
              w-full
              mx-auto
              my-0
              text-sm
            '
            data-testid="info-card"
          >
            {user.name} <br/>
            {user.city} <br/>
            {user.country} <br/>
            {user.favorite_sport}
          </div>
        )) || 'empty'
      }
    </section>
  </>;
};
