const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const members = require('../../Members');

// Gets All Members
router.get('/', (req, res) => res.json(members));

// Get Single Member
router.get('/:id', (req, res) => {
    const found = members.some(member => `${member.id}` === req.params.id);
    if(found) {
        res.json(members.filter(member => `${member.id}` === req.params.id));
    } else {
        res.status(400).json({ msg: `No member with id of ${req.params.id}` });
    };
});

// Create Member
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    };

    if (!newMember.name || !newMember.email){
        return res.status(400).json({ msg: 'Please include a name and email'})
    }

    // members.save(newMember);
    members.push(newMember);
    // res.json(members);
    res.redirect('/')
});

// Update Member
router.put('/:id', (req, res) => {
    const found = members.some(member => `${member.id}` === req.params.id);

    if(found) {
        const updateMember = req.body;
        members.forEach(member => {
            if(`${member.id}` === req.params.id) {
                member.name = updateMember.name ? updateMember.name: member.name;
                member.email = updateMember.email ? updateMember.email: member.email;

                res.json({ msg: 'Member Updated', member})
            };
        });
    } else {
        res.status(400).json({ msg: `No member with id of ${req.params.id}` });
    };
});

// Delete Member
router.delete('/:id', (req, res) => {
    const found = members.some(member => `${member.id}` === req.params.id);
    const index = members.findIndex(member => `${member.id}` === req.params.id);
    if(found) {
        members.splice(index, 1);
        res.json({ msg: 'Member deleted', 
        members});
    } else {
        res.status(400).json({ msg: `No member with id of ${req.params.id}` });
    };
});

module.exports = router;
