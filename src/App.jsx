import { useState } from "react";

import getCharacterSet from "./utils/getCharSet";
import getRandomCharacter from "./utils/getRandomCharacter";

import Header from "./components/header/header";
import PasswordDisplay from "./components/passwordDisplay/passwordDisplay";
import LengthSlider from "./components/lengthSlider/lengthSlider";
import LabeledCheckbox from "./components/labeledCheckbox/labeledCheckbox";

function App() {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [generatorConfig, setGeneratorConfig] = useState({
    passwordLength: 10,
    includesUppercase: true,
    includesLowercase: true,
    includesNumbers: true,
    includesSymbols: true,
  });

  const generateRandomPassword = () => {
    let randomPassword = "";
    const charSets = getCharacterSet(generatorConfig);

    if (charSets.length) {
      for (let i = 0; i < generatorConfig.passwordLength; i++) {
        randomPassword += getRandomCharacter(charSets);
      }
    }

    setGeneratedPassword(randomPassword);
  };

  const handleSliderChange = (event) => {
    const newGeneratorConfig = structuredClone(generatorConfig);
    newGeneratorConfig.passwordLength = event.target.value;
    setGeneratorConfig(newGeneratorConfig);
  };

  const handleCheckboxChecked = (generatorParamName) => {
    const newGeneratorConfig = structuredClone(generatorConfig);
    newGeneratorConfig[generatorParamName] =
      !newGeneratorConfig[generatorParamName];
    setGeneratorConfig(newGeneratorConfig);
  };

  return (
    <div className="app">
      <div className="container">
        <Header headerContent="PASSWORD GENERATOR" />

        <div className="container-body">
          <PasswordDisplay value={generatedPassword} />

          <LengthSlider
            label="Numbers of characters"
            value={generatorConfig.passwordLength}
            min={10}
            max={25}
            onChange={handleSliderChange}
          />

          <div className="checkbox-group">
            <LabeledCheckbox
              label="Include uppercase letters"
              checked={generatorConfig.includesUppercase}
              onChange={() => {
                handleCheckboxChecked("includesUppercase");
              }}
            />

            <LabeledCheckbox
              label="Include lowercase letters"
              checked={generatorConfig.includesLowercase}
              onChange={() => {
                handleCheckboxChecked("includesLowercase");
              }}
            />

            <LabeledCheckbox
              label="Include numbers"
              checked={generatorConfig.includesNumbers}
              onChange={() => {
                handleCheckboxChecked("includesNumbers");
              }}
            />

            <LabeledCheckbox
              label="Include symbols"
              checked={generatorConfig.includesSymbols}
              onChange={() => {
                handleCheckboxChecked("includesSymbols");
              }}
            />
          </div>
        </div>

        <div className="container-footer">
          <button onClick={generateRandomPassword}>generate password</button>
        </div>
      </div>
    </div>
  );
}

export default App;
