import Router from 'express';
import { getLists, getList, saveList, deleteList, updateList } from '../controllers/controller.js';

const router = Router();
router.get("/get-lists", getLists);
router.get("/get-list", getList);
router.post("/save-list", saveList);
router.post("/delete-list", deleteList);
router.post("/update-list", updateList);

export default router;