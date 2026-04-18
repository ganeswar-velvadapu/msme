pipeline {
    agent any

    environment {
        APP_DIR = '/home/msmeadmin/msme'
        SERVICE_NAME = 'msme.service'

        NODE_BIN = '/home/msmeadmin/.nvm/versions/node/v24.4.1/bin'
    }

    stages {
        stage('Inject .env for Build') {
            steps {
                withCredentials([file(credentialsId: 'msme-cicd-env', variable: 'ENV_FILE')]) {
                    sh '''
            echo "Injecting .env..."

            rm -f .env
            cp $ENV_FILE .env
            chmod 644 .env
            '''
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                export PATH=$NODE_BIN:$PATH

                node -v
                pnpm -v

                pnpm install
                '''
            }
        }

        stage('Build Test') {
            steps {
                sh '''
                export PATH=$NODE_BIN:$PATH

                pnpm build
                '''
            }
        }

        stage('Deploy to Production') {
            steps {
                sh '''
                export PATH=$NODE_BIN:$PATH

                echo "Deploying..."

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
            echo '✅ Deployment Successful'
        }

        failure {
            echo '❌ Build Failed'
        }
    }
}
