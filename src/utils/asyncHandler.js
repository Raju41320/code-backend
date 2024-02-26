const ascyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { ascyncHandler };

/*
const  ascyncHandler = () => {}
const  ascyncHandler = (func) => () =>{}
const  ascyncHandler = (func) => async() => {}

const ascyncHandler = (fn) => async(req,res,next)
{
  try {
    await fn(req,res,next)
  } catch (error) {
    res.status(err.code || 500).json({
      success : false,
      message:err.message
    })
    
  }
}
*/
