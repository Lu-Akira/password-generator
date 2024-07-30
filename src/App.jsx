function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="container-header">
          <p className="app-title">password generator</p>

          <div className="input-group">
            <input type="text" placeholder="placeholder" />
            <button>copy password</button>
          </div>
        </div>

        <div className="container-content">
          <div className="checkbox-wrapper">
            <input type="checkbox" />
            <label htmlFor="">label</label>
          </div>

          <div className="checkbox-wrapper">
            <input type="checkbox" />
            <label htmlFor="">label</label>
          </div>

          <div className="checkbox-wrapper">
            <input type="checkbox" />
            <label htmlFor="">label</label>
          </div>

          <div className="checkbox-wrapper">
            <input type="checkbox" />
            <label htmlFor="">label</label>
          </div>
        </div>

        <div className="container-footer flex-centered">
          <button className="generate-button">generate</button>
        </div>
      </div>
    </div>
  );
}

export default App;
