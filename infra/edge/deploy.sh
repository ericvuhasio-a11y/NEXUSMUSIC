# Deploy 10,000 edge nodes globally (Hetzner, OVH, AWS Graviton)
for region in us-east-1 eu-central-1 ap-southeast-1 sa-east-1; do
  aws ec2 run-instances \
    --image-id ami-0c55b159cbfafe1f0 \
    --instance-type a1.medium \
    --count 2500 \
    --region $region \
    --user-data file://edge-node-bootstrap.sh
done
