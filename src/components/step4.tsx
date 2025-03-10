import { NativeSelect } from "@mantine/core";

function Demo4() {
  return (
    <div>
      <NativeSelect
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
      <NativeSelect
        label="  11. What would make this beta testing experience successful for you?
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
        label="   312 Is there anything else you'd like us to know?"
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
export default Demo4;
