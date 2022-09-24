import styled from "styled-components";

const StyledImg = styled.img`
  position: ${({ sposition }) => sposition};
  width: ${({ swidth }) => swidth};
  height: ${({ sheight }) => sheight};
  top: ${({ stop }) => stop};
  transform: translateY(${({ stranslateY }) => stranslateY});
  right: ${({ sright }) => sright};
  margin-left: ${({ smarginLeft }) => smarginLeft};
  @media (max-width: 767px) {
    margin-left: 5px;
  }
`;

const CustomImg = (props) => {
  return <StyledImg {...props} />;
};

export default CustomImg;
