import { useEffect } from 'react';
import { H2Title, PageContainer } from '../../styles/GlobalStyles';
import { useUserStore } from '../../store/useUserStore';

const Home = () => {
  const { userData, fetchUserData } = useUserStore();

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  return (
    <PageContainer>
      <H2Title>Buenos {userData?.user?.name}👋🏼</H2Title>
    </PageContainer>
  );
};

export default Home;
