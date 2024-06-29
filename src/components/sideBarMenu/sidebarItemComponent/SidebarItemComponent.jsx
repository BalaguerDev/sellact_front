import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { SidebarItem, SidebarItemText } from '../../../styles/sidebarMenu/SideBarItemsStyles';

const SidebarItemComponent = ({
  item,
  isOpen,
  isSelected,
  isHovered,
  onItemClick,
  onItemHover,
  onItemLeave,
}) => (
  <SidebarItem
    to={item.to}
    isOpen={isOpen}
    onClick={onItemClick}
    onMouseEnter={onItemHover}
    onMouseLeave={onItemLeave}
    isSelected={isSelected}
    isHovered={isHovered}
  >
    <FontAwesomeIcon
      icon={item.icon}
      className="icon"
      style={{
        color: isHovered || isSelected ? '#FFFFFF' : '#9197B3',
      }}
    />
    {isOpen && (
      <SidebarItemText isOpen={isOpen}>
        {item.label}
        <FontAwesomeIcon icon={faChevronRight} className="chevron-icon" />
      </SidebarItemText>
    )}
  </SidebarItem>
);

SidebarItemComponent.propTypes = {
  item: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  isHovered: PropTypes.bool.isRequired,
  onItemClick: PropTypes.func.isRequired,
  onItemHover: PropTypes.func.isRequired,
  onItemLeave: PropTypes.func.isRequired,
};

export default SidebarItemComponent;
