import { NativeSelect } from "@mantine/core";
import { useState } from "react";
import { Button, Group } from "@mantine/core";

function Demo3() {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  return (
    <div style={{ maxWidth: 1000, margin: "auto" }}>
      <h2
        className="text-xl font-semibold text-gray-900 text-center mb-2 place-items-center "
        style={{ paddingLeft: 250 }}
      >
        BETA USER QUESTIONNAIRE
      </h2>
      <p
        style={{ marginBottom: 40 }}
        // {/* // className="text-center text-gray-600 mb-6"
      >
        {/* <strong className="text-blue-600 text-size-16"> */}
        Thank you for participating in our beta program!
        {/* // </strong>{" "} */}
        Please help us understand your needs better by answering the following
        questions.
      </p>

      {/* Basic Information */}
      <h3 className="text-lg font-semibold text-gray-700 mb-4 text-size-20">
        TECHNOLOGY COMFORT
      </h3>
      <NativeSelect
        style={{ marginBottom: 20 }}
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
        style={{ marginBottom: 20 }}
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
        style={{ marginBottom: 20 }}
        label="   9. What are your main goals for using our property management platform?"

        // data={[
        //   "  Choose an option",
        //   "Property Owner",
        //   "Property Manager",
        //   "Real Estate Agent",
        //   "Other",
        // ]}
      />
      <Group justify="flex-end" pr={30} mt={30}>
        {/* <Button variant="default" onClick={prevStep}>
                Back
              </Button> */}
        <Button onClick={nextStep} c={"white"} bg={"black"}>
          Continue
        </Button>
      </Group>
    </div>
  );
}
export default Demo3;
