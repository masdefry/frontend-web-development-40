import { useState } from "react";
import { useRef } from "react";

export default function UsestatePage() {
    const [quantity, setQuantity] = useState<number>(0);

    const handleDecreaseQuantity = () => {
        setQuantity((prevVal) => prevVal - 1);
    }

  return (
    <>
      <div className="flex justify-center p-10">
        <div className='flex items-center gap-3'>
          <button onClick={handleDecreaseQuantity} className='btn btn-success w-5 h-5'>-</button>
          <span>{quantity}</span>
          <button className='btn btn-success w-5 h-5'>+</button>
        </div>
      </div>
    </>
  );
}

// export default function UsestatePage() {
//     const quantity = useRef<number>(0)

//     const handleDecreaseQuantity = () => {
//         quantity.current -= 1;
//         console.log(quantity.current)
//     }

//   return (
//     <>
//       <div className='flex justify-center p-10'>
//         <div className='flex items-center gap-3'>
//           <button
//             className='btn btn-success w-5 h-5'
//             onClick={handleDecreaseQuantity}
//           >
//             -
//           </button>
//           <span>{quantity?.current}</span>
//           <button className='btn btn-success w-5 h-5'>+</button>
//         </div>
//       </div>
//     </>
//   );
// }
