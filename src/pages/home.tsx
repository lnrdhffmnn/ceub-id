import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

export default function Home() {
  const [ra, setRa] = useState<string>("12345678");

  return (
    <>
      <QRCodeSVG
        className="shadow-xl rounded-xl"
        value={ra}
        size={280}
        level="H"
        includeMargin
      />
      <span className="absolute bottom-0 font-mono tracking-widest">{ra}</span>
    </>
  );
}
