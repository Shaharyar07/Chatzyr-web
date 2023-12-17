pipeline {
    agent any

    stages {
        stage('Cleanup') {
            steps {
                script {
                    // Remove existing Docker containers
                    sh 'docker rm -f $(docker ps -aq) || true'

                    // Remove existing Docker images
                    sh 'docker rmi -f $(docker images -q) || true'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image
                    sh 'docker build -t chatzyr:latest .'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Deploy Docker container with port mapping
                    // This maps port 3000 of the container to port 3000 of the host
                    sh 'docker run -d -p 3000:5173 --name chatzyr chatzyr:latest'
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
