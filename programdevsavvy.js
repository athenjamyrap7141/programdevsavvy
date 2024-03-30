// online_learning_platform.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let users = [];
let courses = [];
let userCourses = [];

// 用户注册
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    // 实现用户注册逻辑，将用户信息保存到数据库中
    users.push({ username, password });
    res.status(201).json({ message: '用户注册成功' });
});

// 添加课程
app.post('/addCourse', (req, res) => {
    const { courseName } = req.body;
    // 实现添加课程逻辑，将课程保存到数据库中
    courses.push({ courseName });
    res.status(201).json({ message: '课程添加成功' });
});

// 用户选课
app.post('/enrollCourse', (req, res) => {
    const { username, courseName } = req.body;
    // 实现用户选课逻辑，将课程添加到用户课程列表中
    userCourses.push({ username, courseName });
    res.status(200).json({ message: '选课成功' });
});

// 监听端口
const port = 3000;
app.listen(port, () => {
    console.log(`在线学习平台后端运行在 http://localhost:${port}`);
});
