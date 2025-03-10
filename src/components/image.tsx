import { Image } from "@mantine/core";

function RecurrentLogo() {
  return (
    <Image
      radius="md"
      src={require("./recurrent-logo.png")}
      alt="Mantine logo"
      width={200}
      height={200}
    />
  );
}
export default RecurrentLogo;
