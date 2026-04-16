pipeline {
    agent any

    environment {
        APP_DIR = "/home/msmeadmin/msme"
        SERVICE_NAME = "msme.service"

        PATH = "/home/msmeadmin/.nvm/versions/node/v24.4.1/bin:/usr/bin:/bin"
    }

    stages {

        stage('Inject .env for Build') {
            steps {
                withCredentials([file(credentialsId: 'msme-cicd-env', variable: 'ENV_FILE')]) {
                    sh '''
                    echo "Injecting .env into workspace..."
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

                git fetch origin
                git reset --hard origin/main

                pnpm install
                pnpm build

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
            echo '✅ Deployment Successful 🚀'
        }

        failure {
            echo '❌ Build Failed'
        }
    }
}