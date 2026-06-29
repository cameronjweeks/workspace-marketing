#!/usr/bin/env bash
set -euo pipefail

PROJECT="workspace-500919"
REGION="us-central1"
SERVICE="workspace-marketing"

echo "Deploying ${SERVICE} → Cloud Run (${PROJECT}/${REGION}) @ $(git rev-parse --short HEAD)"

gcloud run deploy "${SERVICE}" \
  --source . \
  --project "${PROJECT}" \
  --region "${REGION}" \
  --allow-unauthenticated \
  --port 8080 \
  --memory 512Mi \
  --cpu 1 \
  --min-instances 0 \
  --max-instances 10 \
  --cpu-throttling

echo
echo "Live:"
gcloud run services describe "${SERVICE}" --project "${PROJECT}" --region "${REGION}" \
  --format='value(status.url)'
