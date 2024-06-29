import { useState, useEffect } from "react";
import { menuItems } from "../../common/utils/menuItems/menuItems";
import { SidebarContainer, SidebarItemContainer } from "../../styles/sidebarMenu/SideBarStyles";
import SidebarLogo from "./sidebarLogo/SidebarLogo";
import SideBarUser from "./sidebarUser/SideBarUser";
import SidebarItemComponent from './sidebarItemComponent/SidebarItemComponent';
import { useLocation } from "react-router-dom";
import { useSidebarStore } from '../../store/sidebarStore';

const SidebarMenu = () => {
  const { isOpen, toggleSidebar } = useSidebarStore();
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const activeMenuItem = menuItems.findIndex(item => item.to === location.pathname);
    setSelectedItem(activeMenuItem !== -1 ? activeMenuItem : null);
  }, [location]);

  const handleItemClick = (index) => {
    setSelectedItem(index === selectedItem ? null : index);
    toggleSidebar();
  };

  return (
    <SidebarContainer
      isOpen={isOpen}
      onMouseEnter={() => !isOpen && toggleSidebar()}
      onMouseLeave={() => isOpen && toggleSidebar()}
    >
      <SidebarLogo />
      {menuItems.map((item, index) => (
        <SidebarItemContainer key={index}>
          <SidebarItemComponent
            item={item}
            isOpen={isOpen}
            isSelected={index === selectedItem}
            isHovered={index === hoveredIndex}
            onItemClick={() => handleItemClick(index)}
            onItemHover={() => setHoveredIndex(index)}
            onItemLeave={() => setHoveredIndex(null)}
          />
        </SidebarItemContainer>
      ))}
      <SideBarUser isOpen={isOpen} />
    </SidebarContainer>
  );
};

export default SidebarMenu;
