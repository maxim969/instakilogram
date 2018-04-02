var photoPosts = [

    {
        id: 'fp1',
        descriprion: 'Очень классный бургер',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Rachok Maxim',
        photoLink: 'burger6.jpg'
    },
    {
        id: 'fp2',
        descriprion: 'Очень классный бургер',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Rachok Maxim',
        photoLink: 'burger5.jpg'
    },
    {
        id: 'fp3',
        descriprion: 'Очень классный бургер',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Rachok Maxim',
        photoLink: 'burger7.jpg'
    },
    {
        id: 'fp4',
        descriprion: 'Очень классный бургер',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Rachok Maxim',
        photoLink: 'burger8.jpg'
    },
    {
        id: 'fp5',
        descriprion: 'Очень классный бургер',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Rachok Maxim',
        photoLink: 'burger9.jpg'
    },
    {
        id: 'fp6',
        descriprion: 'Очень классный бургер',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Rachok Maxim',
        photoLink: 'burger6.jpg'
    },
    {
        id: 'fp7',
        descriprion: 'Очень классный бургер',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Rachok Maxim',
        photoLink: 'burger5.jpg'
    },
    {
        id: 'fp8',
        descriprion: 'Очень классный бургер',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Rachok Maxim',
        photoLink: 'burger7.jpg'
    },
    {
        id: 'fp9',
        descriprion: 'Очень классный бургер',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Rachok Maxim',
        photoLink: 'burger8.jpg'
    },
    {
        id: 'fp10',
        descriprion: 'Очень классный бургер',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Rachok Maxim',
        photoLink: 'burger9.jpg'
    },
    {
        id: 'fp11',
        descriprion: 'Очень классный бургер',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Rachok Maxim',
        photoLink: 'burger6.jpg'
    },
    {
        id: 'fp12',
        descriprion: 'Очень классный бургер',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Rachok Maxim',
        photoLink: 'burger5.jpg'
    },
    {
        id: 'fp13',
        descriprion: 'Очень классный бургер',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Rachok Maxim',
        photoLink: 'burger7.jpg'
    },
    {
        id: 'fp14',
        descriprion: 'Очень классный бургер',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Rachok Maxim',
        photoLink: 'burger8.jpg'
    },
    {
        id: 'fp15',
        descriprion: 'Очень классный бургер',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Rachok Maxim',
        photoLink: 'burger9.jpg'
    },
    {
        id: 'fp16',
        descriprion: 'Очень классный бургер',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Rachok Maxim',
        photoLink: 'burger6.jpg'
    },
    {
        id: 'fp17',
        descriprion: 'Очень классный бургер',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Rachok Maxim',
        photoLink: 'burger5.jpg'
    },
    {
        id: 'fp18',
        descriprion: 'Очень классный бургер',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Rachok Maxim',
        photoLink: 'burger7.jpg'
    },
    {
        id: 'fp19',
        descriprion: 'Очень классный бургер',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Rachok Maxim',
        photoLink: 'burger8.jpg'
    },
    {
        id: 'fp20',
        descriprion: 'Очень классный бургер',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Rachok Maxim',
        photoLink: 'burger9.jpg'
    }

];

var filling = (function () {

    var searchPost = function(id) {
        if(typeof id !== 'string' ){
            return false;
        }
        return photoPosts.findIndex(function(post){
            if (post.id === id){
                return true;
            }
            return false;
        });
    };

    var getPhotoPost = function(id){
        if(typeof id !== 'string' ){
            return null;
        }
        var i = searchPost(id);
        if(i !== -1){
            return photoPosts[i];
        }
        return null;
    };

    var validatePhotoPost = function(post) {
        if (typeof post !== 'object') {
            return false;
        }
        var validate = {
            id: function () {
                if( typeof post.id !== 'string'){
                    return false;
                }
            },
            description: function () {
               if(typeof post.description !== 'string' || post.description.length >= 200){
                   return false;
               }
            },
            createdAt: function () {
                if(typeof post.createdAt !== 'object'){
                    return false;
                }
            },
            author: function () {
               if(typeof post.author !== 'string' ||post.author.length === 0){
                   return false;
               }
            },
            photoLink: function () {
                if(typeof post.photoLink !== 'string' ||post.photoLink.length === 0){
                    return false;
                }
            }
        }
        return true;
    };

    var addPhotoPost = function(post){
        if(typeof  post !== 'object'){
            return false;
        }
        if(validatePhotoPost(post)){
            photoPosts.push(post);
            return true;
        }
        return false;
    };

    var removePhotoPost = function(id){
        if(typeof id !== 'string' ){
            return false;
        }
        var i = searchPost(id);
        if(i !== -1){
            photoPosts.splice(i,1);
            return true;
        }
        return false;
    };

    var getPhotoPosts = function() {};

    var editPhotoPost= function(id, post) {
        if(typeof id !== 'string' ){
            return false;
        }
        if(typeof  post !== 'object') {
            return false;
        }
        var i = searchpPost(id);
        if(i !== -1){
            if(typeof post.description === 'string'){
                photoPosts[i].description = post.description;
            }
            if(typeof post.photoLink === 'string'){
                photoPosts[i].photoLink = post.photoLink;
            }
            return true;
        }
        return false;
    }

    return {
        searchPost,
        getPhotoPosts,
        getPhotoPost,
        validatePhotoPost,
        addPhotoPost,
        editPhotoPost,
        removePhotoPost
    };

})();
