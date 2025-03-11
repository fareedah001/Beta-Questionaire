"use client";
import Demo1 from "@/components/step1";
import Demo2 from "@/components/step2";
import Demo3 from "@/components/step3";
import Demo4 from "@/components/step4";
import Submit from "@/components/submit";

// import { NativeSelect } from "@mantine/core";
import { useState } from "react";
import { Stepper, Button, Group } from "@mantine/core";

import RecurrentLogo from "@/components/image";

export default function Demo() {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <RecurrentLogo />;
      <Stepper
        color="#EC6544"
        size={"xs"}
        style={{ Width: 1137, height: 47, margin: "auto" }}
        active={active}
        onStepClick={setActive}
        styles={{ stepIcon: { height: "18px", width: "18px" } }}
        allowNextStepsSelect={false}
      >
        <Stepper.Step
          // styles={{ padd: "250px" }}
          label=" Step 1"
          description="This would take 2 mins to complete"
        >
          {/* <Wrapper /> */}
          <Demo1 />
          {/* Step 1 content: Create an account */}
        </Stepper.Step>
        <Stepper.Step
          label=" Step 2 "
          description="This would take 2 mins to complete"
        >
          {/* Step 2 content: Verify email */}
          <Demo2 />
        </Stepper.Step>
        <Stepper.Step
          label="Step 3"
          description="This would take 2 mins to complete"
        >
          {/* Step 3 content: Get full access */}
          <Demo3 />
        </Stepper.Step>
        <Stepper.Step
          label="Step 4"
          description="This would take 2 mins to complete"
        >
          {/* Step 4 content: Get full access */}
          <Demo4 />
        </Stepper.Step>

        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>
      <Group justify="flex-end" pr={30} mt={30}>
        {/* <Button variant="default" onClick={prevStep}>
          Back
        </Button> */}
        <Button onClick={nextStep}>Continue</Button>
      </Group>
      <Submit />
    </>
  );
}
