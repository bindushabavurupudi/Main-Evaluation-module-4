const requests = {};

export default function rateLimiter(req, res, next){
    const ip = req.ip;
    const now = Date.now();

    requests[ip] = requests[ip] || [];
    requests[ip] = requests[ip].filter(t =>{
        now-t < 6000
    });

    if(requests[ip].length >= 3){
        return res.status(400).json({message: "Too many requests"});
    }

    requests[ip].push(now);
    next();
}