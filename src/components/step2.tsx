import { NativeSelect } from "@mantine/core";

function Demo2() {
  return (
    <div>
      <NativeSelect
        label=" 4. What software or tools do you currently use for property management?"
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
        label="  5. what are your biggest challenge in manageing properties?"
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
        label="   6. how much time do you spend weekly on property management tasks?"
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
export default Demo2;
