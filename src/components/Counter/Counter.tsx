import Button from "../Button/Button";

import { CounterWrapper, ButtonControl, Count } from "./styles";
import { CounterProps } from "./types";

function Counter({ count, onPlus, onMinus, onDived, onMultiply }: CounterProps) {
  return (
    <CounterWrapper>
      <ButtonControl>
        <Button name="/" onClick={onDived} />
        <ButtonControl>
        <Button name="-" onClick={onMinus} />
      </ButtonControl>
      </ButtonControl>
      <Count>{count}</Count>
      <ButtonControl>
      <ButtonControl>
        <Button name="+" onClick={onPlus} />
      </ButtonControl>
        <Button name="*" onClick={onMultiply} />
      </ButtonControl>
    </CounterWrapper>
  );
}

export default Counter;
