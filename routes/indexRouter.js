const { Router } = require("express");

const links = [
    {href: '/', text: 'Home'},
    {href: '/new', text: 'New Message'}
]

const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

const indexRouter = Router()

indexRouter.get('/', (req, res) => {
    res.render("index", {title: "Mini MessageBoard", links, messages});
})

indexRouter.get('/new', (req, res) => {
    res.render("form", {links});
})

indexRouter.post('/new', (req, res) => {
    const lastId = messages.length > 0 ? messages[messages.length - 1].id : 0;
    let messageText = req.body.messageText;
    let messageUser = req.body.author;
    messages.push({ id: lastId + 1, text: messageText, user: messageUser, added: new Date() });
    res.redirect("/");
})

indexRouter.get('/messages/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const message = messages.find(msg => msg.id === id);

    if (!message) {
        return res.status(404).send("Message not found");
    }

    res.render("messageDetails", { title: "Message Details", message, links });
})

module.exports = indexRouter;
