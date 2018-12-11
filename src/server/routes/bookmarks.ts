import * as express from "express";
import Bookmark from "../models/Bookmark";

const router = express.Router();

router.route("/create").post((req, res) => {
  const bookmark = new Bookmark(req.body);

  bookmark
    .save()
    .then(() => res.status(201).send())
    .catch(error => res.status(400).send(error));
});

router.route("/").get((_, res) => {
  Bookmark.find((error, bookmarks) => {
    if (error) {
      res.status(500).send(error);
      return;
    }

    res.json(bookmarks);
  });
});

export default router;
