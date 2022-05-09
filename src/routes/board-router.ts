import {Router} from 'express';
const router = Router();
import BoardService from "@services/board-service";


router.get('/', async (req, res, next) => {
    const result = await BoardService.getBoards(req.body);
    console.log(result);
    if (result) {
        res.render('board', {result})
    }
});

export default router;


