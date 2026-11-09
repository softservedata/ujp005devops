pipeline {
    agent any
    stages {
         stage('Start') {
            steps {
                echo 'Hello, Start'
            }
        }
        stage('Clone') {
            steps {
                git url: 'https://github.com/softservedata/ujp005devops.git', branch: 'main'
            }
        }
        stage('Build') {
            steps {
                bat 'mvn -B package -DskipTests'
            }
        }
        stage('Unit Test') {
            steps {
                bat 'mvn -B test'
            }
        }
        stage('done') {
            steps {
                echo 'finish'
            }
        }
    }
}

