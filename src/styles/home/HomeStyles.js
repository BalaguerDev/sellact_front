import styled from "styled-components";

export const FirstRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
`;
export const SpanDifference = styled.span`
 font-size:12px;
 color:#999;
 font-weight:100;
`;

export const SecondRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
`;

export const BlockBilling = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const BillingGrow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Billing = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CurrentSales = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #225282;
`;

export const MonthlyTarget = styled.div`
  font-size: 14px;
  color: #225282;
`;

export const GrowthPercentage = styled.div`
  color: ${(props) => (props.$isPositive ? '#00ca92' : '#ff000091')};
  display: flex;
  align-items: center;
`;

export const ArrowIcon = styled.span`
  color: #333;
  font-size: 14px;
  margin-left: 10px;
`;

export const Percentage = styled.span`
  font-size: 12px;
  color: ${(props) => (props.$isPositive ? '#00ca92' : '#ff000091')};
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 10px;
`;

export const ProgressBar = styled.div`
  height: 10px;
  width: ${(props) => props.$percentage}%;
  background-color: ${(props) => (props.$percentage >= 100 ? '#00ca92' : '#ff000091')};
  transition: width 0.5s ease-in-out;
  border-radius: inherit;
`;
