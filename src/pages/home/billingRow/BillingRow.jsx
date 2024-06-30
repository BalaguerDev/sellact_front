import { useEffect, useState } from 'react';
import { SecondRow } from '../../../styles/home/HomeStyles';
import BillingCard from './BillingCard';
import { getCurrentMonth, calculateGrowthPercentage } from '../../../common/utils/utils';
import { useUserStore } from '../../../store/useUserStore';

const BillingRow = () => {
  const { userData, fetchUserData } = useUserStore();
  const [loading, setLoading] = useState(true);
  const [ventasAnuales, setVentasAnuales] = useState(0);
  const [objetivoAnual, setObjetivoAnual] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchUserData();
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los datos de usuario:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchUserData]);

  const currentMonth = getCurrentMonth();

  const calculateAnnualData = (objetivosMes) => {
    let ventasTotal = 0;
    let objetivoTotal = 0;

    Object.keys(objetivosMes).forEach((mesKey) => {
      const mes = objetivosMes[mesKey];
      objetivoTotal += mes.objetivo || 0;
      ventasTotal += mes.ventas || 0;
    });

    setVentasAnuales(ventasTotal);
    setObjetivoAnual(objetivoTotal);
  };

  useEffect(() => {
    if (userData?.datos && userData.datos.length > 0) {
      calculateAnnualData(userData.datos[0].objetivos[0]);
    }
  }, [userData]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <SecondRow>
      <BillingCard
        title="Facturación Mensual"
        ventas={userData?.datos?.[0]?.objetivos?.[0]?.[currentMonth]?.ventas || 0}
        objetivo={userData?.datos?.[0]?.objetivos?.[0]?.[currentMonth]?.objetivo || 0}
        growthPercentage={calculateGrowthPercentage(
          userData?.datos?.[0]?.objetivos?.[0]?.[currentMonth]?.ventas || 0,
          userData?.datos?.[0]?.objetivos?.[0]?.[currentMonth]?.objetivo || 0
        )}
      />
      <BillingCard
        title="Facturación Anual"
        ventas={ventasAnuales}
        objetivo={objetivoAnual}
        growthPercentage={calculateGrowthPercentage(ventasAnuales, objetivoAnual)}
      />
    </SecondRow>
  );
};

export default BillingRow;
