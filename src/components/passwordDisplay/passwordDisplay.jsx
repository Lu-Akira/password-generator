import "./passwordDisplay.css";

import { useState } from "react";

function PasswordDisplay({ value, onCopy }) {
  const [copied, setCopied] = useState(false);

  const onCopyButtonClicked = () => {
    onCopy();
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <div className="password-display">
      <input
        type="text"
        name="password-display"
        placeholder="G3nerAtEd-p4s5wOrd"
        value={value}
        readOnly
      />
      <button className="copy-button" onClick={onCopyButtonClicked}>
        {copied ? "copied" : "copy"}
      </button>
    </div>
  );
}

export default PasswordDisplay;
