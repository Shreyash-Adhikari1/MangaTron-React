export const authGuard = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.json({
            success: false,
            message: "Authorization header missing!",
        });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.json({
            success: false,
            message: "Token missing!",
        });
    }

    try {
        const decodedData = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decodedData;
        next();
    } catch (error) {
        res.json({
            success: false,
            message: "Invalid token!",
        });
    }
};

export const authGuardAdmin = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.json({
            success: false,
            message: "Authorization header missing!",
        });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.json({
            success: false,
            message: "Token missing!",
        });
    }

    try {
        const decodedData = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decodedData;
        if (!req.user.isAdmin) {
            return res.json({
                success: false,
                message: "Permission denied!",
            });
        }
        next();
    } catch (error) {
        res.json({
            success: false,
            message: "Invalid token!",
        });
    }
};
