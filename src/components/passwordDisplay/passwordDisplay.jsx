function PasswordDisplay({ value }) {
  return (
    <div className="password-display">
      <input
        type="text"
        name="password-display"
        placeholder="generated-password"
        value={value}
        readOnly
      />
      <button>copy</button>
    </div>
  );
}

export default PasswordDisplay;
