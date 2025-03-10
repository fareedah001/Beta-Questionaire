// import Image from "next/image";

// export default function Home() {
//   // return (
//   //   <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//   //     <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//   //       <Image
//   //         className="dark:invert"
//   //         src="/next.svg"
//   //         alt="Next.js logo"
//   //         width={180}
//   //         height={38}
//   //         priority
//   //       />
//   //       <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//   //         <li className="mb-2">
//   //           Get started by editing{" "}
//   //           <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//   //             src/app/page.tsx
//   //           </code>
//   //           .
//   //         </li>
//   //         <li>Save and see your changes instantly.</li>
//   //       </ol>

//   //       <div className="flex gap-4 items-center flex-col sm:flex-row">
//   //         <a
//   //           className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//   //           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//   //           target="_blank"
//   //           rel="noopener noreferrer"
//   //         >
//   //           <Image
//   //             className="dark:invert"
//   //             src="/vercel.svg"
//   //             alt="Vercel logomark"
//   //             width={20}
//   //             height={20}
//   //           />
//   //           Deploy now
//   //         </a>
//   //         <a
//   //           className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//   //           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//   //           target="_blank"
//   //           rel="noopener noreferrer"
//   //         >
//   //           Read our docs
//   //         </a>
//   //       </div>
//   //     </main>
//   //     <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//   //       <a
//   //         className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//   //         href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //       >
//   //         <Image
//   //           aria-hidden
//   //           src="/file.svg"
//   //           alt="File icon"
//   //           width={16}
//   //           height={16}
//   //         />
//   //         Learn
//   //       </a>
//   //       <a
//   //         className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//   //         href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //       >
//   //         <Image
//   //           aria-hidden
//   //           src="/window.svg"
//   //           alt="Window icon"
//   //           width={16}
//   //           height={16}
//   //         />
//   //         Examples
//   //       </a>
//   //       <a
//   //         className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//   //         href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //       >
//   //         <Image
//   //           aria-hidden
//   //           src="/globe.svg"
//   //           alt="Globe icon"
//   //           width={16}
//   //           height={16}
//   //         />
//   //         Go to nextjs.org →
//   //       </a>
//   //     </footer>
//   //   </div>
//   // );
//   return <h1> hello faa</h1>;
// }
"use client";
import { useState } from "react";

// export default function BetaQuestionnaire() {
//   const [formData, setFormData] = useState({
//     role: "",
//     propertiesManaged: "",
//     propertyTypes: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
//       <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-2xl">
//         <h2 className="text-2xl font-bold #201F29-700 mb-4">
//           BETA USER QUESTIONNAIRE
//         </h2>
//         <p className="text-gray-600 mb-6">
//           Thank you for participating in our beta program! Please help us
//           understand your needs better by answering the following questions.
//         </p>
//         <div className="mb-4">
//           <label className="block text-gray-700">
//             What is your primary role in property management?
//           </label>
//           <select
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             className="mt-1 w-full p-2 border rounded"
//           >
//             <option value="">Choose an option</option>
//             <option value="owner">Property Owner</option>
//             <option value="manager">Property Manager</option>
//             <option value="agent">Real Estate Agent</option>
//             <option value="other">Other</option>
//           </select>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">
//             How many properties do you currently manage?
//           </label>
//           <select
//             name="propertiesManaged"
//             value={formData.propertiesManaged}
//             onChange={handleChange}
//             className="mt-1 w-full p-2 border rounded"
//           >
//             <option value="">Choose an option</option>
//             <option value="1-5">1-5</option>
//             <option value="6-20">6-20</option>
//             <option value="21-50">21-50</option>
//             <option value="50+">50+</option>
//           </select>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">
//             What types of properties do you manage? (Select all that apply)
//           </label>
//           <select
//             name="propertyTypes"
//             value={formData.propertyTypes}
//             onChange={handleChange}
//             className="mt-1 w-full p-2 border rounded"
//           >
//             <option value="">Choose an option</option>
//             <option value="single-family">Residential Single-Family</option>
//             <option value="multi-family">Multi-Family Units</option>
//             <option value="commercial">Commercial Properties</option>
//             <option value="short-term">Short-term Rentals</option>
//             <option value="other">Other</option>
//           </select>
//         </div>
//         <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
//           Continue
//         </button>
//       </div>
//     </div>
//   );
// }

export default function BetaQuestionnaire() {
  const [formData, setFormData] = useState({
    role: "",
    propertiesManaged: "",
    propertyTypes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-8">
      {/* Progress Bar */}
      <div className="w-full max-w-3xl mb-6">
        <div className="relative flex justify-between items-center">
          <div className="w-1/4 h-1 bg-red-500"></div>
          <div className="w-3/4 h-1 bg-gray-300"></div>
          <div className="absolute left-0 top-[-10px] flex items-center text-red-500 text-sm">
            <span className="mr-2">Step 1</span> This is would take 2 mins to
            complete.
          </div>
        </div>
      </div>

      {/* Form Card */}
      <div className="">
        {/* Logo */}
        <div className="mb-4">
          <h1 className="text-lg font-bold text-gray-700">🔁 re:current</h1>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 text-center mb-2">
          BETA USER QUESTIONNAIRE
        </h2>
        <p className="text-center text-gray-600 mb-6">
          <strong className="text-blue-600 text-size-16">
            Thank you for participating in our beta program!
          </strong>{" "}
          Please help us understand your needs better by answering the following
          questions.
        </p>

        {/* Basic Information */}
        <h3 className="text-lg font-semibold text-gray-700 mb-4 text-size-20">
          BASIC INFORMATION
        </h3>

        {/* Dropdowns */}
        <div className="mb-4">
          <label className="block text-gray-700">
            1. What is your primary role in property management?
          </label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded"
          >
            <option value="" color="gray">
              Choose an option
            </option>
            <option value="owner">Property Owner</option>
            <option value="manager">Property Manager</option>
            <option value="agent">Real Estate Agent</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">
            2. How many properties do you currently manage?
          </label>
          <select
            name="propertiesManaged"
            value={formData.propertiesManaged}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded"
          >
            <option value="">Choose an option</option>
            <option value="1-5">1-5</option>
            <option value="6-20">6-20</option>
            <option value="21-50">21-50</option>
            <option value="50+">50+</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700">
            3. What types of properties do you manage? (Select all that apply)
          </label>
          <select
            name="propertyTypes"
            value={formData.propertyTypes}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded"
          >
            <option value="">Choose an option</option>
            <option value="single-family">Residential Single-Family</option>
            <option value="multi-family">Multi-Family Units</option>
            <option value="commercial">Commercial Properties</option>
            <option value="short-term">Short-term Rentals</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Continue Button */}
        <button className="w-45 bg-black text-white py-2 textalign-left hover:bg-gray-800">
          Continue
        </button>
      </div>
    </div>
  );
}
