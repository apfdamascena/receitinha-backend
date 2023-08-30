import httpProxy from "express-http-proxy"
import url from "url"

export const usuarioProxy = httpProxy('http://localhost:3002/', {
  proxyReqPathResolver: req =>  {
    return ((url.parse(req.originalUrl).pathname || "") + (url.parse(req.originalUrl).search || ""))
  }
});

export const conquistaProxy = httpProxy('http://localhost:3003/', {
  proxyReqPathResolver: req =>  {
    return url.parse(req.baseUrl).path || ""
  }
});

export const receitaProxy = httpProxy('http://localhost:3004/', {
  proxyReqPathResolver: req =>  {
    return url.parse(req.baseUrl).path || ""
  }
});

