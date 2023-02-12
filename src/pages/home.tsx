import { QRCodeSVG } from "qrcode.react";

export default function Home() {
  const ra = "00000000";

  return (
    <>
      <QRCodeSVG
        value={ra}
        size={250}
        level="H"
        includeMargin
        className="rounded-xl shadow-xl border border-zinc-300"
      />
      <p className="font-mono font-bold tracking-widest absolute bottom-0">
        {ra}
      </p>
    </>
  );
}
