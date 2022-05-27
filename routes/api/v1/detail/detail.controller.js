import scrap from "#config/scrap";
import getDetailMovie from "#utils/getDetailMovie";
import {author, date} from "#config/info"
export const index = async (req, res) => {
  const numPage = req.query.page || 1;
  const detailPage = await scrap(`${req.query.q}`);
  const htmlCode = detailPage.data;
  
  if (!getDetailMovie({ htmlCode })) {
    res.json({
      status: 404,
      message: "not found!",
      query: `${req.query.q}`,
      author: author,
      date: date
    });
  } else {
    const { result } = getDetailMovie({ htmlCode });
    res.json({
      status: 200,
      data: result,
      totalItems: result.length,
      author: author,
      date: date
    });
  }
};
