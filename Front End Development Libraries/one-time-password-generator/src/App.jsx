import { useEffect, useState } from "react";
function OTPGenerator() {
  const [otp, setOtp] = useState(null);
  const [timer, setTimer] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateOTP = () => {
    const newOTP = Math.floor(100000 + Math.random() * 900000);
    setOtp(newOTP);
  };

  const handleOtpGeneration = () => {
    generateOTP();
    setTimer(5); // seconds
    setIsGenerating(true);
  };

  useEffect(() => {
    if (!timer) return;

    const timeoutId = setTimeout(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [timer]);

  return (
    <div className="container text-center pt-5 space-y-3">
      <h1 id="otp-title" className="text-2xl font-bold">
        OTP Generator
      </h1>
      <h2 id="otp-display">
        {!!otp ? otp : "Click 'Generate OTP' to get a code"}
      </h2>

      <p id="otp-timer" aria-live="polite">
        {isGenerating
          ? timer > 0
            ? `Expires in: ${timer} seconds`
            : "OTP expired. Click the button to generate a new OTP."
          : ""}
      </p>

      <button
        disabled={timer > 0}
        id="generate-otp-button"
        className={`border py-1 px-3 bg-gray-800 text-white font-bold  ${timer > 0 ? "cursor-not-allowed opacity-50 " : "cursor-pointer hover:bg-gray-950"}`}
        onClick={handleOtpGeneration}
      >
        Generate OTP
      </button>
    </div>
  );
}

export default OTPGenerator;
