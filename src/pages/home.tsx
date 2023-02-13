import { useAtomValue } from "jotai";
import { QRCodeSVG } from "qrcode.react";
import { Link } from "react-router-dom";
import { ceubIdAtom } from "../atoms/ceub-id";

export default function Home() {
  const { ra } = useAtomValue(ceubIdAtom);

  return ra ? (
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
  ) : (
    <p className="text-3xl text-center">
      <span>Você precisa</span>
      <br />
      <Link
        to="/settings"
        className="text-fuchsia-600 hover:underline decoration-dotted"
      >
        preencher
      </Link>
      <br />
      <span>seus dados.</span>
    </p>
  );
}
