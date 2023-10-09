import { useEffect } from "react"
// import { getCars } from "../../components/fetchCar";


export const Home = () => {

      useEffect(() => {
        const getCars = async () => {
        //   setIsLoading(true);
          try {
            // const fetch = await getCars();
            // setMovies(fetch);
          } catch (error) {
            // setError(error);
          } finally {
            // setIsLoading(false);
          }
        };
        getCars();
      }, []);
    return (
      <div>
            <div>
                <p>Car brand</p>
        </div>
            <div>
                <p>Price / 1 hour</p>
        </div>
            <div>
                <p>Car mileage / km</p>
            </div>
            <button>Search</button>
      </div>
    );
}