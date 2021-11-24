let posteos = []

export const view = (req,res) =>{
    res.status(200).render('posteos')
}

export const create = (req,res) =>{
    posteos.push(req.body)
    console.log(posteos)
    res.status(200).redirect('/posteo')
}