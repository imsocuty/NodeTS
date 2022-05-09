import {Router} from 'express';
const router = Router();
import BoardService from "@services/board-service";

router.get('/', async (req, res, next) => {
    const result = await BoardService.getBoards(req.body);
    if (result) {
        res.render('index',{
            title:result
        })
    } else {
        res.send('로그인 실패')
    }
});

router.get('/', async (req, res, next) => {
    res.render('login')
})

export default router;


