/* eslint-disable import/no-cycle */
import { temp, toggleButton } from './dom';

let value = true;
const toggleTemp = (f) => {
  toggleButton.addEventListener('click', () => {
    const farToCelsius = (f - 32) * (5 / 9);
    const celsiusToFar = (farToCelsius * (9 / 5)) + 32;

    if (!value) {
      temp.innerHTML = `Temperature: ${celsiusToFar.toFixed(2)}`;
      value = !value;
    } else {
      temp.innerHTML = `Temperature: ${farToCelsius.toFixed(2)}`;
      value = !value;
    }
  });
};

export default toggleTemp;