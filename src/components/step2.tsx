import { NativeSelect } from "@mantine/core";

function Demo2() {
  return (
    <div>
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
        CURRENT PROCESS
      </h3>
      <NativeSelect
        label=" 4. What software or tools do you currently use for property management?"
        description=""
        // data={[
        //   "  Choose an option",
        //   "Property Owner",
        //   "Property Manager",
        //   "Real Estate Agent",
        //   "Other",
        // ]}
      />
      <NativeSelect
        label="  5. what are your biggest challenge in manageing properties?"
        description=""
        // data={[
        //   "  Choose an option",
        //   "Property Owner",
        //   "Property Manager",
        //   "Real Estate Agent",
        //   "Other",
        // ]}
      />
      <NativeSelect
        label="   6. how much time do you spend weekly on property management tasks?"
        description=""
        data={[
          "  Choose an option",
          "Less than 5 hours",
          "5-15 hours",
          "15-30 hours",
          "30+ hours",
        ]}
      />
    </div>
  );
}
export default Demo2;
