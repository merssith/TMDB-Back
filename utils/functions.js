function generateUUID() {
  var d = new Date().getTime();
  var d2 =
    (typeof performance !== "undefined" &&
      performance.now &&
      performance.now() * 1000) ||
    0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = Math.random() * 16;
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

function getPagingDataUsers(data, page, limit) {
  const { count: totalUsers, rows: users } = data;
  const currentPage = page ? page : 1;
  const totalPages = Math.ceil(totalUsers / limit);
  return { totalUsers, users, totalPages, currentPage };
}

function getPagingDataLists(data, page, limit) {
  const { count: totalLists, rows: lists } = data;
  const currentPage = page ? page : 1;
  const totalPages = Math.ceil(totalLists / limit);
  return { totalLists, lists, totalPages, currentPage };
}

module.exports = { generateUUID, getPagingDataUsers, getPagingDataLists };
