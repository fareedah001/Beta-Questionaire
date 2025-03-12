"use client";

import { Center, NativeSelect, Group, Button } from "@mantine/core";
import { use, useState } from "react";
function Demo1() {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    // active={active}
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
      {/* <Group justify="flex-end" pr={30} mt={30}> */}
      {/* <Button variant="default" onClick={prevStep}>
                Back
              </Button> */}
      {/* <Button onClick={nextStep} c={"white"} bg={"black"}>
          Continue
        </Button>
      </Group> */}
    </div>
  );
}
export default Demo1;
