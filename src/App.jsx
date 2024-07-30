function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="container-header">
          <span className="container-title">PASSWORD GENERATOR</span>
        </div>

        <div className="container-body">
          <div className="password-display">
            <input
              type="text"
              name="password-display"
              placeholder="generated-password"
              readOnly
            />
            <button>copy</button>
          </div>

          <div className="length-wrapper">
            <div className="tmp">
              <label htmlFor="">Numbers of characters</label>
              <span className="char-counter">40</span>
            </div>
            <input type="range" min={10} max={25} />
          </div>

          <div className="checkbox-group">
            <div className="checkbox-wrapper">
              <input type="checkbox" />
              <label htmlFor="">Include uppercase letters</label>
            </div>

            <div className="checkbox-wrapper">
              <input type="checkbox" />
              <label htmlFor="">Include lowercase letters</label>
            </div>

            <div className="checkbox-wrapper">
              <input type="checkbox" />
              <label htmlFor="">Include numbers</label>
            </div>

            <div className="checkbox-wrapper">
              <input type="checkbox" />
              <label htmlFor="">Include symbols</label>
            </div>
          </div>
        </div>

        <div className="container-footer">
          <button>generate password</button>
        </div>
      </div>
    </div>
  );
}

export default App;
