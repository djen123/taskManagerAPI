export const validateReqBody = (req, res, next) => {
    const { title } = req.body;

    if (!title || title.length < 3) {
        return res.status(400).json({
            status: "FAILED",
            message: "invalid title, min 3 characters"
        });
    }

    next();
};