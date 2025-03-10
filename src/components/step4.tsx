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
      <h3 className="text-lg font-semibold text-gray-700 mb-4 text-size-20">
        ADDITIONAL INFORMATION
      </h3>
      <NativeSelect
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
    </div>
  );
}
export default Demo4;
