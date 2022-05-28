import scrap from "#config/scrap";
import {author, date} from "#config/info"
import getLinkDownload from "#utils/getLinkDownload";
export const index = async (req, res) => {
  const numPage = req.query.page || 1;
  const detailPage = await scrap(`${req.query.url}`);
  const htmlCode = detailPage.data;
  
  if (!getLinkDownload({ htmlCode })) {
    res.json({
      status: 404,
      message: "not found!",
      query: `${req.query.url}`,
      author: author,
      date: date
    });
  } else {
    const { result } = getLinkDownload({ htmlCode });
    res.json({
      status: 200,
      data: result,
      totalItems: result.length,
      author: author,
      date: date
    });
  }
};
