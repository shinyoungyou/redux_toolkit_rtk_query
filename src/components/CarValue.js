import { useSelector } from 'react-redux';

function CarValue() {
  const { totalCost } = useSelector(state => state.cars);

  return <div className="car-value">Total Cost: ${totalCost}</div>;
}

export default CarValue;
