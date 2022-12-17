
const GetData = async (setData, setIsLoaded) =>
{
    fetch("/data")
        .then((res) => res.json())
        .then(
            (result) =>
            {
                setData(result.message);
                setIsLoaded(true);
                console.log(`Data from backend is: + ${result.message}`);
            },
            (error) =>
            {
                console.log("Error loading data:");
                console.log(error);
            }
        );
}

export default GetData;