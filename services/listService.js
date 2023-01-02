const sequelize = require("sequelize");
const Op = sequelize.Op;
const { List } = require("../models");

exports.allLists = async (page) => {
  let skipLists = page;
  skipLists >= 1 ? (skipLists -= 1) : null;
  let limit = 12;

  const listsRequest = await List.findAndCountAll({
    order: [["id", "ASC"]],
    attributes: {
      exclude: ["updatedAt", "createdAt", "content"],
    },
    limit: limit,
    offset: page ? skipLists * limit : 0,
    distinct: true,
  });
  if (!listsRequest.rows.length) throw 404;

  return { listsRequest, page, limit };
};

exports.allPublicLists = async (page) => {
  let skipLists = page;
  skipLists >= 1 ? (skipLists -= 1) : null;
  let limit = 12;

  const listsRequest = await List.findAndCountAll({
    where: {
      public: true,
    },
    order: [["id", "ASC"]],
    attributes: {
      exclude: ["updatedAt", "createdAt", "content"],
    },
    limit: limit,
    offset: page ? skipLists * limit : 0,
    distinct: true,
  });
  if (!listsRequest.rows.length) throw 404;

  return { listsRequest, page, limit };
};

exports.myLists = async (page, user) => {
  let skipLists = page;
  skipLists >= 1 ? (skipLists -= 1) : null;
  let limit = 12;

  const listsRequest = await List.findAndCountAll({
    where: {
      userId: user.id,
    },
    order: [["id", "ASC"]],
    attributes: {
      exclude: ["updatedAt", "createdAt", "content"],
    },
    limit: limit,
    offset: page ? skipLists * limit : 0,
    distinct: true,
  });
  if (!listsRequest.rows.length) throw 404;

  return { listsRequest, page, limit };
};

exports.listInformation = async (id) => {
  if (isNaN(id)) throw 400;
  const list = await List.findByPk(id, {
    attributes: {
      exclude: ["updatedAt", "createdAt"],
    },
  });
  if (!list) throw 404;
  return list;
};

exports.createList = async (list, user) => {
  if (Object.keys(list).length === 0) throw 400;
  let newList = "";
  if (list.userId) {
    newList = list;
  } else {
    newList = {
      name: list.name,
      content: list.content,
      public: list.public,
      userId: user.id,
    };
  }
  const createList = await List.create(newList);
  return createList;
};

exports.editMyList = async (newList, user, id) => {
  if (isNaN(id)) throw 400;
  const list = await List.findByPk(id);
  if (!list) throw 404;
  if (Object.keys(newList).length === 0) return 400;
  if (user.id != list.userId) throw 401;
  const editedList = await list.update(newList);
  return editedList;
};

exports.deleteMyList = async (user, id) => {
  if (isNaN(id)) throw 400;
  const list = await List.findByPk(id);
  if (!list) throw 404;
  if (user.id != list.userId) throw 401;
  return List.destroy({ where: { id } });
};

exports.deleteList = async (id) => {
  if (isNaN(id)) throw 400;
  const list = await List.findByPk(id);
  if (!list) throw 404;
  return List.destroy({ where: { id } });
};
