// const Step1 = () =>{
//   return (
//     <div>
//       {/* Form Card */}
//       {/* <div className=""> */}
//         {/* Logo */}
//         <div className="mb-4">
//           <h1 className="text-lg font-bold text-gray-700">🔁 re:current</h1>
//     </div>

//     {/* Title */}
//     <h2 className="text-xl font-semibold text-gray-900 text-center mb-2">
//       BETA USER QUESTIONNAIRE
//     </h2>
//     <p className="text-center text-gray-600 mb-6">
//       <strong className="text-blue-600 text-size-16">
//         Thank you for participating in our beta program!
//       </strong>{" "}
//       Please help us understand your needs better by answering the following
//       questions.
//     </p>

//     {/* Basic Information */}
//     <h3 className="text-lg font-semibold text-gray-700 mb-4 text-size-20">
//       BASIC INFORMATION
//     </h3>

//     {/* Dropdowns */}
//     <div className="mb-4">
//       <label className="block text-gray-700">
//         1. What is your primary role in property management?
//       </label>
//       <select
//         name="role"
//         value={formData.role}
//         onChange={handleChange}
//         className="mt-1 w-full p-2 border rounded"
//       >
//         <option value="" color="gray">
//           Choose an option
//         </option>
//         <option value="owner">Property Owner</option>
//         <option value="manager">Property Manager</option>
//         <option value="agent">Real Estate Agent</option>
//         <option value="other">Other</option>
//       </select>
//     </div>

//     <div className="mb-4">
//       <label className="block text-gray-700">
//         2. How many properties do you currently manage?
//       </label>
//       <select
//         name="propertiesManaged"
//         value={formData.propertiesManaged}
//         onChange={handleChange}
//         className="mt-1 w-full p-2 border rounded"
//       >
//         <option value="">Choose an option</option>
//         <option value="1-5">1-5</option>
//         <option value="6-20">6-20</option>
//         <option value="21-50">21-50</option>
//         <option value="50+">50+</option>
//       </select>
//     </div>

//     <div className="mb-6">
//       <label className="block text-gray-700">
//         3. What types of properties do you manage? (Select all that apply)
//       </label>
//       <select
//         name="propertyTypes"
//         value={formData.propertyTypes}
//         onChange={handleChange}
//         className="mt-1 w-full p-2 border rounded"
//       >
//         <option value="">Choose an option</option>
//         <option value="single-family">Residential Single-Family</option>
//         <option value="multi-family">Multi-Family Units</option>
//         <option value="commercial">Commercial Properties</option>
//         <option value="short-term">Short-term Rentals</option>
//         <option value="other">Other</option>
//       </select>
//     </div>
//   );
// };
// export default Step1;

// import { Select, Text, Title, Container } from "@mantine/core";

// interface FormData {
//   role: string;
//   propertiesManaged: string;
//   propertyTypes: string;
// }

// interface Step1Props {
//   formData: FormData;
//   handleChange: (field: string, value: string) => void;
// }

// const Step1 = ({ formData, handleChange }: Step1Props) => {
//   return (
//     <Container size="sm" p="lg">
//       <Title order={1} className="text-gray-700 mb-4">
//         🔁 re:current
//       </Title>
//       <Title order={2} className="text-center mb-2">
//         BETA USER QUESTIONNAIRE
//       </Title>
//       <Text align="center" color="gray" mb="md">
//         <strong className="text-blue-600">
//           Thank you for participating in our beta program!
//         </strong>{" "}
//         Please help us understand your needs better by answering the following
//         questions.
//       </Text>
//       <Title order={3} className="mb-4">
//         BASIC INFORMATION
//       </Title>

//       <Select
//         label="1. What is your primary role in property management?"
//         placeholder="Choose an option"
//         data={[
//           { value: "owner", label: "Property Owner" },
//           { value: "manager", label: "Property Manager" },
//           { value: "agent", label: "Real Estate Agent" },
//           { value: "other", label: "Other" },
//         ]}
//         value={formData.role}
//         onChange={(value) => handleChange("role", value ?? "")}
//       />

//       <Select
//         label="2. How many properties do you currently manage?"
//         placeholder="Choose an option"
//         data={[
//           { value: "1-5", label: "1-5" },
//           { value: "6-20", label: "6-20" },
//           { value: "21-50", label: "21-50" },
//           { value: "50+", label: "50+" },
//         ]}
//         value={formData.propertiesManaged}
//         onChange={(value) => handleChange("propertiesManaged", value ?? "")}
//       />

//       <Select
//         label="3. What types of properties do you manage? (Select all that apply)"
//         placeholder="Choose an option"
//         data={[
//           { value: "single-family", label: "Residential Single-Family" },
//           { value: "multi-family", label: "Multi-Family Units" },
//           { value: "commercial", label: "Commercial Properties" },
//           { value: "short-term", label: "Short-term Rentals" },
//           { value: "other", label: "Other" },
//         ]}
//         value={formData.propertyTypes}
//         onChange={(value) => handleChange("propertyTypes", value ?? "")}
//       />
//     </Container>
//   );
// };

// export default Step1;

// import { Input } from "@mantine/core";

// function Wrapper() {
//   return (
//     <Input.Wrapper
//       label=" 1 Input label"
//       description="Input description"
//       error="Input error"
//     >
//       <Input placeholder="Input inside Input.Wrapper" />
//     </Input.Wrapper>
//   );
// }
// export default Wrapper;

import { Center, NativeSelect } from "@mantine/core";

function Demo1() {
  return (
    <div style={{ maxWidth: 1000, margin: "auto" }}>
      <h2
        className="text-xl font-semibold text-gray-900 text-center mb-2 place-items-center "
        // style={{ pl }}
      >
        BETA USER QUESTIONNAIRE
      </h2>
      <p
        style={{ marginBottom: 40 }}
        //  className="text-center text-gray-600 mb-6"
      >
        {/* <strong className="text-blue-600 text-size-16"> */}
        Thank you for participating in our beta program!
        {/* </strong>{" "} */}
        Please help us understand your needs better by answering the following
        questions.
      </p>

      {/* Basic Information */}
      <h3
        className="text-lg font-semibold text-gray-700 mb-4 text-size-20"
        style={{ marginBottom: 20 }}
      >
        BASIC INFORMATION
      </h3>

      <NativeSelect
        style={{ marginBottom: 20 }}
        label=" 1. What is your primary role in property management?"
        description=""
        data={[
          "  Choose an option",
          "Property Owner",
          "Property Manager",
          "Real Estate Agent",
          "Other",
        ]}
      />
      <NativeSelect
        style={{ marginBottom: 20 }}
        label="  2. How many properties do you currently manage?"
        description=""
        data={["  Choose an option", "1-5", "6-20", "21-50", "50+"]}
      />
      <NativeSelect
        style={{ marginBottom: 20 }}
        label="   3. What types of properties do you manage? (Select all that apply)"
        description=""
        data={[
          "  Choose an option",
          " Residential Single-Family",
          "  Multi-Family Units",
          " Commercial Properties",
          " Short-term Rentals",
          " Other(please specify)",
        ]}
      />
    </div>
  );
}
export default Demo1;
