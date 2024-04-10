import axios from 'axios';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTllNTBiNTdhZDhjM2ZkOGRiMDdmYzExZDUxOGZkNyIsInN1YiI6IjY1ZWJiZmU3OGM0NGI5MDE3YzA3NWZjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wgGzPiyuGoaLSdaYbiVcyid2YSiFHgEHIOolcg55-e8';
const fetchTrendMovies = async url => {
  try {
    const fetchInfo = await axios.get(url, {
      accept: 'application/json',
    });
    const { data } = fetchInfo;
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export { fetchTrendMovies };