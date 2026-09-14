// import Card from "../../components/Card";

// export default function ProductsPage() {
//   return (
//     <>
//       <h6 className='text-4xl font-bold text-blue-500'>Purwadhika</h6>
//       <h5 className='text-[28px] text-[#972828]'>Javascript</h5>
//       {/* Grid */}
//       <div className='grid grid-cols-3'>
//         <div>01</div>
//         <div className='bg-purple-500 col-span-2'>02</div>
//         <div>03</div>
//       </div>
//       {/* Flexbox */}
//       <div className='bg-red-100 h-[50vh] flex justify-center items-center relative'>
//         <h1 className='text-2xl font-bold'>Logo</h1>
//         <h1 className='text-2xl font-bold'>Logo</h1>
//         <h1 className='text-2xl font-bold absolute bottom-0 right-0'>Logo</h1>
//       </div>
//       {/* Responsive */}
//       <h1 className='text-green-700 font-bold md:text-green-500 md:font-light lg:text-blue-500'>
//         Purwadhika
//       </h1>

//       {/*
//                 mobile: 2-col
//                 tablet: 3-col
//                 desktop: 5-col
//             */}
//       <div className='grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5'>
//         <Card productName='PERTALITE' backgroundColor='bg-red-100' price={123} />
//         <Card productName='PERTAMAX' backgroundColor='bg-blue-100' price={456} />
//         <Card productName='DEX' backgroundColor="bg-yellow-100" />
//       </div>
//     </>
//   );
// }
import { FaRegStar } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
export default function ProductsPage() {
  return (
    <>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
        <div className='bg-red-50'>
          {/* Section: Image */}
          <div className='relative'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8viEFwt-las8QsFQZxeVfj-oC9YVXRLxVq3GVQv5BGXN7WmadwVp7Shk&s=10'
              className='w-full h-52 object-cover'
            />
            <div className='w-5 h-5 bg-red-600 rounded-full absolute top-3 left-3'></div>
            <div className='w-5 h-5 bg-red-600 rounded-full absolute top-3 right-3'></div>
          </div>
          {/* Section: Content */}
          {/* Label */}
          <div className="mt-2 bg-yellow-600 rounded-xl w-fit px-3 pt-0 pb-0.5 text-white font-semibold">
            APPAREL
          </div>
          {/* Title */}
          <h1 className="text-xl mt-1 font-bold line-clamp-2">Jersey Garuda Home 2026/2027</h1>
          {/* Rating */}
          <div className="flex items-center">
            <FaRegStar className="text-sm text-yellow-500" />
            5.0 
            <BsDot />
            100 Terjual
          </div>
        </div>
      </div>
    </>
  );
}
