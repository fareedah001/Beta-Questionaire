"use client";
import { NativeSelect } from "@mantine/core";
import { useState } from "react";
import { Button, Group } from "@mantine/core";

function Demo4() {
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
        style={{ marginBottom: 20 }}

        // className="text-center text-gray-600 mb-6"
      >
        {/* <strong className="text-blue-600 text-size-16"> */}
        Thank you for participating in our beta program!
        {/* </strong>{" "} */}
        Please help us understand your needs better by answering the following
        questions.
      </p>
      <NativeSelect
        style={{ marginBottom: 20 }}
        label=" 10. What would make this beta testing experience successful for you?"
        description=""
        // data={[
        //   "  Choose an option",
        //   "Property Owner",
        //   "Property Manager",
        //   "Real Estate Agent",
        //   "Other",
        // ]}
      />
      <h3 className="text-lg font-semibold text-gray-700 mb-4 text-size-20">
        ADDITIONAL INFORMATION
      </h3>
      <NativeSelect
        style={{ marginBottom: 20 }}
        label="  11. What would make this beta testing experience successful for you?
?"
        description=""
        data={[
          "  Choose an option",
          "  Email",
          " In-app notifications",
          "Text messages",
          " Phone calls",
        ]}
      />
      <NativeSelect
        style={{ marginBottom: 20 }}
        label="   12. Is there anything else you'd like us to know?"
        description=""
        // data={[
        //   "  Choose an option",
        //   "Property Owner",
        //   "Property Manager",
        //   "Real Estate Agent",
        //   "Other",
        // ]}
      />
      {/* <Group justify="flex-end" pr={30} mt={30}> */}
      {/* <Button variant="default" onClick={prevStep}>
                Back
              </Button> */}
      {/* <Button onClick={nextStep} c={"white"} bg={"black"}>
          Submit
        </Button>
      </Group> */}
    </div>
  );
}
export default Demo4;
