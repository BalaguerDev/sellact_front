import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { H3Title } from '../../../styles/GlobalStyles';
import {
  BlockBilling,
  BillingGrow,
  Billing,
  CurrentSales,
  MonthlyTarget,
  GrowthPercentage,
  Percentage,
  ProgressBarContainer,
  ProgressBar
} from '../../../styles/home/HomeStyles';

// Importa la función de utilidades
import { formatCurrency } from '../../../common/utils/utils';

const BillingCard = ({ title, ventas, objetivo, growthPercentage }) => {
  const growth = parseFloat(growthPercentage);
  const isPositive = growth > 0;

  const achievementPercentage = ((ventas / objetivo) * 100).toFixed(2);

  return (
    <BlockBilling>
      <H3Title>{title}</H3Title>
      <BillingGrow>
        <Billing>
          <CurrentSales>{formatCurrency(ventas)}</CurrentSales>
          <MonthlyTarget>/ {formatCurrency(objetivo)}</MonthlyTarget>
        </Billing>
        <GrowthPercentage $isPositive={isPositive}>
          <FontAwesomeIcon icon={isPositive ? faArrowUp : faArrowDown} />&nbsp;
          <Percentage $isPositive={isPositive}>{growthPercentage}</Percentage>
        </GrowthPercentage>
      </BillingGrow>
      <ProgressBarContainer>
        <ProgressBar $percentage={achievementPercentage} />
      </ProgressBarContainer>
    </BlockBilling>
  );
};

BillingCard.propTypes = {
  title: PropTypes.string.isRequired,
  ventas: PropTypes.number.isRequired,
  objetivo: PropTypes.number.isRequired,
  growthPercentage: PropTypes.string.isRequired,
};

export default BillingCard;
