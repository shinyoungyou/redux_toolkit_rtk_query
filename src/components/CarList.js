import { useDispatch, useSelector } from 'react-redux';
import { removeCar } from '../store/slices/carsSlice';

function CarList() {
  const { cars, searchTerm } = useSelector((state)=>state.cars);
  const { name } = useSelector((state)=>state.form);
  const dispatch = useDispatch();

  const handleCarDelete = (car) => {
    console.log(car);
    dispatch(removeCar(car.id));
  };

  const handleSearchCars = () => {
    if (searchTerm == ''){
      return renderedCars;
    } else {
      renderedCars = cars.filter((car)=>{
        car.name.includes(searchTerm);

      })
    }
    
  }

  const renderedCars = cars?.map((car) => {
    // DECIDE IF THIS CAR SHOULD BE BOLD
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold && 'bold'}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}

export default CarList;
