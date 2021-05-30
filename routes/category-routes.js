const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  res.json(await Category.findAll({include: Product}));
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  // find one category by its `id` value
  // be sure to include its associated Products
  res.json(await Category.findAll({where: {id: id}, include: Product}));
});

router.post('/', async (req, res) => {
  // create a new category
  const name = req.body.category_name;
  const record = await Category.create({ category_name: name });
  res.json(record);
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const id  = req.params.id;
  const name = req.body.tag_name;
  const record = await Category.update({ category_name: name }, { where: {id: id } });
  res.json(record);
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const id  = req.params.id;
  const record = await Category.destroy({ where: {id: id } });
  res.json(record);
});

module.exports = router;
