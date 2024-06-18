
export default function Grid() {
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
        Array.from({ length: 12 }, (_, index) => (
          <div
            key={index}
            className='
                border
                border-solid	
                border-gray-400
                rounded-lg	
                p-4
                h-32

                flex
                items-center
                justify-center

                lg:w-4/5
                w-full
                mx-auto
                my-0

              '
          >
            Card
          </div>
        ))
      }
    </section>
  </>;
};
