#!/bin/bash
set -e

INSTANCE_ID="i-07bd17273f26d2163"
REGION="ap-south-1"

case "$1" in
  start)
    aws ec2 start-instances --instance-ids "$INSTANCE_ID" --region "$REGION"
    echo "EC2 STARTED"
    ;;
  stop)
    aws ec2 stop-instances --instance-ids "$INSTANCE_ID" --region "$REGION"
    echo "EC2 STOPPED"
    ;;
  status)
    aws ec2 describe-instances \
      --instance-ids "$INSTANCE_ID" \
      --region "$REGION" \
      --query "Reservations[].Instances[].State.Name" \
      --output text
    ;;
  *)
    echo "Usage: ./ec2.sh start|stop|status"
    exit 1
    ;;
esac
