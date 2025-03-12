import Image from "next/image";
import sign from "../../Group 1424.jpg";
export default function Check_Big() {
  return (
    <Image
      src={sign}
      alt="Mantine logo"
      width={350}
      height={350}
      style={{
        marginTop: "100px",
        marginLeft: "450px",
        marginBottom: "20px",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        // border: "1px solid #000",
      }}
    />
  );
}
