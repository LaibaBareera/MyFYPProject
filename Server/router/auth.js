const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const { Sequelize, DataTypes, where } = require('sequelize');
var db = require('../models');
const UserAuthentication = require('../middleware/UserAuthentication');
const Contact = db.contact;
const Company = db.company;
const Employee = db.employee;
const CompanyAuthentication = require('../middleware/CompanyAuthentication');
const Companysign = db.companysign;
const Apply = db.apply;
const companyTokens = db.companytoken;
const Users = db.users;
const tokens = db.tokens;
const sendEmail = require('../util/sendEmail');

const router = express.Router();
router.use(cookieParser());
router.get('/', (req, res) => {
    res.send(`hello it is too on auth`);
});
router.post('/register', async (req, res) => {
    const { name, email, phone, password, confirmed } = req.body;
    if (!name || !email || !phone || !password || !confirmed) {
        return res.status(422).json({ error: `please enter all field properly` });
    }
    try {
        const userExist = await Users.findOne({
            where: { email: email }
        });

        // .then((userExist) => {
        if (userExist) {
            // userExist.testMethod();
            return res.status(422).json({ error: `You have already account` });
        }
        // });

        if (password === confirmed) {
            const user = new Users({ name, email, phone, password });

            await user.save();
            // .then(() => {
            res.status(201).json({ message: 'user registration is sucessfully done' });
            // }).catch((err) => { res.status(200).json({ error: err }) });
        }
        else {
            res.status(422).json({ message: 'password and confirmed password is not matching' });
        }

    }
    catch (err) {
        res.status(422).json({ error: err });
    }
    // console.log(req.body);
    // res.send(`mera register`);
    // res.json({ message: req.body });

});
router.post('/companysignup', async (req, res) => {
    const { name, email, phone, password, confirmed } = req.body;
    if (!name || !email || !phone || !password || !confirmed) {
        return res.status(422).json({ error: `please enter all field properly` });
    }
    try {
        const userExist = await Companysign.findOne({
            where: { email: email }
        });

        // .then((userExist) => {
        if (userExist) {
            // userExist.testMethod();
            return res.status(422).json({ error: `You have already account` });
        }
        // });

        if (password === confirmed) {
            const user = new Companysign({ name, email, phone, password });

            await user.save();
            // .then(() => {
            res.status(201).json({ message: 'user registration is sucessfully done' });
            // }).catch((err) => { res.status(200).json({ error: err }) });
        }
        else {
            res.status(422).json({ message: 'password and confirmed password is not matching' });
        }

    }
    catch (err) {
        res.status(422).json({ error: err });
    }
    // console.log(req.body);
    // res.send(`mera register`);
    // res.json({ message: req.body });

});
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({ error: `please enter all field properly` });
    }
    try {
        const user = await Users.findOne({
            // include: {
            //     model: tokens,
            //     attributes: ['user_id', "token"]
            // },
            where: {
                email: email
            }
        });
        const companys = await Companysign.findOne({
            where: {
                email: email
            }
        });
        if (user) {
            const isMatch = await bcryptjs.compare(password, user.password);
            const generateAuthToken = async () => {
                try {
                    let token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
                    // console.log(token);
                    let user_token = new tokens({ user_id: user.id, token: token });
                    user_token.save();
                    res.cookie("jwtoken", token, {
                        expires: new Date(Date.now() + 2589200),
                        httpOnly: true
                    });
                    return token;
                }
                catch (err) {
                    console.log(err);
                }
            };

            // user.text();
            if (isMatch) {
                const toke = generateAuthToken();
                console.log(toke);
                return res.json({ message: 'You have now login' });
            }
            else {
                return res.status(422).json({ error: 'Invalid Credentials ' });
            }
        }
        else if (companys) {
            const isMatch = await bcryptjs.compare(password, companys.password);
            const generateAuthToken = async () => {
                try {
                    let token = jwt.sign({ id: companys.id }, process.env.SECRET_KEY);
                    // console.log(token);
                    let user_token = new companyTokens({ company_id: companys.id, token: token });
                    user_token.save();
                    res.cookie("comptoken", token, {
                        expires: new Date(Date.now() + 2589200),
                        httpOnly: true
                    });
                    return token;
                }
                catch (err) {
                    console.log(err);
                }
            };

            // user.text();
            if (isMatch) {
                const toke = generateAuthToken();
                console.log(toke);
                return res.json({ message: 'You have now login' });
            }
            else {
                return res.status(422).json({ error: 'Invalid Credentials ' });
            }
        }
        else {
            res.status(422).json({ error: 'Invalid credentials' });
        }


    }
    catch (err) {
        console.log(err);
    }
})
router.get('/getcontact', UserAuthentication, (req, res) => {
    res.send(req.rootUser);
});
router.post('/contact', UserAuthentication, async (req, res) => {
    const { name, subject, message } = req.body;
    if (!name || !subject || !message) {
        res.status(422).json({ error: "please fill all fields" });
    }
    try {
        const cont = new Contact({ name, email: req.rootUserEmail, subject, message, user_id: req.rootUserId });
        await cont.save();
        res.status(201).json({ message: 'Contact message is sucessfully send' });
    }
    catch (err) {
        res.status(420).json({ err });
    }
})
router.post('/postnewjob', CompanyAuthentication, async (req, res) => {
    const { jobTitle, Salary, CompanyName, JobType, Location, jobDescription } = req.body;
    if (!jobTitle || !Salary || !CompanyName || !JobType || !Location || !jobDescription) {
        res.status(422).json({ error: "please fill all fields" });
    }
    try {
        const cont = new Company({ jobTitle, Salary, CompanyName, JobType, Location, jobDescription, company_id: req.rootCompanyId });
        await cont.save();
        res.status(201).json({ message: 'Post is sucessfully send' });
    }
    catch (err) {
        res.status(420).json({ err });
    }
})
router.post('/userdatail', UserAuthentication, async (req, res) => {
    const { firstName,
        lastName,
        dob,
        gender,
        experience,
        careerlevel,
        salary,
        city,
        phone,
        degreetitle,
        field,
        institute,
        instituteCity,
        completionYear,
        gpa,
        jobTitle,
        Company,
        industry,
        manage,
        jobcity,
        Expsalary,
        startDate,
        EndDate, } = req.body;
    if (!firstName ||
        !lastName ||
        !dob ||
        !gender ||
        !experience ||
        !careerlevel ||
        !salary ||
        !city ||
        !phone ||
        !degreetitle ||
        !field ||
        !institute ||
        !instituteCity ||
        !completionYear ||
        !gpa ||
        !jobTitle ||
        !Company ||
        !industry ||
        !manage ||
        !jobcity ||
        !Expsalary ||
        !startDate ||
        !EndDate) {
        res.status(424).json({ error: "please fill all fields" });
    }
    const user = await Employee.findOne({
        // include: {
        //     model: tokens,
        //     attributes: ['user_id', "token"]
        // },
        where: {
            user_id: req.rootUserId
        }
    });
    if (user) {
        res.status(423).json({ error: "your detail is already exist" });
    }
    try {
        const cont = new Employee({
            firstName,
            lastName,
            dob,
            gender,
            email: req.rootUserEmail,
            experience,
            careerlevel,
            salary,
            city,
            phone,
            degreetitle,
            field,
            institute,
            instituteCity,
            completionYear,
            gpa,
            jobTitle,
            Company,
            industry,
            manage,
            jobcity,
            Expsalary,
            startDate,
            EndDate, user_id: req.rootUserId
        });
        await cont.save();
        res.status(201).json({ message: 'User detail is sucessfully entered' });
    }
    catch (err) {
        res.status(420).json({ err });
    }
})
router.get('/getuserdata', UserAuthentication, async (req, res) => {
    try {
        const detail = await Employee.findAll({
            where: {
                user_id: req.rootUserId
            }
        });
        res.status(200).json(detail);
    }
    catch (err) {
        res.status(422).json(err);
    }
})
router.get('/getinfo', async (req, res) => {
    try {
        const usertoken = await req.cookies.jwtoken;
        const token = await req.cookies.comptoken;
        if (usertoken) {
            res.status(201).json({ message: 'user is login' });
        }
        else if (token) {
            res.status(210).json({ message: 'company is login' });
        }
        else {
            res.status(422).json({ message: 'No token found' });
        }
    } catch (error) {
        res.status(426).json(error);
    }
})
router.get('/:id/applyjob', UserAuthentication, async (req, res) => {
    try {
        const applys = new Apply({ name: req.rootUserName, user_id: req.rootUserId, companypost_id: req.params.id });
        await applys.save();
        res.status(204).json({ message: 'successfully apply' });
    }
    catch (err) {
        res.status(422).json(err);
    }
})
router.get('/companydetail', CompanyAuthentication, async (req, res) => {
    try {
        const detail = await Companysign.findAll({
            where: {
                id: req.rootCompanyId
            }
        });
        const arr = Object.values(detail);
        res.status(201).json(arr);

    } catch (error) {
        res.status(422).json(error);
    }
})
router.get('/post', CompanyAuthentication, async (req, res) => {
    try {
        const post = await Company.findAll({
            where: {
                company_id: req.rootCompanyId
            }
        });
        const arr = Object.values(post);
        res.status(201).json(arr);
    }
    catch (err) {
        res.status(422).json(err);
    }
})

router.get('/job', UserAuthentication, async (req, res) => {
    try {
        const posts = await Company.findAll({
            order: [
                ['id', 'ASC']
            ]
            // where: {
            //     user_id: 8
            // }
        })
        // res.send(post);
        res.status(201).json(posts);
    }
    catch (err) {
        res.status(422).json(err);
    }
})
router.get('/:id/applyforjob', CompanyAuthentication, async (req, res) => {
    try {
        const job = await Apply.findAll({
            where: {
                companypost_id: req.params.id
            }
        });

        res.status(201).json(job);
    } catch (error) {
        res.status(422).json(error);

    }
})
router.get('/:id/appljob', CompanyAuthentication, async (req, res) => {
    try {
        const job = await Apply.findAll({
            where: {
                companypost_id: req.params.id
            },
            attributes: [
                'user_id'
            ]
        });
        // let num = parseInt(job.user_id);
        // const user = await Employee.findAll({
        //     where: {
        //         user_id: job.user_id
        //     }
        // });
        res.status(201).json(job);
    } catch (error) {
        res.status(422).json(error);

    }
})
router.get('')
router.get('/logout', (req, res) => {
    res.clearCookie('jwtoken', { path: '/' });
    res.clearCookie('comptoken', { path: '/' });
    res.status(200).send('User Logout');
})
module.exports = router;