import express from "express";
import AlbumModel from "../models/album.model.js";

const albumRoute = express.Router();

//ROUTES
albumRoute.post("/create-album", async (req, res) => {
  try {
    const form = req.body;

    const newAlbum = await AlbumModel.create(form);

    return res.status(201).json(newAlbum);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.errors);
  }
});

//EXPORT
export default albumRoute;
