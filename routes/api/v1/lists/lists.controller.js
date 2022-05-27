import getListCategory from "#utils/getListCategory";
import {author, date} from "#config/info"
export const index = async (req, res) => {
  const { category } = req.params;
  const categoriesResult = await getListCategory(category);

  res.json({ 
    data: categoriesResult, 
    totalCategory: categoriesResult.length,
    author: author,
    date: date
  });
};
