import { useEffect } from "react"
import { getCars } from "../../components/fetchCar";


export const Home = () => {

      useEffect(() => {
        const getMovies = async () => {
        //   setIsLoading(true);
          try {
            const fetch = await getCars();
            // setMovies(fetch);
          } catch (error) {
            // setError(error);
          } finally {
            // setIsLoading(false);
          }
        };
        getMovies();
      }, []);
    return (
        <div>Home</div>
    )
}