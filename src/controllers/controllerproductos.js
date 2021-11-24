let productos = []

export const view =(req,res)=>{
 res.status(200) .render('productos')


}
export const create=(req,res)=>{
  productos.push(req.body)
  console.log(productos)
  res.status(200).redirect('/productos')
}