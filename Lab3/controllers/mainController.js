const mygroup = require('../models/mygroup');
const { log } = require('../utils');

exports.getIndex = (req, res) => {
  res.json(mygroup);
  log(req.method, req.url);
};

exports.getMessage = (req, res) => {
  const id = req.params.id;
  if (!id) {
    const studentNames = mygroup.map((student) => student.name);
    res.send(`<html><body><ul>${studentNames.map((name) => `<li>${name}</li>`).join('')}</ul></body></html>`);
  } else {
    const student = mygroup.find((student) => student.id === id);
    if (student) {
      res.send(`<html><body><ul><li>${student.name}</li></ul></body></html>`);
    } else {
      res.status(400).json({ error: 'Not valid' });
    }
  }
  log(req.method, req.url);
};

exports.getStudentInfo = (req, res) => {
  const id = req.params.id;
  const MSSV = req.params.MSSV;

  if (MSSV && id) {
    res.status(400).json({ error: 'Not valid' });
  } else {
    const student = mygroup.find((student) => student.id === MSSV);
    if (student) {
      res.json(student);
    } else {
      res.status(400).json({ error: 'Not valid' });
    }
  }

  log(req.method, req.url);
};

exports.addStudent = (req, res) => {
  const id = req.params.id;
  const MSSV = req.params.MSSV;

  if (id && MSSV) {
    res.status(400).json({ error: 'Not valid' });
  } else {
    const newStudent = req.body;
    if (newStudent.id === MSSV && !mygroup.some((student) => student.id === MSSV)) {
      mygroup.push(newStudent);
      res.json(newStudent);
    } else {
      res.status(400).json({ error: 'Not valid' });
    }
  }

  log(req.method, req.url);
};
