import express from "express";
import AlbumModel from "../models/album.model.js";

const albumRoute = express.Router();

//ALBUMS ROUTES

//POST
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

//GET ALBUMS
albumRoute.get("/albums", async (req, res) => {
  try {
    const albums = await AlbumModel.find({});

    return res.status(200).json(albums);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.errors);
  }
});

//GET ALBUM BY ID
albumRoute.get("/albums/:albumId", async (req, res) => {
  try {
    const { albumId } = req.params;

    const album = await AlbumModel.findById(albumId);

    if (!album) {
      return res.status(400).json({ msg: " User not found" });
    }

    return res.status(200).json(album);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.errors);
  }
});

//EXPORT
export default albumRoute;
