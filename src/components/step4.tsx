import { NativeSelect } from "@mantine/core";

function Demo4() {
  return (
    <div style={{ maxWidth: 1000, margin: "auto" }}>
      <h2 className="text-xl font-semibold text-gray-900 text-center mb-2 place-items-center ">
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
    </div>
  );
}
export default Demo4;
