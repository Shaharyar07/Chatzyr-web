pipeline {
    agent any

    stages {
        stage('Cleanup') {
            steps {
                script {
                    // Remove existing Docker containers
                    sh 'sudo docker rm -f $(docker ps -aq) || true'

                    // Remove existing Docker images
                    sh 'sudo docker rmi -f $(docker images -q) || true'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image
                    // Replace 'my-image-name:my-tag' with your image name and tag
                    sh 'sudo docker build -t chatzyr:latest .'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Deploy Docker container
                    // Replace 'my-image-name:my-tag' with your image name and tag
                    // Add any deployment commands here
                    sh 'sudo docker run -d --name my-container-name chatzyr:latest'
                }
            }
        }
    }

    post {
        always {
            // Post-build actions, e.g., cleanup, notifications
            echo 'Pipeline execution complete.'
        }
    }
}
