import model from '../models/model.js';

const getLists = async (req, res) => {
    const lists = await model.find();
    res.send(lists);
}

const getList = async (req, res) => {
    const _id = req.query;
    const list = await model.findById(_id);
    res.send(list);
}

const saveList = (req, res) => {
    const { newList } = req.body;
    model
        .create(newList)
        .then(() => res.set(201).send(`List added successfully...`))
        .catch((err) => console.log(err));
}

const deleteList = (req, res) => {
    const { _id } = req.body;
    model
        .findByIdAndDelete(_id)
        .then(() => res.set(201).send('List deleted successfully...'))
        .catch((err) => console.log(err));
}

const updateList = async (req, res) => {
    const { _id, list } = req.body;
    const updated = await model.findOneAndUpdate(
        { _id: _id }, 
        { $set: { 
            title: list.title,
            items: list.items,
        } }, 
        { new: true },
    );
    res.send(updated);
}

export { getLists, getList, saveList, deleteList, updateList };