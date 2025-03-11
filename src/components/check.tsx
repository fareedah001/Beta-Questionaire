import Image from "next/image";
import sign from "../../Check_Big@2x.png";
export default function Check_Big() {
  return (
    <Image
      src={sign}
      alt="Mantine logo"
      width={100}
      height={50}
      style={{ marginTop: "50px", marginLeft: "20px", marginBottom: "20px" }}
    />
  );
}
