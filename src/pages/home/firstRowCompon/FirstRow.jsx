import { useEffect, useState } from "react";
import SearchBar from "../../../components/searchBar/SearchBar";
import { H2Title } from "../../../styles/GlobalStyles";
import { useUserStore } from "../../../store/useUserStore";
import { getCurrentMonth, getGreetingTime, formatCurrency } from "../../../common/utils/utils";
import { FirstRow, SpanDifference } from "../../../styles/home/HomeStyles";

const FirstRowCompon = () => {
  const { userData, fetchUserData } = useUserStore();
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  useEffect(() => {
    if (userData?.datos && userData.datos.length > 0) {
      const currentMonth = getCurrentMonth();
      const ventas = userData.datos[0].objetivos[0][currentMonth]?.ventas || 0;
      const objetivo = userData.datos[0].objetivos[0][currentMonth]?.objetivo || 0;
      const difference = objetivo - ventas;

      if (difference > 0) {
        setMessage(`te faltan ${formatCurrency(difference)} para cumplir objetivo`);
      } else {
        setMessage(`¡Ya cumpliste el objetivo!`);
      }
    }
  }, [userData]);

  const greetingTime = getGreetingTime();

  return (
    <FirstRow>
      <H2Title>
        {greetingTime} {userData?.user?.name}, <SpanDifference>{message}</SpanDifference>
        </H2Title>      <SearchBar />
    </FirstRow>
  );
};

export default FirstRowCompon;
