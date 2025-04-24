# Cloud Engineering and DevOps Roadmap

Welcome to the Cloud Engineering and DevOps Roadmap! This guide is designed to help you become a proficient junior cloud or DevOps engineer by completing a series of hands-on projects. Each project will equip you with essential skills and knowledge, combining cloud engineering and DevOps practices.

![Screenshot_20230930-102809](https://github.com/Gymnott1/Cloud-engineering-roadmap/assets/114360713/65743508-f138-4f8d-915a-74e0484b68b8)

![sshot](https://github.com/Gymnott1/Cloud-engineering-roadmap/assets/114360713/61c5a9a5-9369-483a-9cad-2d078e951b9b)

## Project Overview

![image](staticweb/cl1.png)

### Project #1: Amazon S3 Static Website Deployment
- **Objective**: Deploy a static website on AWS using Amazon S3.
- **Tools and Technologies**:
  - **Amazon S3**: For hosting the static website.
  - **Amazon CloudFront**: For HTTPS and content delivery.
  - **Amazon Route 53**: For DNS management.
  - **Amazon DynamoDB**: NoSQL database.
  - **AWS API Gateway**: For building APIs.
  - **AWS Lambda**: Serverless compute.
  - **Python (boto3)**: For AWS SDK interactions.
  - **AWS Certificate Manager**: For SSL certificates.
  - **AWS Amplify**: For building and hosting websites.
  - **IAM**: For security management.
- **Strategy**: Use the lift and shift strategy.
- **Example App**: Simple 2-tier or 3-tier calculator app.

### Project #2: Infrastructure as Code (IaC)
- **Objective**: Deploy a static website using AWS Serverless Application Model (SAM) template and AWS SAM CLI.
- **Tools and Technologies**:
  - **Terraform or SAM**: For IaC.
  - **Git**: For version control.
  - **Linux**: For administration tasks (SSH, FTP).
- **Security**: Implement firewall, reverse proxy, and forward proxy.
- **Challenge**: Complete the [Cloud Resume Challenge](https://cloudresumechallenge.dev/docs/the-challenge/aws/).

### Project #3: Docker Deployment
- **Objective**: Deploy a dynamic web application on AWS using Docker, ECR, and ECS Fargate.
- **Tools and Technologies**:
  - **Docker**: For containerization.
  - **ECR**: For container registry.
  - **ECS Fargate**: For serverless container orchestration.
  - **Route 53**: For DNS management.
  - **GitHub Repo**: [WillButton/trustified-api](https://github.com/rekibnikufesin).
- **Networking**: Subnets, SSL, load balancers.
- **Logging**: Implement logging facilities.

### Project #4: Kubernetes Deployment
- **Objective**: Deploy a dynamic web application on AWS using Docker, ECR, and Kubernetes.
- **Tools and Technologies**:
  - **Kubernetes**: For container orchestration.
  - **EKS**: For managed Kubernetes service.
  - **GitHub Repo**: [N4si/cloud-native-monitoring-app](https://github.com/N4si/cloud-native-monitoring-app).
  - **Boto3, Docker, KubeCtl**: For deployment and management.
- **Architecture**: Pods, manifests, deployments, replicas, microservices.

### Project #5: Terraform Deployment
- **Objective**: Use Terraform to deploy dynamic web applications from previous projects.
- **Tools and Technologies**:
  - **Terraform**: For infrastructure provisioning.
  - **IaC**: Infrastructure as Code.

### Project #6: Ansible Deployment
- **Objective**: Deploy a web application on AWS using Ansible.
- **Tools and Technologies**:
  - **Ansible**: For configuration management.
  - **Puppet or Chef**: Alternatives for configuration management.
- **Tasks**: Service, shell, and debug management.

### Project #7: Python Automation
- **Objective**: Use Python to automate AWS-related tasks and solutions.
- **Tools and Technologies**:
  - **Python**: As a scripting language.

### Project #8: CI/CD Pipeline
- **Objective**: Deploy a dynamic web application on AWS using a CI/CD pipeline.
- **Tools and Technologies**:
  - **Jenkins, GitLab CI, Docker, Kubernetes**: For CI/CD pipeline.
  - **Cypress**: For testing.
  - **AWS X-Ray, CloudWatch, Splunk**: For monitoring.
  - **GitHub Repos**: [Jenkins-Zero-To-Hero](https://github.com/Gymnott1/Jenkins-Zero-To-Hero), [Azure-Samples/contoso-real-estate](https://github.com/Azure-Samples/contoso-real-estate).
- **Tasks**: Launch EC2 instances, install Jenkins plugins, implement testing, monitoring, and logging.

### Project #9: Refactoring Projects
- **Objective**: Migrate existing applications to new architecture.
- **Frontend Stack**: VM for Tomcat, Application Load Balancer, Autoscaling, S3 for storage.
- **Backend Stack**: RDS instance, Active MQ, Elastic Cache, Route 53, CloudFront.

## Additional Concepts

### Networking Concepts
- **VPN, Public & Private DNS, NAT, Proxy, Firewall**: Understand and implement.
- **Static/Dynamic IPs, CIDR Notations, Public/Private Network, Subnets**: Networking basics.
- **Protocols**: HTTP, HTTPS, FTP, TCP, SSL/TLS, SSH, SMTP.

### Documentation and Resume Building
- **Upload Work**: Regularly upload your work to LinkedIn, GitHub, and personal blogs.
- **References**:
  - **Sites**: [adityacprtm.dev](https://adityacprtm.dev), [marikabergman.com](https://marikabergman.com).
  - **GitHub**: [Mo ROBLE](https://github.com/MoROBLE).

## Documentation
Each step of the projects will be documented in the repository for future reference and learning.

Happy learning and coding! ☁️💻


## Something To Think about

![image](staticweb/cl3.png)