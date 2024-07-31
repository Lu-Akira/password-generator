function LabeledCheckbox({ label, onChange, checked }) {
  return (
    <div className="checkbox-wrapper">
      <input type="checkbox" onChange={onChange} id={label} checked={checked} />
      <label htmlFor={label}>{label}</label>
    </div>
  );
}

export default LabeledCheckbox;
