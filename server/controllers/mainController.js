/**
 * GET /
 * Homepage 
*/
exports.homepage= async(req,res)=>{
  const locals={
    title:'Free Notes',
    description:'Node Project for notes'
  }
  res.render('index',{
    locals,
    layout:'../view/layouts/firs-page'
  });
}



/**
 * GET /
 * About 
*/
exports.about = async (req, res) => {
    const locals = {
      title: "About - NodeJs Notes",
      description: "Free NodeJS Notes App.",
    }
    res.render('about', locals);
  }