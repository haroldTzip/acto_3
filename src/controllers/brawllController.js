const fs= require('fs');
const path = require('path');

const brawllsJSON = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/brawlls.json'), 'utf-8'));

const BrawllController = {
    getbrawlls: (req,res) => {
        res.render('index', { brawllsJSON, title : 'brawllhalla' })
    },

    getbrawllsByid: (req,res) => {
        const brawll = brawllsJSON.find(brawll => {
            return brawll.id === req.params.slug;
        })
        if(brawll){
            res.render('brawll-detail', {  brawll,title: 'brawll Detail' });
        }
    }
};

module.exports = BrawllController;