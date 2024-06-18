interface FilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function Filter({ searchTerm, setSearchTerm }: FilterProps) {

  const handleSearch = (event: { target: { value: string; }; }) => {
    setSearchTerm(event.target.value);
  };

  return <>
    <input 
      placeholder='Search'
      className='
        px-3 py-1
        border
        border-solid	
        border-gray-400
        rounded-sm
      '
      value={searchTerm}
      onChange={handleSearch}
    />
  </>
};
