pipeline {

    agent any

    stages {

        stage('Deploy') {
            environment {
                REMOTE_DIR = "/app/apps/blockchain-explorer"
                SOURCE_FILES = "**/*.js, **/*.json, **/*.vue, **/*.html, **/.css, **/*.png, **/*.jpg, **/*.svg, **/*.jpeg, **/*.ico, Dockerfile, docker-compose.yml, .dockerignore"
            }
            steps {
                echo "Deploying Blockchain Explorer"
                sshPublisher(
                    continueOnError: false,
                    failOnError: true,
                    publishers: [
                        sshPublisherDesc (
                            configName: "administrator@danilojakob.ch",
                            verbose: true,
                            transfers: [
                                sshTransfer (
                                    execCommand: "if [ -d ${REMOTE_DIR} ]; then " +
                                                    "cd ${REMOTE_DIR} && " +
                                                    "rm -rf *" +
                                                    "; fi \n"
                                ),
                                sshTransfer (
                                    sourceFiles: env.SOURCE_FILES,
                                    remoteDirectory: env.REMOTE_DIR,
                                    execCommand: "sudo docker-compose -f /app/apps/blockchain-explorer/docker-compose.yml up -d --build"
                                )
                            ]
                        )
                    ]
                )
            }
        }
    }

}