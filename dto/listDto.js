exports.parsePagingData = (data) => {
  const { count: totalLists, rows: lists } = data.listsRequest;
  const currentPage = data.page ? data.page : 1;
  const totalPages = Math.ceil(totalLists / data.limit);
  return { totalLists, lists, totalPages, currentPage };
};
