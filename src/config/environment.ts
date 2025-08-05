
export const config = {
    port: process.env.PORT || 'default',
    mongoUrl: process.env.MONGO_URL || 'default',
    jwtSecret: process.env.JWT_SECRET || 'default',
    nodeEnv: process.env.NODE_ENV || 'default'
}