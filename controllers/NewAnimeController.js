const NewAnimeModel = require('../models/NewAnimeModel')
const User = require('../models/UserModel')
const path = require('path')

exports.home = async (req,res) =>{
    const animeposts = await NewAnimeModel.find({})
    res.render('index',{
        animeposts
    })
};

exports.getAnime = async (req,res) =>{
    const animepost =  await NewAnimeModel.findById(req.params.id)
    res.render('postAnimeView',{
        animepost
    })
};

exports.newAnime = async (req,res) => {

    if(req.session.userId){
        return res.render('newPost',{
            createPost:true
        })
    }
    res.redirect('/')
};

exports.storeAnime = async (req,res) =>{
    let image = req.files.image
    image.mv(path.resolve(__dirname,'..','public/img',image.name),
        async (error)=>{
            await NewAnimeModel.create({
                ...req.body,
                image:'/img/' + image.name
            })
            res.redirect('/')
        })

};