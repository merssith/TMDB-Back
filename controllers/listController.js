const listService = require("../services/listService");
const listDto = require("../dto/listDto");

exports.allLists = (req, res) => {
  let { page } = req.query;
  listService
    .allLists(page)
    .then((lists) => res.status(200).send(listDto.parsePagingData(lists)))
    .catch((err) => res.status(500).send(err));
};

exports.allPublicLists = (req, res) => {
  let { page } = req.query;
  listService
    .allPublicLists(page)
    .then((lists) => res.status(200).send(listDto.parsePagingData(lists)))
    .catch((err) => res.status(500).send(err));
};

exports.myLists = (req, res) => {
  let { page } = req.query;
  const user = req.user;
  listService
    .myLists(page, user)
    .then((lists) => res.status(200).send(listDto.parsePagingData(lists)))
    .catch((err) => res.status(500).send(err));
};

exports.listInformation = (req, res) => {
  const listId = req.params.id;
  listService
    .listInformation(listId)
    .then((list) => res.status(200).send(list))
    .catch((err) => res.status(500).send(err));
};

exports.createList = (req, res) => {
  const list = req.body;
  const user = req.user;
  listService
    .createList(list, user)
    .then((newList) => res.status(201).send(newList))
    .catch((err) => res.status(500).send(err));
};

exports.editMyList = (req, res) => {
  const newList = req.body;
  const user = req.user;
  const id = req.params.id;
  listService
    .editMyList(newList, user, id)
    .then((modifiedList) => res.status(202).send(modifiedList))
    .catch((err) => res.status(500).send(err));
};

exports.deleteMyList = (req, res) => {
  const user = req.user;
  const id = req.params.id;
  listService
    .deleteMyList(user, id)
    .then(() => res.sendStatus(202))
    .catch((err) => res.status(500).send(err));
};

exports.deleteList = (req, res) => {
  const id = req.params.id;
  listService
    .deleteList(id)
    .then(() => res.sendStatus(202))
    .catch((err) => res.status(500).send(err));
};
