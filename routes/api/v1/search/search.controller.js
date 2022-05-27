import api from "#config/api";
import getMovieData from "#utils/getMovieData";
import {author, date} from "#config/info"
export const index = async (req, res) => {
  const numPage = req.query.page || 1;
  const searchPage = await api(`/page/${numPage}?s=${req.query.q}`);
  const htmlCode = searchPage.data;

  
  if (!getMovieData({ htmlCode })) {
    res.json({
      status: 404,
      message: "not found!",
      query: `${req.query.q}`,
      author: author,
      date: date
    });
  } else {
    const { result, totalPages } = getMovieData({ htmlCode });
    res.json({
      status: 200,
      data: result,
      totalItems: result.length,
      totalPages,
      currentPage: Number(numPage),
      author: author,
      date: date
    });
  }
};
