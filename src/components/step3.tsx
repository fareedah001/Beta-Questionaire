import { NativeSelect } from "@mantine/core";

function Demo3() {
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
        TECHNOLOGY COMFORT
      </h3>
      <NativeSelect
        label=" 7. How would you rate your comfort level with new software applications?"
        description=""
        data={[
          "  Choose an option",
          " Very comfortable",
          "Comfortable",
          "Neutral",
          " Somewhat Uncomfortable",
          "Very uncomfortable",
        ]}
      />
      <h3 className="text-lg font-semibold text-gray-700 mb-4 text-size-20">
        FEATURE PRIORITIES
      </h3>
      <NativeSelect
        label="  8. Which features are most important to you? (Rank from 1-5, 1 being most important)
?"
        description=""
        data={[
          "  Choose an option",
          " Tenant communication",
          "  Financial tracking",
          " Maintenance management",
          " Document storage",
          " Reporting and analytics",
        ]}
      />
      <h3 className="text-lg font-semibold text-gray-700 mb-4 text-size-20">
        GOALS
      </h3>
      <NativeSelect
        label="   9. What are your main goals for using our property management platform?"
        description=""
        // data={[
        //   "  Choose an option",
        //   "Property Owner",
        //   "Property Manager",
        //   "Real Estate Agent",
        //   "Other",
        // ]}
      />
    </div>
  );
}
export default Demo3;
