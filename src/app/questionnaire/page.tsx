"use client";
import Demo1 from "@/components/step1";
import Demo2 from "@/components/step2";
import Demo3 from "@/components/step3";
import Demo4 from "@/components/step4";
// import { NativeSelect } from "@mantine/core";
import { useState } from "react";
import { Stepper, Button, Group } from "@mantine/core";
// import Wrapper from "@/components/step1";

export default function Demo() {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper
        active={active}
        onStepClick={setActive}
        allowNextStepsSelect={false}
      >
        <Stepper.Step
          label="First step"
          description="This would take 2 mins to complete"
        >
          {/* <Wrapper /> */}
          <Demo1 />
          {/* Step 1 content: Create an account */}
        </Stepper.Step>
        <Stepper.Step
          label="Second step"
          description="This would take 2 mins to complete"
        >
          {/* Step 2 content: Verify email */}
          <Demo2 />
        </Stepper.Step>
        <Stepper.Step
          label="Final step"
          description="This would take 2 mins to complete"
        >
          {/* Step 3 content: Get full access */}
          <Demo3 />
        </Stepper.Step>
        <Stepper.Step
          label="Final step"
          description="This would take 2 mins to complete"
        >
          {/* Step 4 content: Get full access */}
          <Demo4 />
        </Stepper.Step>

        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Continue</Button>
      </Group>
    </>
  );
}
