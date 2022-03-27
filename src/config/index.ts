export default {
    port: process.env.PORT || '5000',
    mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/example',
    saltWorkFactor: process.env.SALT_WORK_FACTOR || '10',
    accessTokenTtl: process.env.ACCESS_TOKEN_TTL || '15m',
    refreshTokenTtl: process.env.REFRESH_TOKEN_TTL || '1y',
    accessTokenPublicKey: process.env.ACCESS_TOKEN_PUBLIC_KEY || "LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlHZU1BMEdDU3FHU0liM0RRRUJBUVVBQTRHTUFEQ0JpQUtCZ0hVWGR3cjhtMytCK3phS1pzNzR1ekNHamFFRQpLZldkZUNTeEsyRW1YanNaVlhGUDFPVDVUdHUrSmUwajEyTTZyYTFoZHlDVE1yM2s0Wm9VQWo4MDlGOWlIcXJ6Cm9FaktCd3dsZ1ZOZmZrL3lFUm1xeUF5WGFjVXF4SXU0Q3E0RGxjaUgybkYxRUxkNXlzU2N6UUF5UWw2a0NNMisKb3B0RkdYVWNEN0VYbkhUbkFnTUJBQUU9Ci0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLQ",
    accessTokenPrivateKey: process.env.ACCESS_TOKEN_PRIVATE_KEY || "LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlDV3dJQkFBS0JnSFVYZHdyOG0zK0IremFLWnM3NHV6Q0dqYUVFS2ZXZGVDU3hLMkVtWGpzWlZYRlAxT1Q1ClR0dStKZTBqMTJNNnJhMWhkeUNUTXIzazRab1VBajgwOUY5aUhxcnpvRWpLQnd3bGdWTmZmay95RVJtcXlBeVgKYWNVcXhJdTRDcTREbGNpSDJuRjFFTGQ1eXNTY3pRQXlRbDZrQ00yK29wdEZHWFVjRDdFWG5IVG5BZ01CQUFFQwpnWUF4VTJrNm41K0IzMmZNV2hGbEx6THNCa0t6aWVXREtvcnFLaGgwSEkybHA4NXVwWXF4eXJTRnJWeWN3WFNDCndMMVpSSzNDY3ovMDd1NTYwZU1BYlhaa0F0SmZISVBHNW9RZUhWK0hxdUlKNlN0LzliK0IybUhPNCthOW5TSi8KNy9wamFyYlltc0x0M2JUa1lCUytIUC82WmI5MnVvb3VuZmJUVDUzS0tsL3N3UUpCQU5iUnZJSlEyVjJ1SFlNVgpQVkFEb2pSU012VDFYcHU0TXcxT1IrNG1icVZxQkpkZENzRHJqUWJLME5SS3VLTEJxMXdER3R0eDUyU25JQlNWCkFMaG9rOHNDUVFDTGliNERNc1VCM24xcmVjTlRhZDZGMWtJRUZ0c2tZcUZFOHMwaSszNVRLNmpqMjZlcjg5UlIKbDdWR3dWbTRCZ0tITlNJa0Z5eHJqM2srZ3ZzU0x0ZlZBa0JxR25vVG03OWhLQWpubit3Q3cyaXdreEVjTUwyawpDRjBlNjFWWDZaK3BFQzVvWE1wYzgzdGFxWDV2L09BcGM2TWg5VjZrbVNRRGNSREZXYnRiV2p2MUFrQTJFbVpqCmJ1VVEyRnJacnhHVjNVeXhxRmxrcEVhL1Rza1hvczhEWTFtTWVUcTFNWVZFQ1BTWnVhUXhpdk50Y0ViQ2hrQjQKbzlJK3pCWTd0eDM3NmRNUkFrRUFxVjh1aUJ1V2pvUkR3cEtyNHhGaXhacjFRMGltb1p0dGo2WXpFSGJObjg1TwpsS3o0eE83MWFtSkhpZzZtVVNHVGROMTNoSW1uMUU0Z3hWakpZY1UzUnc9PQotLS0tLUVORCBSU0EgUFJJVkFURSBLRVktLS0tLQ",
    refreshTokenPrivateKey: process.env.REFRESH_PRIVATE_KEY || "LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlDV3dJQkFBS0JnSDBKWFZoUGFyVXN0OC9LSGpKaVY1MWhGNjRaVnQ3UGJic0xrVUo0ZVNuQWJCYlZJWmFCCnBSVzdhdTRqMGhQbUtmVEYzUnpVV3hTeGdDMkJ3Y3ZIdStadm5HTm1HY016R2phQnZNWXNZMkV2UkNXeVNNUHQKYkZrOEhOSWRUQnFQTGQ1MVBOc1pVejd3ZmxkNVlGUXgvNUY5RWErb1pQQXBpT05TRk8wN0VoNTFBZ01CQUFFQwpnWUErODA4R25mMG9OOXBYQi9oSi80OEMwaFljOWU3eGdGZExlMWhuc2NXMmlvVWd2YThLV2owbUF0U2tEbTYrCnkvdEZtN1JseGxnUXhBaTNZSU9VTi92V0l6T3lNeGgvbFN1RlRJWkZNeDUra1FBNHBXbHhzTThLdVFIbEdJLzIKUTRMaTZIWTVjYzNJTk8xakdTNG40azFaaXArZllJUGRJczBqNGxUWm9DdVZoUUpCQU04NkpUV1ZxbzFlUVVDTApuVlk5Q3Z1a2x3b0VlN3MwdEd6blB2bHk0K1JRMHF1dlh2OU0zV3lxZ3loaHkwRldFNm5WRzFOZXJUU1BpN3FRCkRzSUZLQzhDUVFDYWR4SnlnYXVYekhjSzdrQU1OUlN1MDMxRDJER3RwVWxOWkkrYk0yOEQvTERVS21ZREpJSVEKcnRmYmxFRkt6eWRZcDZSMkpRc1F3NEd4Nkptdy9WYWJBa0VBaU5YQk9qZmd6Y1orV2V1Vzhob094WW15UG1nbApkOEZlbmthNE82bFV1Qzl5WFBISlRkVm9wTmVYRWJRNXJhUDBDZ0h4TUVUbEpEN2hLa2p6cGNRWCt3SkFRRjgvCklObEpXWW1zVXJIWG56Ni96OXZ6YUVMQThVemdyNUFwQ05UMmZ3TGY3b3Q4MS9KdkFlVGJzSGFvZnpTMWdRemMKVFNCQzdFbU4wMGJNUmlaTjRRSkFhTWxsM1BEanRJV2p5bnM0U3BLTmRIdmp2VVRRR3VxWUpLcytoZGhHSGdQYwpSU01mNGxYSFFYU0l3K3F5eXU1eS9Mdm9EbUhMZUFmZW5JQTlpaG9XUnc9PQotLS0tLUVORCBSU0EgUFJJVkFURSBLRVktLS0tLQ",
    refreshTokenPublicKey: process.env.REFRESH_PUBLIC_KEY || "LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlHZU1BMEdDU3FHU0liM0RRRUJBUVVBQTRHTUFEQ0JpQUtCZ0gwSlhWaFBhclVzdDgvS0hqSmlWNTFoRjY0WgpWdDdQYmJzTGtVSjRlU25BYkJiVklaYUJwUlc3YXU0ajBoUG1LZlRGM1J6VVd4U3hnQzJCd2N2SHUrWnZuR05tCkdjTXpHamFCdk1Zc1kyRXZSQ1d5U01QdGJGazhITklkVEJxUExkNTFQTnNaVXo3d2ZsZDVZRlF4LzVGOUVhK28KWlBBcGlPTlNGTzA3RWg1MUFnTUJBQUU9Ci0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLQ",
    smtp: {
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_MAILER || 'gaconght@gmail.com',
            pass: process.env.PASSWORD_MAILER || 'ejqcwwodjsxwkkfq',
        }
    },
}

// # Generate new keys: https://travistidwell.com/jsencrypt/demo/

// # Base64 encode the keys: https://www.base64encode.org/