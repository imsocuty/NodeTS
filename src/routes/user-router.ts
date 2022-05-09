import {Router} from 'express';
const router = Router();
import UsersService from "../services/user-service";

router.post('/', async (req, res, next) => {
    const result = await UsersService.getUsers(req.body);
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
