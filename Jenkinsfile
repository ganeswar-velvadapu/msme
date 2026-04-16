pipeline {
    agent any

    environment {
        APP_DIR = "/home/msmeadmin/msme"
        SERVICE_NAME = "msme.service"
    }

    stages {

        stage('Checkout Repo') {
            steps {
                git branch: 'main',
                url: 'git@github.com:ganeswar-velvadapu/msme.git'
            }
        }

        stage('Inject .env for Build') {
            steps {
                withCredentials([file(credentialsId: 'msme-cicd-env', variable: 'ENV_FILE')]) {
                    sh '''
                    echo "Injecting .env into workspace for build..."
                    cp $ENV_FILE .env
                    '''
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                pnpm install
                '''
            }
        }

        stage('Build Test') {
            steps {
                sh '''
                pnpm build
                '''
            }
        }

        stage('Deploy to Production') {
            steps {
                sh '''
                echo "Deploying to production..."

                cd $APP_DIR

                echo "Fetching latest code..."
                git fetch origin

                echo "Resetting to main..."
                git reset --hard origin/main

                echo "Installing dependencies..."
                pnpm install

                echo "Building production..."
                pnpm build

                echo "Restarting service..."
                sudo systemctl restart $SERVICE_NAME
                '''
            }
        }

        stage('Cleanup Workspace') {
            steps {
                cleanWs()
            }
        }

    }

    post {

        success {
            echo 'Deployment Successful'
        }

        failure {
            echo 'Build Failed'
        }

    }
}