import { useEffect } from "react";
import { PageContainer } from "../../styles/GlobalStyles";
import { useUserStore } from "../../store/useUserStore";
import FirstRowCompon from './firstRowCompon/FirstRow';
import BillingRow from './billingRow/BillingRow';

const Home = () => {
  const { fetchUserData } = useUserStore();

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);


  return (
    <PageContainer>
      <FirstRowCompon/>

      <BillingRow/>

    </PageContainer>
  );
};

export default Home;
