const Strategem = require('../models/strategem-model')

createStrategem = (req, res) => {
    const body = req.body

    console.log("body is", body)

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a strategem',
        })
    }

    const strategem = new Strategem(body)

    if (!strategem) {
        return res.status(400).json({ success: false, error: err })
    }

    strategem
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: strategem._id,
                message: 'Strategem created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Strategem not created!',
            })
        })
}

updateStrategem = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Strategem.findOne({ _id: req.params.id }, (err, strategem) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Strategem not found!',
            })
        }
        strategem.name = body.name
        strategem.faction = body.faction
        strategem.description = body.description
        strategem.tags = body.tags
        strategem.cost = body.cost
        strategem
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: strategem._id,
                    message: 'Strategem updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Strategem not updated!',
                })
            })
    })
}

deleteStrategem = async (req, res) => {
    await Strategem.findOneAndDelete({ _id: req.params.id }, (err, strategem) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!strategem) {
            return res
                .status(404)
                .json({ success: false, error: `Strategem not found` })
        }

        return res.status(200).json({ success: true, data: strategem })
    }).catch(err => console.log(err))
}

getStrategemById = async (req, res) => {
    await Strategem.findOne({ _id: req.params.id }, (err, strategem) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!strategem) {
            return res
                .status(404)
                .json({ success: false, error: `Strategem not found` })
        }
        return res.status(200).json({ success: true, data: strategem })
    }).catch(err => console.log(err))
}

getStrategems = async (req, res) => {
    await Strategem.find({}, (err, strategems) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!strategems.length) {
            return res
                .status(404)
                .json({ success: false, error: `strategems not found` })
        }
        return res.status(200).json({ success: true, data: strategems })
    }).catch(err => console.log(err))
}

getAllTags = async (req, res) => {
    await Strategem.find({}, (err, strategems) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!strategems.length) {
            return res
                .status(404)
                .json({ success: false, error: `strategems not found` })
        }

        let tags = [];

        strategems.forEach(strategem => tags = tags.concat(strategem.tags.filter(tag => !tags.includes(tag))));

        return res.status(200).json({ success: true, data: tags })
    }).catch(err => console.log(err))
}

getStrategemByTag = async (req, res) => {
    await Strategem.find({ tags: {$in:req.params.tags} }, (err, strategem) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!strategem) {
            return res
                .status(404)
                .json({ success: false, error: `Strategem not found` })
        }
        return res.status(200).json({ success: true, data: strategem })
    }).catch(err => console.log(err))
} 

module.exports = {
    createStrategem,
    updateStrategem,
    deleteStrategem,
    getStrategems,
    getStrategemById,
    getAllTags,
    getStrategemByTag
}