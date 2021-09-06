const { Post } = require("../models");

const postData = [
    {
        title: "Android Central",
        post_url: "https://www.androidcentral.com/",
        user_id: 10,
    },
    {
        title: "SiliconANGLE",
        post_url: "https://siliconangle.com/",
        user_id: 8,
    },
    {
        title:
            "BGR",
        post_url:
            "http://bgr.com",
        user_id: 1,
    },
    {
        title: "ReadWrite",
        post_url: "https://readwrite.com/",
        user_id: 4,
    },
    {
        title: "Macworld",
        post_url: "hhttps://www.macworld.com",
        user_id: 7,
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;