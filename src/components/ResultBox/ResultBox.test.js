import ResultBox from './ResultBox';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Component ResultBox', () => {

  const testCases = [
    { amount: 100, from: 'PLN', to: 'USD', output: 'PLN 100.00 = $28.57' },
    { amount: 20, from: 'USD', to: 'PLN', output: '$20.00 = PLN 70' },
    { amount: 200, from: 'PLN', to: 'USD', output: 'PLN 200.00 = $57.14' },
    { amount: 345, from: 'USD', to: 'PLN', output: '$345.00 = PLN 1,207.50' },
    { amount: 222, from: 'PLN', to: 'PLN', output: 'PLN 222.00 = PLN 222.00' },
  ]; 


  for (const testObj of testCases) {
    it('should render proper info about conversion when PLN -> USD', () => {
      render(
        <ResultBox
          from={testObj.from}
          to={testObj.to}
          amount={testObj.amount}
        />
      );
      const output = screen.getByTestId('output');

      expect(output).toHaveTextContent(testObj.output);

      cleanup();

    });
  };
});