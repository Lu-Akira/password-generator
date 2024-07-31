function PasswordDisplay({ value, onCopy }) {
  return (
    <div className="password-display">
      <input
        type="text"
        name="password-display"
        placeholder="G3nerAtEd-p4s5wOrd"
        value={value}
        readOnly
      />
      <button onClick={onCopy}>copy</button>
    </div>
  );
}

export default PasswordDisplay;
