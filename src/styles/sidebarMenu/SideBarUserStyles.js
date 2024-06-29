import styled from "styled-components";

export const ContainerUser = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: grid;
  grid-template-columns: 40px 1fr;
`;

export const CircleAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ccc;
`;

export const UserDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserDetailPositionJob = styled.div`
  margin-left: 20px;
  display: grid;
  grid-template-columns: 1fr 50px;
  align-items: center;
`;

export const UserName = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
`;

export const EmployeNum = styled.span`
  margin: 0;
  font-size: 10px;
  font-weight: 100;
  color: #757575;
  margin-left: 50px;
`;

export const EmployePos = styled(EmployeNum)`
  color: #757575;
  margin-left: 20px;
  margin-top: 2px;
`;
