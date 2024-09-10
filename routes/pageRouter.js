const { Router } = require('express');
const router = Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
]

router.get('/', (req, res) => {
    res.render('index', { title: 'index', messages: messages});
})
router.get('/new', (req, res) => {
    res.render('form')
})
// router.post('/message', (req, res) => {
//     res.render('message', { name: messages[req.body.id].user,
//         message: messages[req.body.id].text,
//         date: messages[req.body.id].added,
//       });
// })
router.post('/new', (req, res) => {
    messages.push({
        text: req.body.text,
        user: req.body.name,
        added: new Date(),
    })
    // console.log(req.body);
    res.redirect('/');
})
router.get('/message/:messageId', (req, res) => {
    res.render('message', { name: messages[req.params.messageId].user,
                            message: messages[req.params.messageId].text,
                            date: messages[req.params.messageId].added,
                          });
})

module.exports = router;