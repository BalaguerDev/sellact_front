import imagotipoFullColor from '../../../assets/logo/imagotipo_fullcolor.png';
import sellactFullColor from '../../../assets/logo/sellact_fullcolor.png';
import { useSidebarStore } from '../../../store/sidebarStore';
import { ImgLogo, LogoContainer } from '../../../styles/sidebarMenu/SideBarLogoStyles';

const SidebarLogo = () => {
  const { isOpen } = useSidebarStore();

  return (
    <LogoContainer>
      <ImgLogo
        src={isOpen ? sellactFullColor : imagotipoFullColor}
        alt={isOpen ? 'sellact logo' : 'imagotipo sellact'}
      />
    </LogoContainer>
  );
};

export default SidebarLogo;
