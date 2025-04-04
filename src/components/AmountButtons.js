import styled from "styled-components";
import { Wrapper as CartItemWrapper } from "./CartItem";
import { FaPlus, FaMinus } from "react-icons/fa";
import { toast } from "react-toastify";

const AmountButtons = ({ amount, id, stock, toggleAmount }) => {
  const onMinusClick = () => {
    if (amount - 1 >= 1) {
      toggleAmount(-1, id);
    }
  };

  const onPlusClick = () => {
    if (amount + 1 <= stock) {
      toggleAmount(1, id);
    } else {
      toast.warn(`"Only ${stock} left."`);
    }
  };
  return (
    <Wrapper>
      <FaMinus onClick={onMinusClick} />
      <span>{amount}</span>
      <FaPlus onClick={onPlusClick} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 10px 0;

  span {
    font-size: 30px;
    font-weight: bold;
  }
  ${CartItemWrapper} & {
    display: flex;
    align-items: center;
    gap: 18px;
    padding: 10px 0;
    font-size: 16px;
    span {
      font-size: 18px;
      font-weight: bold;
    }
    @media (min-width: 768px) {
      gap: 20px;
      font-size: 16px;
      span {
        font-size: 18px;
      }
    }
  }
`;

export default AmountButtons;
