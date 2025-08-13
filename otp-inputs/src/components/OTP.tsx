import { useRef, useState } from "react";

const OTP = ({ number }: { number: number }) => {
  const [enabled, setenabled] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const refs = useRef(Array(number).fill(0));
  return (
    <div className="flex items-center flex-col gap-4">
      <span className="text-white text-2xl font-bold">FILL OTP</span>
      <div className="flex gap-1">
        {Array(number)
          .fill(1)
          .map((el, index) => (
            <SubOtpBox
              key={index}
              inputRef={(e) => (refs.current[index] = e)}
              onDone={() => {
                if(index===number-1){
                    btnRef.current?.focus();
                    setenabled(true);
                    return;
                }
                refs.current[index + 1].focus();
              }}
              onBack={() => {
                refs.current[index - 1].focus();
              }}
            />
          ))}
      </div>
      <button
        disabled={!enabled}
        className="focus:border-blue-600 py-2 px-4 rounded-2xl bg-cyan-400 disabled:bg-cyan-100 shadow-md shadow-gray-600"
        ref={btnRef}
      >
        Sign up
      </button>
    </div>
  );
};

function SubOtpBox({ inputRef, onDone, onBack }) {
  const [inputBoxValue, setinputBoxValue] = useState("");
  return (
    <div>
      <input
        onKeyUp={(e) => {
          if (e.key == "Backspace") {
            setinputBoxValue("");
            onBack();
          }
        }}
        onChange={(e) => {
          const ascii = e.target.value.charCodeAt(0);
          if (ascii >= 48 && ascii <= 57) {
            if (inputBoxValue == "") {
              setinputBoxValue(e.target.value);
            }
            onDone();
          }
        }}
        value={inputBoxValue}
        ref={inputRef}
        type="text"
        className="w-[40px] text-white h-[60px] text-center bg-blue-400 rounded-xl "
      />
    </div>
  );
}

export default OTP;
