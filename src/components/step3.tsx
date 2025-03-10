import { NativeSelect } from "@mantine/core";

function Demo3() {
  return (
    <div>
      <NativeSelect
        label=" 7. How would you rate your comfort level with new software applications?"
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
        label="  8. Which features are most important to you? (Rank from 1-5, 1 being most important)
?"
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
        label="   9. What are your main goals for using our property management platform?"
        description=""
        data={[
          "  Choose an option",
          "Property Owner",
          "Property Manager",
          "Real Estate Agent",
          "Other",
        ]}
      />
    </div>
  );
}
export default Demo3;
