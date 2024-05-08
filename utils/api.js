const fetchData = async (category) => {
  try {
    const result = await fetch(
      `https://ishop-backend-5skc.onrender.com/api/store/filter?category=${category}`
    );
    if (!result.ok) {
      throw new Error(`HTTP error! Status: ${result.status}`);
    }
    // const data = await result.json();
    return result;
  } catch (error) {
    console.error("Error during fetchData:", error);
    throw error;
  }
};
export default fetchData;
