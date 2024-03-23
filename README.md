This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Video Processing Research

Ideas for video processing in the app:

1. Deploy custom YOLOV8 model to Sagemaker, as explained in these docs https://docs.ultralytics.com/integrations/amazon-sagemaker/. And then upload the videos to the Sagemaker endpoint for processing from Amplify app. See some thoughts about this from this Gemeni Chat https://gemini.google.com/app/4f6c00620156bb53

2. Self Host with Roboflow Inference
   https://github.com/roboflow/inference
   https://blog.roboflow.com/how-to-train-yolov8-on-a-custom-dataset/#preparing-a-custom-dataset-for-yolov8
