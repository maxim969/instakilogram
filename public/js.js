let photoPosts = [

  {
    id: '1',
    description: 'Очень классный бургер',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Rachok Maxim',
    photoLink: 'burger6.jpg',
  },


  {
    id: '2',
    description: 'Очень классный бургер',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Rachok Maxim',
    photoLink: 'burger5.jpg',
  },


  {
    id: '3',
    description: 'Очень классный бургер',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Rachok Maxim',
    photoLink: 'burger7.jpg',
  },
  {
    id: '4',
    description: 'Очень классный бургер',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Rachok Maxim',
    photoLink: 'burger8.jpg',
  },
  {
    id: '5',
    description: 'Очень классный бургер',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Rachok Maxim',
    photoLink: 'burger9.jpg',
  },
  {
    id: '6',
    description: 'Очень классный бургер',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Rachok Maxim',
    photoLink: 'burger6.jpg',
  },
  {
    id: '7',
    description: 'Очень классный бургер',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Rachok Maxim',
    photoLink: 'burger5.jpg',
  },
  {
    id: '8',
    description: 'Очень классный бургер',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Rachok Maxim',
    photoLink: 'burger7.jpg',
  },
  {
    id: '9',
    description: 'Очень классный бургер',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Rachok Maxim',
    photoLink: 'burger8.jpg',
  },
  {
    id: '10',
    description: 'Очень классный бургер',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Rachok Maxim',
    photoLink: 'burger9.jpg',
  },
  {
    id: '11',
    description: 'Очень классный бургер',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Rachok Maxim',
    photoLink: 'burger6.jpg',
  },


  {
    id: '12',
    description: 'Очень классный бургер',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Rachok Maxim',
    photoLink: 'burger5.jpg',
  },


  {
    id: '13',
    description: 'Очень классный бургер',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Rachok Maxim',
    photoLink: 'burger7.jpg',
  },
  {
    id: '14',
    description: 'Очень классный бургер',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Rachok Maxim',
    photoLink: 'burger8.jpg',
  },
  {
    id: '15',
    description: 'Очень классный бургер',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Rachok Maxim',
    photoLink: 'burger9.jpg',
  },
  {
    id: '16',
    description: 'Очень классный бургер',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Rachok Maxim',
    photoLink: 'burger6.jpg',
  },
  {
    id: '17',
    description: 'Очень классный бургер',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Rachok Maxim',
    photoLink: 'burger5.jpg',
  },
  {
    id: '18',
    description: 'Очень классный бургер',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Rachok Maxim',
    photoLink: 'burger7.jpg',
  },
  {
    id: '19',
    description: 'Очень классный бургер',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Rachok Maxim',
    photoLink: 'burger8.jpg',
  },
  {
    id: '20',
    description: 'Очень классный бургер',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Rachok Maxim',
    photoLink: 'burger9.jpg',
  },


];

const filling = (function () {
  const searchPost = function (id) {
    if (typeof id !== 'string') {
      return false;
    }
    return photoPosts.findIndex((post) => {
      if (post.id === id) {
        return true;
      }
      return false;
    });
  };

  const getPhotoPost = function (id) {
    if (typeof id !== 'string') {
      return null;
    }
    const i = searchPost(id);
    if (i !== -1) {
      return photoPosts[i];
    }
    return null;
  };

  const validatePhotoPost = function (post) {
    if (typeof post !== 'object') {
      return false;
    }
    const validate = {
      id() {
        if (typeof post.id !== 'string') {
          return false;
        }
        return true;
      },
      description() {
        if (typeof post.description !== 'string' || post.description.length >= 200) {
          return false;
        }
        return true;
      },
      createdAt() {
        if (typeof post.createdAt !== 'object') {
          return false;
        }
        return true;
      },
      author() {
        if (typeof post.author !== 'string' || post.author.length === 0) {
          return false;
        }
        return true;
      },
      photoLink() {
        if (typeof post.photoLink !== 'string' || post.photoLink.length === 0) {
          return false;
        }
        return true;
      },
    };
    for (const key in validate) {
      if (validate[key]() === false) {
        return false;
      }
    }
    return true;
  };

  const addPhotoPost = function (post) {
    if (typeof post !== 'object') {
      return false;
    }
    if (validatePhotoPost(post)) {
      photoPosts.push(post);
      return true;
    }
    return false;
  };

  const removePhotoPost = function (id) {
    if (typeof id !== 'string') {
      return false;
    }
    const i = searchPost(id);
    if (i !== -1) {
      photoPosts.splice(i, 1);
      return true;
    }
    return false;
  };

  const getPhotoPosts = function () {};

  const editPhotoPost = function (id, post) {
    if (typeof id !== 'string') {
      return false;
    }
    if (typeof post !== 'object') {
      return false;
    }
    const i = searchPost(id);
    if (i !== -1) {
      if (typeof post.description === 'string') {
        photoPosts[i].description = post.description;
      }
      if (typeof post.photoLink === 'string') {
        photoPosts[i].photoLink = post.photoLink;
      }
      return true;
    }
    return false;
  };

  return {
    searchPost,
    getPhotoPosts,
    getPhotoPost,
    validatePhotoPost,
    addPhotoPost,
    editPhotoPost,
    removePhotoPost,
  };
}());


let user = null;
// let user =  'Maxim';

const users = [
  {
    name: 'Maxim',
    password: '1234567890',
  },
  {
    name: 'Rachok Maxim',
    password: '1',
  },
  {
    name: '1',
    password: '1',
  },
];

const dom = (function () {
  function getPhotoPost(photoPost) {
    const post = document.createElement('div');
    post.setAttribute('class', 'post');
    post.setAttribute('id', photoPost.id);

    const name = document.createElement('div');
    name.setAttribute('class', 'post-name');
    name.textContent = photoPost.author;
    post.appendChild(name);

    const description = document.createElement('div');
    description.setAttribute('class', 'post-description');
    description.textContent = photoPost.description;
    post.appendChild(description);

    const image = document.createElement('img');
    image.setAttribute('src', photoPost.photoLink);
    image.setAttribute('class', 'photo');
    post.appendChild(image);

    // var like= document.createElement('img');
    // like.setAttribute('src','like.jpg');
    // like.setAttribute('class','like');
    // post.appendChild(like);
    if (photoPost.author === user) {
      const edit = document.createElement('img');
      edit.setAttribute('src', 'edit.jpg');
      edit.setAttribute('pID', photoPost.id);
      edit.addEventListener('click', controller.editFieldEvent);
      edit.setAttribute('class', 'edit');
      post.appendChild(edit);

      const bin = document.createElement('img');
      bin.setAttribute('src', 'bin.jpg');
      bin.setAttribute('pID', photoPost.id);
      bin.addEventListener('click', controller.removeEvent);
      bin.setAttribute('class', 'bin');
      post.appendChild(bin);
    }

    const time = document.createElement('div');
    time.setAttribute('class', 'text');
    time.textContent = photoPost.createdAt;
    post.appendChild(time);

    return post;
  }

  const showPhotoPosts = function (photoPosts) {
    const block = document.getElementsByClassName('block')[0];
    const length = block.childNodes.length;
    for (let i = length - 1; i > -1; i--) {
      block.removeChild(block.childNodes[i]);
    }
    photoPosts.forEach((post) => {
      block.appendChild(getPhotoPost(post));
    });
  };

  const editPhotoPost = function (id, photoPost) {
    const block = document.getElementsByClassName('block')[0];
    const posts = Array.prototype.slice.call(block.childNodes);
    const edPost = posts.find(post => post.id === id);
    block.replaceChild(getPhotoPost(photoPost), edPost);
  };

  const addPhotoPost = function (photoPost) {
    const block = document.getElementsByClassName('block')[0];
    block.insertBefore(getPhotoPost(photoPost), block.firstChild);
  };

  const removePhotoPost = function (id) {
    const block = document.getElementsByClassName('block')[0];
    const posts = Array.prototype.slice.call(block.childNodes);
    const remPost = posts.find(post => post.id === id);
    if (remPost !== undefined) {
      remPost.remove();
    }
  };

  const getEditField = function (photoPost) {
    const field = document.createElement('form');
    field.setAttribute('name', 'editField');
    field.setAttribute('class', 'editfield');
    field.setAttribute('id', photoPost.id);

    let label = document.createElement('label');
    label.textContent = 'Desc';
    field.appendChild(label);

    let textarea = document.createElement('textarea');
    textarea.value = photoPost.description;
    textarea.setAttribute('name', 'description');
    field.appendChild(textarea);

    label = document.createElement('label');
    label.textContent = 'src';
    field.appendChild(label);

    textarea = document.createElement('textarea');
    textarea.value = photoPost.photoLink;
    textarea.setAttribute('name', 'src');
    field.appendChild(textarea);

    const button = document.createElement('button');
    button.addEventListener('click', controller.editEvent);
    button.setAttribute('pID', photoPost.id);
    button.textContent = 'Ok';
    field.appendChild(button);
    return field;
  };

  const getAddField = function () {
    const field = document.createElement('form');
    field.setAttribute('name', 'addField');
    field.setAttribute('class', 'addfield');

    let label = document.createElement('label');
    label.textContent = 'Description';
    field.appendChild(label);

    let textarea = document.createElement('textarea');
    textarea.setAttribute('name', 'description');
    textarea.setAttribute('class', 'add_field');
    field.appendChild(textarea);

    label = document.createElement('label');
    label.textContent = 'photo';
    field.appendChild(label);

    textarea = document.createElement('textarea');
    textarea.setAttribute('name', 'src');
    textarea.setAttribute('class', 'add_field');
    field.appendChild(textarea);

    const button = document.createElement('button');
    button.addEventListener('click', controller.addEvent);
    button.textContent = 'Ok';
    button.setAttribute('class', 'ok_button');
    field.appendChild(button);
    return field;
  };
  const addEditField = function (id) {
    const block = document.getElementsByClassName('block')[0];
    const posts = Array.prototype.slice.call(block.childNodes);
    const edPost = posts.find(post => post.id === id);
    block.replaceChild(getEditField(filling.getPhotoPost(id)), edPost);
  };

  const showUser = function () {
    userOfLS();
    const userField = document.forms.userField;
    const length = userField.childNodes.length;
    for (let i = length - 1; i > -1; i--) {
      userField.removeChild(userField.childNodes[i]);
    }
    if (user != null) {
      const button = document.createElement('button');
      button.textContent = 'Add photo post';
      button.setAttribute('class', 'addphoto');
      button.addEventListener('click', controller.addFieldEvent);
      userField.appendChild(button);

      const label = document.createElement('label');
      label.textContent = user;
      userField.appendChild(label);

      const img = document.createElement('img');
      img.setAttribute('src', 'logout.jpg');
      img.setAttribute('class', 'logout');
      img.addEventListener('click', controller.exitEvent);
      userField.appendChild(img);
    } else {
      let label = document.createElement('label');
      label.textContent = 'Логин';
      userField.appendChild(label);

      let name = document.createElement('textarea');
      name.setAttribute('name', 'name');
      userField.appendChild(name);

      label = document.createElement('label');
      label.textContent = 'Пароль';
      userField.appendChild(label);

      name = document.createElement('textarea');
      name.setAttribute('name', 'password');
      userField.appendChild(name);

      const img = document.createElement('img');
      img.setAttribute('src', 'logout.jpg');
      img.setAttribute('class', 'like');
      img.addEventListener('click', controller.loginEvent);
      userField.appendChild(img);
    }
  };


  const addAddField = function () {
    const block = document.getElementsByClassName('block')[0];
    block.insertBefore(getAddField(), block.firstChild);
  };

  return {
    showPhotoPosts,
    removePhotoPost,
    editPhotoPost,
    addPhotoPost,
    addEditField,
    getEditField,
    showUser,
    addAddField,
    getAddField,
  };
}());


let controller = (function () {
  const removeEvent = function () {
    removePhotoPost(this.getAttribute('pID'));
  };
  const editFieldEvent = function () {
    dom.addEditField(this.getAttribute('pID'));
  };
  const editEvent = function () {
    const photoPost = {
      description: document.forms.editField.description.value,
      photoLink: document.forms.editField.src.value,
    };
    editPhotoPost(this.getAttribute('pID'), photoPost);
  };
  const exitEvent = function () {
    user = null;
    userInLS();
    dom.showUser();
    showPhotoPosts();
  };

  const addEvent = function () {
    const photoPost = {
      description: document.forms.addField.description.value,
      photoLink: document.forms.addField.src.value,
      createdAt: new Date(),
      author: user,
      id: getId().toString(),
    };
    addPhotoPost(photoPost);
  };
  const loginEvent = function () {
    const i = users.find((user) => {
      if (user.name === document.forms.userField.name.value) {
        if (user.password === document.forms.userField.password.value) {
          return true;
        }
      }
      return false;
    });
    if (i) {
      user = document.forms.userField.name.value;
    }
    userInLS();
    dom.showUser();
    showPhotoPosts();
  };


  const addFieldEvent = function () {
    dom.addAddField();
    dom.showUser();
  };
  return {
    removeEvent,
    addFieldEvent,
    editFieldEvent,
    editEvent,
    exitEvent,
    loginEvent,
    addEvent,
  };
}());

function removePhotoPost(id) {
  if (filling.removePhotoPost(id)) {
    dom.removePhotoPost(id);
    postsInLS();
    return true;
  }
  return false;
}

function editPhotoPost(id, photoPost) {
  if (filling.editPhotoPost(id, photoPost)) {
    dom.editPhotoPost(id, filling.getPhotoPost(id));
    postsInLS();
    return true;
  }
  return false;
}

function addPhotoPost(photoPost) {
  if (filling.addPhotoPost(photoPost)) {
    dom.addPhotoPost(photoPost);
    postsInLS();
    return true;
  }
  return false;
}

function showPhotoPosts() {
  postsOfLS();
  dom.showPhotoPosts(photoPosts);
}

function getId() {
  let id = 1;
  photoPosts.forEach((post) => {
    if (Number(post.id) > id) {
      id = Number(post.id);
    }
  });
  return id + 1;
}

function postsInLS() {
  localStorage.setItem('posts', JSON.stringify(photoPosts));
}
function postsOfLS() {
  const posts = JSON.parse(localStorage.getItem('posts'));
  if (posts !== null) {
    photoPosts = posts;
  }
}
function userInLS() {
  localStorage.setItem('user', JSON.stringify(user));
}
function userOfLS() {
  const u = JSON.parse(localStorage.getItem('user'));
  if (u !== null) {
    user = u;
  }
}

// userInLS();
dom.showUser();
showPhotoPosts();
