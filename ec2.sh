#!/bin/bash

INSTANCE_ID="i-07bd17273f26d2163"

case "$1" in
  start)
    aws ec2 start-instances --instance-ids $INSTANCE_ID
    echo "EC2 STARTED"
    ;;
  stop)
    aws ec2 stop-instances --instance-ids $INSTANCE_ID
    echo "EC2 STOPPED"
    ;;
  status)
    aws ec2 describe-instances \
      --instance-ids $INSTANCE_ID \
      --query "Reservations[].Instances[].State.Name"
    ;;
  *)
    echo "Usage: ./ec2.sh start|stop|status"
    ;;
esac
