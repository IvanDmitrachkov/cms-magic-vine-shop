export default ({ env }) => {
    const plugins: any = {}

    if (env("NODE_ENV") === 'production') {
        plugins.upload ={
            config: {
                provider: 'aws-s3',
                providerOptions: {
                    accessKeyId: env('MINIO_ACCESS_KEY'),
                    secretAccessKey: env('MINIO_SECRET_KEY'),
                    region: env('MINIO_REGION', 'us-east-1'), // MinIO обычно не требует, но S3 API просит
                    params: {
                        Bucket: env('MINIO_BUCKET'),
                    },
                    endpoint: env('MINIO_ENDPOINT', 'http://127.0.0.1:9000'),
                    s3ForcePathStyle: true, // важно для MinIO
                },
                actionOptions: {
                    upload: {},
                    uploadStream: {},
                    delete: {},
                },
            },
        }
    }

    return plugins;
}
