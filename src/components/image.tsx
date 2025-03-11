import Image from "next/image";
import sign from "../../Logo.png";
export default function RecurrentLogo() {
  return (
    <Image
      src={sign}
      alt="Mantine logo"
      width={190.78}
      height={35}
      style={{ marginTop: "50px", marginLeft: "20px", marginBottom: "20px" }}
    />
  );
}
// export default RecurrentLogo;
