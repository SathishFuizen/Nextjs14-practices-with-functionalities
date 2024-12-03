
// 'use client'
// import { useState } from 'react';
// import { ChevronDown ,ChevronUp} from 'lucide-react';

// const ExpandableDiv = () => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleExpansion = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className="flex items-start border p-4 rounded-lg bg-gray-100 w-full">
//       {/* Left side toggle button */}
//       <div className="cursor-pointer" onClick={toggleExpansion}>
//         {isExpanded ? (
//           <ChevronUp className="h-6 w-6 text-gray-600" />
//         ) : (
//           <ChevronDown className="h-6 w-6 text-gray-600" />
//         )}
//       </div>

//       {/* Content section */}
//       <div className="ml-4 w-full">
//         {/* Always visible content */}
//         <div className="text-lg font-semibold">This is some content</div>

//         {/* Expandable content */}
//         {isExpanded && (
//           <div className="mt-4 p-4 bg-white border rounded-lg shadow">
//             <p>This is the additional content displayed when expanded.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ExpandableDiv;





// pages/index.tsx
'use client'
import { useState } from 'react';

export default function Home() {
  // State to track if the popup is visible
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Function to toggle popup visibility
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="relative flex items-center justify-center h-screen bg-blue-500">
      {/* Button */}
      <button
        onClick={togglePopup}
        className="px-6 py-3 bg-white text-blue-500 font-bold rounded shadow hover:bg-blue-100"
      >
        Open Popup
      </button>

      {/* Popup */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-blue-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold mb-4">This is the Popup</h2>
            <button
              onClick={togglePopup}
              className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
            >
              Close Popup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

