import scrap from "#config/scrap";
import getDetailMovie from "#utils/getDetailMovie";

export const index = async (req, res) => {
  const numPage = req.query.page || 1;
  const detailPage = await scrap(`${req.query.q}`);
  const htmlCode = detailPage.data;
  
  if (!getDetailMovie({ htmlCode })) {
    res.json({
      status: 404,
      message: "not found!",
      query: `${req.query.q}`
    });
  } else {
    const { result, totalPages } = getDetailMovie({ htmlCode });
    res.json({
      data: result,
      totalItems: result.length,
      totalPages,
      currentPage: Number(numPage),
    });
  }
};
