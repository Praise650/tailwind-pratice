export default function PaginationBtn({ limit, prev, next }) {
    const elements = [];
    function hhhfhf() {
      for (let i = 0; i < limit; i++) {
        elements.push(
          <div key={i} className='bg-blue-300 rounded-full w-8 h-8 py-1 text-center'>
            {i + 1}
          </div>
        );
      }
      return <div className='text-blue-500 flex gap-3'>{elements}</div>;
    }
    return (
      <div onClick={prev} className='flex justify-center gap-10 text-white mt-3'>
        <button className='bg-black px-4 py-2 rounded-xl'>Prev</button>
        {hhhfhf()}
        <button onClick={next} className='bg-black px-4 py-2 rounded-xl'>Next</button>
      </div>
    )
  }