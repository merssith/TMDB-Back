exports.parsePagingData = (data) => {
  const { count: totalUsers, rows: users } = data.usersRequest;
  const currentPage = data.page ? data.page : 1;
  const totalPages = Math.ceil(totalUsers / data.limit);
  return { totalUsers, users, totalPages, currentPage };
};
