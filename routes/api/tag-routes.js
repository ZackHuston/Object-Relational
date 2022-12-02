const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include: [ProductTag]
  })
  .then((tag)=> res.json(tag))
  .catch((err)=> res.status(500).json(err))
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    
    },
    include: [ProductTag]
  })
  .then((tag)=> res.json(tag))
  .catch((err)=> res.status(500).json(err))
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  Tag.create(req.body)
  .then((tag)=> res.json(tag))
  .catch((err)=> res.status(500).json(err))
  // create a new tag
});

router.put('/:id', (req, res) => {
  Tag.update(req.body,{
    where: {
      id: req.params.id
    }
    })
    .then((tag)=> res.json(tag))
    .catch((err)=> res.status(500).json(err))
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  Tag.destroy(req.body,{
    where: {
      id: req.params.id
    }
    })
    .then((tag)=> res.json(tag))
    .catch((err)=> res.status(500).json(err))
  // delete on tag by its `id` value
});

module.exports = router;
