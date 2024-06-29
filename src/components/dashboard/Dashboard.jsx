import PropTypes from 'prop-types';
import { DashboardContainer } from '../../styles/GlobalStyles';
import { useSidebarStore } from '../../store/sidebarStore';

const Dashboard = ({ children }) => {
  const isOpen = useSidebarStore(state => state.isOpen);

  return (
    <DashboardContainer isOpen={isOpen}>
      {children}
    </DashboardContainer>
  );
};

Dashboard.propTypes = {
  children: PropTypes.node,
};

export default Dashboard;
