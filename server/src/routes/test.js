import { Router } from 'express';

let testData = [
    {
        name: 'Jackson',
        age: 25
    },
    {
        name: 'Matt',
        age: 40
    }
];

let router = Router();

router.get('/', (req, res) => {
    res.json(testData);
});

export default router;