require('dotenv').config()

const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(cors())
app.use(morgan('dev'))



const PORT = Number(process.env.PORT) || 5000

const USER_SERVICE = process.env.USER_SERVICE
const PRODUCT_SERVICE = process.env.PRODUCT_SERVICE
const PROFILE_SERVICE = process.env.PROFILE_SERVICE

if (!USER_SERVICE || !PRODUCT_SERVICE || !PROFILE_SERVICE) {
  console.error('Missing required env variables')
  process.exit(1)
}

app.use((req, res, next) => {
  console.log('GATEWAY RECEIVED:', req.method, req.originalUrl)
  next()
})

// ---------------- API ROUTES ----------------
app.use(
  '/api/users',
  createProxyMiddleware({
    target: USER_SERVICE,
    changeOrigin: true,
    //pathRewrite: { '^/api/users': '/users' },
  })
)

app.use(
  '/api/products',
  createProxyMiddleware({
    target: PRODUCT_SERVICE,
    changeOrigin: true,
    //pathRewrite: { '^/api/products': '/products' },
  })
)

app.use(
  '/api/profile',
  createProxyMiddleware({
    target: PROFILE_SERVICE,
    changeOrigin: true,
    pathRewrite: { '^/api/profile': '/profile' },
  })
)

// ---------------- SWAGGER DOCS ----------------
app.use(
  '/docs/users',
  createProxyMiddleware({
    target: USER_SERVICE,
    changeOrigin: true,
    pathRewrite: { '^/docs/users': '/api-docs' },
  })
)

app.use(
  '/docs/products',
  createProxyMiddleware({
    target: PRODUCT_SERVICE,
    changeOrigin: true,
    pathRewrite: { '^/docs/products': '/api-docs' },
  })
)

app.use(
  '/docs/profile',
  createProxyMiddleware({
    target: PROFILE_SERVICE,
    changeOrigin: true,
    pathRewrite: { '^/docs/profile': '/api-docs' },
  })
)

app.get('/health', (req, res) => {
  res.json({ status: 'API Gateway running' })
})

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`)
})
