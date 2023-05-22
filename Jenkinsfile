pipeline{
    agent any
    environment {
        def nodejstool = tool name: 'node-20-tool', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
        def dockertool = tool name: 'docker-latest-tool', type: 'org.jenkinsci.plugins.docker.commons.tools.DockerTool'
        PATH = "${nodejstool}/bin:${dockertool}/bin:${env.PATH}"

    }
    stages{
        stage('Install Dependencies'){
            steps{
                
                sh 'npm install'
            }
        }
        stage('Create Production Build'){
            steps{
                
                sh 'npm run-script build'
            }
        }
        stage('Build Docker Image'){
            steps{
                
                sh "docker build -t blasemoylan/social-feed-react-docker:$BUILD_NUMBER ."
        }
        }
        stage('Push Docker Image'){
            steps{
                withCredentials([usernamePassword(credentialsId: 'personal-docker-credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                // Use the USERNAME and PASSWORD environment variables are available within this block  
                            sh 'docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}'
                }

                        // Now that we have logged in with the credentials above, we can do authenticated actions like pushing
                sh "docker push blasemoylan/social-feed-react-docker:$BUILD_NUMBER"
                    }
        }
        stage('Deploy new image to aws ec2'){
            steps {
                sh 'echo "Deploying to EC2 instance..."'

                sshagent(['social-feed-linux-kp-ssh-credentials']){
                    sh """
                        SSH_COMMAND="ssh -o StrictHostKeyChecking=no ubuntu@35.160.57.124"
                        \$SSH_COMMAND "docker stop hosted-react-app && docker rm hosted-react-app"
                        \$SSH_COMMAND "docker pull blasemoylan/social-feed-react-docker:$BUILD_NUMBER"
                        \$SSH_COMMAND "docker run -d -p 80:80 --name hosted-react-app blasemoylan/social-feed-react-docker:$BUILD_NUMBER"

                    """
                }
            }
        }
        
    }
}

