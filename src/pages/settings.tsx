import { useAtom } from "jotai";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ceubIdAtom } from "../atoms/ceub-id";

export default function Settings() {
  const [ceubId, setCeubId] = useAtom(ceubIdAtom);

  const [ra, setRa] = useState<string>(ceubId.ra);
  const [code, setCode] = useState<string>(ceubId.code);

  const navigate = useNavigate();

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setCeubId({
      ra: ra,
      code: code,
    });
    navigate("/");
  }

  return (
    <>
      <form
        onSubmit={submit}
        className="w-11/12 max-w-md flex flex-col items-stretch justify-center gap-4"
      >
        <div>
          <label htmlFor="input-ra">RA:</label>
          <input
            type="number"
            id="input-ra"
            value={ra}
            onChange={event => setRa(event.target.value)}
            className="font-mono mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-fuchsia-300 focus:ring focus:ring-fuchsia-200 focus:ring-opacity-50"
          />
        </div>
        {ceubId.code.length > 0 && (
          <div>
            <label htmlFor="input-code">Código:</label>
            <input
              type="number"
              id="input-code"
              value={code}
              onChange={event => setCode(event.target.value)}
              className="font-mono mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-fuchsia-300 focus:ring focus:ring-fuchsia-200 focus:ring-opacity-50"
            />
          </div>
        )}
        <button
          type="submit"
          className="block w-full text-white bg-gradient-to-r from-fuchsia-500 via-fuchsia-600 to-fuchsia-700 hover:bg-gradient-to-br focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center border-zinc-300 shadow-sm focus:border-fuchsia-300 focus:ring focus:ring-fuchsia-200 focus:ring-opacity-50"
        >
          Salvar
        </button>
      </form>
    </>
  );
}
