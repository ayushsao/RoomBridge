export const sendBody = async (req, res, next) => {
    const body = req.body;

    try {
        res.status(200).json(body); 
    } catch (error) {
        next(error); 
    }
};
