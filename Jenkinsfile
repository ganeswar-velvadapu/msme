pipeline {
    agent any

    environment {
        APP_DIR = "/home/msmeadmin/msme"
        SERVICE_NAME = "msme.service"

        PNPM = "/home/msmeadmin/.nvm/versions/node/v24.4.1/bin/pnpm"
    }

    stages {

        stage('Inject .env for Build') {
            steps {
                withCredentials([file(credentialsId: 'msme-cicd-env', variable: 'ENV_FILE')]) {
                    sh '''
                    echo "Injecting .env..."
                    cp $ENV_FILE .env
                    '''
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                $PNPM install
                '''
            }
        }

        stage('Build Test') {
            steps {
                sh '''
                $PNPM build
                '''
            }
        }

        stage('Deploy to Production') {
            steps {
                sh '''
                echo "Deploying..."

                cd $APP_DIR

                git fetch origin
                git reset --hard origin/main

                $PNPM install
                $PNPM build

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
            echo '✅ Deployment Successful'
        }

        failure {
            echo '❌ Build Failed'
        }
    }
}