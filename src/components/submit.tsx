// function Submit(){

// }
// export default Submit;
import Check_Big from "@/components/check";
import { TypographyStylesProvider, Text } from "@mantine/core";

function Submit() {
  return (
    <>
      <Check_Big />
      <Text
        lineClamp={3}
        component="div"
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          marginTop: 190,
        }}
      >
        <TypographyStylesProvider>
          <h1 style={{ color: "#5A9C6E", fontSize: 80 }}>
            Questionnaire submitted!
          </h1>
          <p style={{ width: 500, marginLeft: 200, textAlign: "center" }}>
            You're one step closer to joining the{" "}
            <strong color="#86858D">recurrent beta program.</strong> Keep an eye
            out for an email with your sign-up link. We're eager to have you on
            board.
          </p>
        </TypographyStylesProvider>
      </Text>
    </>
  );
}
export default Submit;
