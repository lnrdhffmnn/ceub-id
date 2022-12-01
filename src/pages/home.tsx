import { QRCodeSVG } from "qrcode.react";
import { useAtomValue } from "jotai";
import { ceubIdAtom } from "../atoms/ceub-id";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [ceubId, setCeubId] = useState("");

  const { ra, code } = useAtomValue(ceubIdAtom);

  useEffect(() => {
    setCeubId(`${ra}|${code}`);
  }, [ra, code]);

  return (
    <>
      {ra.length > 0 ? (
        <>
          <QRCodeSVG
            className="shadow-xl rounded-xl"
            value={ceubId}
            size={280}
            level="H"
            includeMargin
          />
          <span className="absolute bottom-0 font-mono tracking-widest">
            {ceubId}
          </span>
        </>
      ) : (
        <h2 className="text-3xl text-center w-3/4 mx-auto">
          <span>Você precisa </span>
          <Link
            to="/settings"
            className="text-fuchsia-600 hover:underline hover:decoration-dotted"
          >
            preencher
          </Link>
          <span> seus dados.</span>
        </h2>
      )}
    </>
  );
}
