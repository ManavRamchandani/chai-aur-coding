import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef Hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()-_=+{}";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length) + 1;
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, charAllowed, numberAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full h-screen bg-slate-950">
        <div className="w-full max-w-md shadow-md mx-auto rounded-lg px-4 py-3 my-8 text-orange-500 bg-slate-700">
          <h1 className=" text-center text-white">Password Genrator</h1>
          <div className="flex rounded-lg overflow-hidden mb-4 shadow">
            <input
              type="text"
              value={password}
              placeholder="Password"
              className="outline-none w-full py-1 px-3"
              readOnly
              ref={passwordRef}
            />
            <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0 5 shrink-0">
              copy
            </button>
          </div>
          <div className="flex gap-x-2 text-small">
            <div className="flex gap-x-1 items-center">
              <input
                type="range"
                min={8}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length: {length} </label>
            </div>
            <div className="flex gap-x-1 items-center">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex gap-x-1 items-center">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="charInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="charInput">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
