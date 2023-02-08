const URL = "https://opentdb.com/api.php?amount=10";

const fetchTriviaData = async () => {
  try {
    const result = await fetch(URL).then((res) => res.json());

    return result.results;
  } catch (error) {
    console.log(error);
  }
};

export { fetchTriviaData };
