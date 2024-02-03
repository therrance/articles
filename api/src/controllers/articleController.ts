import { Request, Response } from "express";
import Article from "../models/Article";

const articleController = {
  getAllArticles: async (req: Request, res: Response) => {
    try {
      const articles = await Article.find();
      res.json(articles);
    } catch (error) {
      console.error("Error fetching articles:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getArticleById: async (req: Request, res: Response) => {
    try {
      const article = await Article.findById(req.params.id);
      if (!article) {
        return res.status(404).json({ error: "Article not found" });
      }
      res.json(article);
    } catch (error) {
      console.error("Error fetching article by ID:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createArticle: async (req: Request, res: Response) => {
    try {
      const newArticle = await Article.create(req.body);
      res.status(201).json(newArticle);
    } catch (error) {
      console.error("Error creating article:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateArticle: async (req: Request, res: Response) => {
    try {
      const updatedArticle = await Article.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedArticle) {
        return res.status(404).json({ error: "Article not found" });
      }
      res.json(updatedArticle);
    } catch (error) {
      console.error("Error updating article:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteArticle: async (req: Request, res: Response) => {
    try {
      const deletedArticle = await Article.findByIdAndDelete(req.params.id);
      if (!deletedArticle) {
        return res.status(404).json({ error: "Article not found" });
      }
      res.json(deletedArticle);
    } catch (error) {
      console.error("Error deleting article:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

export default articleController;
