const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  res.json(await Tag.findAll({include: [Product, ProductTag]}));
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  // find a single tag by its `id`
  // be sure to include its associated Product data
  res.json(await Tag.findAll({where: {id: id}, include: Product}));
});

router.post('/', async (req, res) => {
  // create a new tag
  const name = req.body.tag_name;
  const record = await Tag.create({ tag_name: name });
  res.json(record);
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const id  = req.params.id;
  const name = req.body.tag_name;
  const record = await Tag.update({ tag_name: name }, { where: {id: id } });
  res.json(record);
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const id  = req.params.id;
  const record = await Tag.destroy({ where: {id: id } });
  res.json(record);
});

module.exports = router;
