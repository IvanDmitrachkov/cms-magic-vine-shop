export default ({ env }) => ({
    upload: {
        config: {
            provider: "strapi-provider-minio-brokstock",
            providerOptions: {
                accessKey: env("MINIO_ACCESS_KEY"),
                secretKey: env("MINIO_SECRET_KEY"),
                bucket: env("MINIO_BUCKET"),
                endPoint: env("MINIO_ENDPOINT"),
                host: env("MINIO_HOST"),
                port: env("MINIO_PORT"),
                useSSL: env("MINIO_USE_SSL"),
            },
        },
    }
});
