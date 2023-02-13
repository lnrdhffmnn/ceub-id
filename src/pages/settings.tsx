import { useAtom } from "jotai";
import { FormEvent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ceubIdAtom } from "../atoms/ceub-id";

export default function Settings() {
  const [ra, setRa] = useState("");

  const [ceubId, setCeubId] = useAtom(ceubIdAtom);

  const navigate = useNavigate();

  useEffect(() => {
    setRa(ceubId.ra);
  }, [ceubId]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setCeubId({ ra });
    navigate("/");
  }

  return (
    <form onSubmit={submit} className="w-full grid gap-4 max-w-[500px]">
      <div className="grid gap-1">
        <label htmlFor="input-ra" className="font-bold">
          RA
        </label>
        <input
          type="number"
          id="input-ra"
          placeholder={ceubId.ra}
          value={ra}
          onChange={event => setRa(event.target.value)}
          className="px-4 py-2 outline-none font-mono border border-zinc-300 focus:border-fuchsia-300 shadow-sm rounded-md focus:ring ring-fuchsia-200 ring-opacity-50"
        />
      </div>
      <button
        type="submit"
        className="p-2 outline-none bg-gradient-to-br hover:bg-gradient-to-tl from-fuchsia-500 via-fuchsia-600 to-fuchsia-700 text-white shadow-sm rounded-md"
      >
        Salvar
      </button>
    </form>
  );
}
