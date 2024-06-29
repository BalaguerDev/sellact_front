import { useEffect } from "react";
import PropTypes from "prop-types";

import { CircleAvatar, ContainerUser, EmployeNum, EmployePos, UserDetailContainer, UserDetailPositionJob, UserName } from '../../../styles/sidebarMenu/SideBarUserStyles';
import { useUserStore } from '../../../store/useUserStore';

const SideBarUser = ({ isOpen }) => {
  const { userData, isLoading, error, fetchUserData } = useUserStore();

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ContainerUser>
      <CircleAvatar src={userData?.user?.img} alt="User Avatar" />
      {isOpen && (
        <UserDetailContainer>
          <UserDetailPositionJob>
            <UserName>{userData?.user?.name}</UserName>
            <EmployeNum>{userData?.user?.employeNum}</EmployeNum>
          </UserDetailPositionJob>
          <EmployePos>{userData?.user?.position}</EmployePos>
        </UserDetailContainer>
      )}
    </ContainerUser>
  );
};

SideBarUser.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default SideBarUser;