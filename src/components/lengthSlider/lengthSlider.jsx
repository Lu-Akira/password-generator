function LengthSlider({ onChange, min, max, value, label }) {
  return (
    <div className="length-wrapper">
      <div className="tmp">
        <label htmlFor={label}>{label}</label>
        <span className="char-counter">{value}</span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        onChange={onChange}
        id={label}
        value={value}
      />
    </div>
  );
}

export default LengthSlider;
