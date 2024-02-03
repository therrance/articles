import express from "express";
import articleController from "../controllers/articleController";

const router = express.Router();

// Route: /api/articles (GET - Retrieve all articles)
router.get("/", articleController.getAllArticles);

// Route: /api/articles/:id (GET - Retrieve a specific article by ID)
router.get("/:id", articleController.getArticleById);

// Route: /api/articles (POST - Create a new article)
router.post("/", articleController.createArticle);

// Route: /api/articles/:id (PUT - Update a specific article by ID)
router.put("/:id", articleController.updateArticle);

// Route: /api/articles/:id (DELETE - Delete a specific article by ID)
router.delete("/:id", articleController.deleteArticle);

export default router;
