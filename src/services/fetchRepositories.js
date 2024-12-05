import axios from "axios";

const fetchRepositories = async (page) => {
  const date = new Date();
  date.setDate(date.getDate() - 10); // 10 days ago
  const formattedDate = date.toISOString().split("T")[0];

  try {
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=created:>${formattedDate}&sort=stars&order=desc&page=${page}`
    );
    return response.data.items;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    return [];
  }
};

export default fetchRepositories;
