const express = require('express');

const app = express();
const fs = require('fs');
const parser = require('body-parser');

app.use(parser.json());
app.use(express.static('public'));

function comparator(a, b) {
    return b.createdAt - a.createdAt;
}

app.get('/', (req, res) => {
  res.sendFile('/public/Index.html');
});

app.get('/getPhotoPost', (req, res) => {
  const photoPosts = JSON.parse(fs.readFileSync('server/data/posts.json', 'utf8'));
  const i = photoPosts.findIndex(post => req.query.id === post.id);
  if (i !== -1) {
    const post = photoPosts[i];
    post.createdAt = new Date(post.createdAt);
    res.status(200).send(post).end();
  } else {
    res.status(404).end();
  }
});

app.post('/getPhotoPosts', (req, res) => {
  const photoPosts = JSON.parse(fs.readFileSync('server/data/posts.json', 'utf8'));
  photoPosts.forEach((post) => {
    post.createdAt = new Date(post.createdAt);
  });
  photoPosts.sort(comparator);
  res.status(200).send(photoPosts).end();
});

app.delete('/removePhotoPost', (req, res) => {
  const photoPosts = JSON.parse(fs.readFileSync('server/data/posts.json', 'utf8'));
  const i = photoPosts.findIndex(post => req.query.id === post.id);
  if (i !== -1) {
    photoPosts.splice(i, 1);
    fs.writeFileSync('server/data/posts.json', JSON.stringify(photoPosts));
    res.status(200).end();
  } else {
    res.status(404).end();
  }
});

app.post('/addPhotoPost', (req, res) => {
  const photoPosts = JSON.parse(fs.readFileSync('server/data/posts.json', 'utf8'));
  const post = req.body;
  post.createdAt = new Date(post.createdAt);
  photoPosts.push(post);
  fs.writeFileSync('server/data/posts.json', JSON.stringify(photoPosts));
  res.status(200).end();
});

app.put('/editPhotoPost', (req, res) => {
  const photoPosts = JSON.parse(fs.readFileSync('server/data/posts.json', 'utf8'));
  const i = photoPosts.findIndex(post => req.query.id === post.id);
  const post = req.body;
  if (i !== -1) {
    photoPosts[i].description = post.description;
    photoPosts[i].photoLink = post.photoLink;
    fs.writeFileSync('server/data/posts.json', JSON.stringify(photoPosts));
    res.status(200).end();
  }
  res.status(404).end();
});

app.listen(3000, () => {
  console.log('Server is running...');
});
