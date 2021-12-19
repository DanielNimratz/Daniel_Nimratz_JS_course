const DB = {
    collections: {
        posts: {
            posts_1: {
                name: 'Post 1',
                text: 'Some text 1'
            },
            posts_2: {
                name: 'Post 2',
                text: 'Some text 2'
            },
        },
        comments: {
            comment_1: {
                postId: 'posts_1',
                text: 'Comment 1'
            },
            comment_2: {
                postId: 'post_1',
                text: 'Comment 2'
            },
        },
    },
}

function useCollection(out) {
    return function (inn) {
        console.log(DB['collections'][out][inn]);
    }
}

function useCollection1(out) {
    return {
        get: function (id) {
            console.log(DB['collections'][out][id]);
        },
        create: function (obj) {
            let a = DB['collections'][out];
            a[out + '_' + (Object.keys(a).length + 1)] = obj;
        },
        deleteOne: function (id) {
            delete DB['collections'][out][id];
        },
        edit: function (id, obj) {
            let a = DB['collections'][out][id];
            for (i in obj) {
                a[i] = obj[i];
            }
        }

    }
}

// const getPostItem = useCollection('posts');
// getPostItem('posts_1');

// const collection = useCollection1('posts');
// collection.get('posts_1');

// collection.create({
//     name: 'some name',
//     text: 'some new text'
// })

// collection.deleteOne('posts_1');

// collection.edit('posts_2', {name: 'changed'});