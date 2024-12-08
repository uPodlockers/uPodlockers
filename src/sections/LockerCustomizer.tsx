// "use client";

// import { useState } from 'react';

// const LockerCustomizer = () => {
//   const [columns, setColumns] = useState(0); // Number of additional columns
//   const [mediumLockers, setMediumLockers] = useState(0); // Medium lockers in each column
//   const [largeLockers, setLargeLockers] = useState(0); // Large lockers in each column

//   // Define sizes
//   const lockerWidth = "w-24"; // Fixed width for all lockers
//   const smallHeight = 1; // Base height for small locker (scaled to 1 unit)
//   const mediumHeight = 2; // Double the height of a small locker (scaled to 2 units)
//   const largeHeight = 3; // Triple the height of a small locker (scaled to 3 units)

//   // Handle the calculation and rendering of each column's locker setup
//   const calculateSmallLockers = (height: number) => {
//     const totalHeight = height;
//     const remainingHeight = totalHeight - (mediumLockers * mediumHeight + largeLockers * largeHeight);
//     return Math.max(0, remainingHeight); // Return the number of small lockers needed
//   };

//   const renderMainColumn = () => (
//     <div className="flex flex-col items-center mx-4 space-y-2">
//       {/* Medium Locker */}
//       <div
//         className={`bg-gray-200 border border-gray-300 ${lockerWidth} ${mediumHeight * 12} flex justify-center items-center`}
//       >
//         <span className="text-sm font-semibold">Medium Locker</span>
//       </div>
//       {/* Small Locker */}
//       <div
//         className={`bg-gray-200 border border-gray-300 ${lockerWidth} ${smallHeight * 12} flex justify-center items-center`}
//       >
//         <span className="text-sm font-semibold">Small Locker</span>
//       </div>
//       {/* Screen Compartment */}
//       <div
//         className={`bg-blue-500 border border-gray-300 ${lockerWidth} ${mediumHeight * 12} flex justify-center items-center`}
//       >
//         <span className="text-sm font-semibold text-white">Screen</span>
//       </div>
//       {/* Two Small Lockers */}
//       <div
//         className={`bg-gray-200 border border-gray-300 ${lockerWidth} ${smallHeight} flex justify-center items-center`}
//       >
//         <span className="text-sm font-semibold">Small Locker</span>
//       </div>
//       <div
//         className={`bg-gray-200 border border-gray-300 ${lockerWidth} ${smallHeight} flex justify-center items-center`}
//       >
//         <span className="text-sm font-semibold">Small Locker</span>
//       </div>
//       {/* Large Locker */}
//       <div
//         className={`bg-gray-200 border border-gray-300 ${lockerWidth} ${largeHeight} flex justify-center items-center`}
//       >
//         <span className="text-sm font-semibold">Large Locker</span>
//       </div>
//     </div>
//   );

//   // Render additional columns based on the user's selection
//   const renderAdditionalColumns = () => {
//     return Array.from({ length: columns }).map((_, colIndex) => {
//       // For each additional column, calculate how many small lockers are needed
//       const smallLockersNeeded = calculateSmallLockers(10); // Total height should be 10

//       let currentHeight = 0;
//       let lockers = [];

//       // Add medium lockers first
//       for (let i = 0; i < mediumLockers; i++) {
//         lockers.push(
//           <div key={`medium-${i}`} className={`bg-gray-200 border border-gray-300 ${lockerWidth} ${mediumHeight * 12}`}>
//             <span className="text-sm font-semibold">Medium Locker</span>
//           </div>
//         );
//         currentHeight += mediumHeight;
//       }

//       // Add large lockers next
//       for (let i = 0; i < largeLockers; i++) {
//         lockers.push(
//           <div key={`large-${i}`} className={`bg-gray-200 border border-gray-300 ${lockerWidth} ${largeHeight * 12}`}>
//             <span className="text-sm font-semibold">Large Locker</span>
//           </div>
//         );
//         currentHeight += largeHeight;
//       }

//       // Add small lockers to fill the remaining space
//       for (let i = 0; i < smallLockersNeeded; i++) {
//         lockers.push(
//           <div key={`small-${i}`} className={`bg-gray-200 border border-gray-300 ${lockerWidth} ${smallHeight * 12}`}>
//             <span className="text-sm font-semibold">Small Locker</span>
//           </div>
//         );
//         currentHeight += smallHeight;
//       }

//       return (
//         <div key={colIndex} className="flex flex-col items-center mx-4 space-y-2">
//           {lockers}
//         </div>
//       );
//     });
//   };

//   return (
//     <section id="customizer" className="min-h-screen bg-white py-12 px-4 md:px-16 lg:px-32">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-4xl font-bold tracking-tight text-center text-[#010D3E] mb-8">
//           Customize Your Smart Locker
//         </h2>

//         <div className="text-center mb-8">
//           <label className="text-lg text-gray-700">Select Additional Columns: </label>
//           <input
//             type="number"
//             min="0"
//             max="5"
//             value={columns}
//             onChange={(e) => setColumns(Number(e.target.value))}
//             className="border border-gray-300 rounded px-2 py-1 ml-2"
//           />
//         </div>

//         <div className="text-center mb-8">
//           <label className="text-lg text-gray-700">How many Medium Lockers in Additional Columns: </label>
//           <input
//             type="number"
//             min="0"
//             value={mediumLockers}
//             onChange={(e) => setMediumLockers(Number(e.target.value))}
//             className="border border-gray-300 rounded px-2 py-1 ml-2"
//           />
//         </div>

//         <div className="text-center mb-8">
//           <label className="text-lg text-gray-700">How many Large Lockers in Additional Columns: </label>
//           <input
//             type="number"
//             min="0"
//             value={largeLockers}
//             onChange={(e) => setLargeLockers(Number(e.target.value))}
//             className="border border-gray-300 rounded px-2 py-1 ml-2"
//           />
//         </div>

//         <div className="flex justify-center">
//           {/* Render Main Column with the new layout */}
//           {renderMainColumn()}

//           {/* Render Additional Columns */}
//           {renderAdditionalColumns()}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LockerCustomizer;
