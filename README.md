# Blind Hiring Platform Web Application

This repository contains a React web application that runs inside a Docker container, with files served through Nginx. The application is built using Yarn as the package manager. The deployment pipeline is configured to build and deploy the application to AWS ECS using GitLab CI/CD.

## Prerequisites

Before you get started, you need the following:

1. Docker installed on your local machine.
2. An AWS account with appropriate permissions to create and manage ECR repositories and ECS resources.
3. GitLab account with a repository containing the application code.
4. AWS CLI installed and configured on your local machine.

## Getting Started

Clone the repository and navigate to the project folder:

```bash
git clone https://gitlab.com/blind-hiring-platform/frontend/website
cd website
```


## Development

To run the application locally, first install the dependencies:

```bash
yarn install
```

Then, start the application:

```bash
yarn start
```


The application will be available at [http://localhost:3000](http://localhost:3000).

## Building the Docker Image

To build the Docker image, run the following command:

```bash
docker build -t webapp .
```


## Running the Application in a Docker Container

To run the application in a Docker container, execute the following command:

```bash
docker run -p 80:80 --name webapp-container webapp
```


The application will be available at [http://localhost](http://localhost).

## Deployment

The deployment pipeline is configured in the `.gitlab-ci.yml` file. It consists of two stages: `build` and `deploy`. The `build` stage builds the Docker image and pushes it to AWS ECR, while the `deploy` stage updates the ECS service to deploy the latest image.

### Build Stage

The build stage uses the `docker:stable` image and requires Docker-in-Docker service to build the Docker image. The `before_script` section installs the AWS CLI, which is used to log in to the ECR repository. The Docker image is built and pushed to ECR with the latest and commit-specific tags.

### Deploy Stage

The deploy stage uses the `amazon/aws-cli` image to execute AWS CLI commands. It registers a new task definition based on the `task_definition.json` file and updates the ECS service to deploy the new task definition.

## Contributing

1. Fork the repository and create your branch from `main`.
2. Make your changes and test them locally.
3. Commit your changes and push to your branch.
4. Open a pull request to merge your changes into the `main` branch.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

