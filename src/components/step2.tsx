"use client";

import { NativeSelect, Group, Button } from "@mantine/core";
import { useState } from "react";
function Demo2() {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 2 ? current + 1 : current));
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
        CURRENT PROCESS
      </h3>
      <NativeSelect
        style={{ marginBottom: 20 }}
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
        style={{ marginBottom: 20 }}
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
        style={{ marginBottom: 20 }}
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
export default Demo2;
