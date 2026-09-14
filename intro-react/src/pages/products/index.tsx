import Card from "../../components/Card";

export default function ProductsPage() {
  return (
    <>
      <h6 className='text-4xl font-bold text-blue-500'>Purwadhika</h6>
      <h5 className='text-[28px] text-[#972828]'>Javascript</h5>
      {/* Grid */}
      <div className='grid grid-cols-3'>
        <div>01</div>
        <div className='bg-purple-500 col-span-2'>02</div>
        <div>03</div>
      </div>
      {/* Flexbox */}
      <div className='bg-red-100 h-[50vh] flex justify-center items-center relative'>
        <h1 className='text-2xl font-bold'>Logo</h1>
        <h1 className='text-2xl font-bold'>Logo</h1>
        <h1 className='text-2xl font-bold absolute bottom-0 right-0'>Logo</h1>
      </div>
      {/* Responsive */}
      <h1 className='text-green-700 font-bold md:text-green-500 md:font-light lg:text-blue-500'>
        Purwadhika
      </h1>

      {/* 
                mobile: 2-col
                tablet: 3-col
                desktop: 5-col
            */}
      <div className='grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5'>
        <Card productName='PERTALITE' backgroundColor='bg-red-100' price={123} />
        <Card productName='PERTAMAX' backgroundColor='bg-blue-100' price={456} />
        <Card productName='DEX' backgroundColor="bg-yellow-100" />
        <Card />
        <Card />
      </div>
    </>
  );
}









