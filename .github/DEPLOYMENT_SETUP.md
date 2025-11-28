# Automated Deployment Setup Guide

This guide will help you configure automated deployments to S3 and CloudFront using GitHub Actions.

## Prerequisites
- GitHub repository (already set up ✓)
- AWS S3 bucket hosting your site
- CloudFront distribution pointing to your S3 bucket
- AWS account access

## Setup Steps

### 1. Create AWS IAM User for GitHub Actions

Create a dedicated IAM user with programmatic access:

1. Go to AWS IAM Console → Users → Add User
2. Username: `github-actions-deploy` (or similar)
3. Access type: **Programmatic access** (creates access key)
4. Attach the following inline policy (replace `YOUR-BUCKET-NAME` and `YOUR-DISTRIBUTION-ID`):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:DeleteObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::YOUR-BUCKET-NAME",
        "arn:aws:s3:::YOUR-BUCKET-NAME/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "cloudfront:CreateInvalidation",
        "cloudfront:GetInvalidation"
      ],
      "Resource": "arn:aws:cloudfront::*:distribution/YOUR-DISTRIBUTION-ID"
    }
  ]
}
```

5. Save the **Access Key ID** and **Secret Access Key** (you'll need these next)

### 2. Add Secrets to GitHub Repository

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add each of these:

| Secret Name | Value | Where to Find |
|-------------|-------|---------------|
| `AWS_ACCESS_KEY_ID` | Your IAM access key | From step 1 |
| `AWS_SECRET_ACCESS_KEY` | Your IAM secret key | From step 1 |
| `AWS_REGION` | e.g., `us-east-1` | Your S3 bucket region |
| `S3_BUCKET_NAME` | e.g., `my-portfolio-site` | Your S3 bucket name |
| `CLOUDFRONT_DISTRIBUTION_ID` | e.g., `E1234567890ABC` | CloudFront console → Your distribution → ID |

### 3. Finding Your CloudFront Distribution ID

1. Go to AWS CloudFront Console
2. Find your distribution
3. The **ID** column shows something like `E1234567890ABC`
4. Copy this value for the `CLOUDFRONT_DISTRIBUTION_ID` secret

### 4. Test the Workflow

Once secrets are configured:

1. Make a small change to your code (e.g., update a comment)
2. Commit and push to master:
   ```bash
   git add .
   git commit -m "Test automated deployment"
   git push origin master
   ```
3. Go to GitHub → **Actions** tab to watch the deployment
4. Check your site after the workflow completes

## How It Works

**On every push to master:**
1. ✅ Checks out your code
2. ✅ Installs Node.js and dependencies
3. ✅ Runs `npm run build`
4. ✅ Syncs `build/` folder to S3 (with smart caching)
5. ✅ Invalidates CloudFront cache (changes appear immediately)

**Caching Strategy:**
- Static assets (JS, CSS, images): 1 year cache (max performance)
- HTML files: No cache (always fresh content)

## Monitoring & Troubleshooting

### View Deployment Status
- GitHub → Your repo → **Actions** tab
- Each commit shows a workflow run with detailed logs

### Common Issues

**"Access Denied" errors:**
- Check IAM policy has correct bucket name and distribution ID
- Verify secrets are spelled exactly as shown above

**Changes not appearing:**
- CloudFront cache can take a few minutes to invalidate
- Check workflow completed successfully in Actions tab

**Build failures:**
- Check the build step logs in GitHub Actions
- Ensure `package.json` scripts work locally first

## Cost Implications

**GitHub Actions:**
- Public repos: Free unlimited minutes
- Private repos: 2,000 free minutes/month (this workflow uses ~2-3 minutes per run)

**AWS Costs:**
- S3 sync: Negligible (only changed files)
- CloudFront invalidation: First 1,000 paths/month free, then $0.005 per path
  - This workflow uses 1 invalidation per deployment

## Security Best Practices

✅ **Do:**
- Use dedicated IAM user with minimal permissions
- Store credentials as GitHub Secrets (never in code)
- Regularly rotate access keys (every 90 days recommended)

❌ **Don't:**
- Use root AWS account credentials
- Grant broader permissions than needed
- Commit credentials to version control

## Manual Deployment Override

If you ever need to deploy manually:

```bash
# Build locally
npm run build

# Sync to S3 (using AWS CLI)
aws s3 sync build/ s3://YOUR-BUCKET-NAME --delete

# Invalidate CloudFront
aws cloudfront create-invalidation \
  --distribution-id YOUR-DISTRIBUTION-ID \
  --paths "/*"
```

## Next Steps

Once automated deployment works:
- Consider adding a staging environment (deploy `develop` branch to different S3 bucket)
- Add automated tests before deployment
- Set up deployment notifications (Slack, email, etc.)
- Add deployment status badge to README

## Questions?

Check the GitHub Actions documentation: https://docs.github.com/en/actions
