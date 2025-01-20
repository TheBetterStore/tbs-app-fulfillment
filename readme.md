# tbs-app-fulfillment (WIP)

The Better Store's Fulfillment  microservice implementation, using AWS SAM. 

Refer to https://docs.thebetterstore.net for further details (new articles describing this AWS implementation are coming soon).

## Prerequisites (assuming Windows or Linux OS)
1. NodeJS 18+
2. AWS CLI 2.2.44+
3. AWS SAM
4. GitHub client
5. Favourite NodeJS IDE (e.g. Jetbrains Webstorm, Visual Studio Code)

Log into GitHub's NPM package manager via the following:
npm login --scope=@thebetterstore --auth-type=legacy --registry=https://npm.pkg.github.com
and enter your GitHub userid and classic Personal Access Token with read packages permissions when prompted. e.g. see:

https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages



## Deploy the sample application

The Serverless Application Model Command Line Interface (SAM CLI) is an extension of the AWS CLI that adds functionality for building and testing Lambda applications. It uses Docker to run your functions in an Amazon Linux environment that matches Lambda. It can also emulate your application's build environment and API.

To use the SAM CLI, you need the following tools.

* SAM CLI - [Install the SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
* Node.js - [Install Node.js 18](https://nodejs.org/en/), including the NPM package management tool.

The SAM CLI installs dependencies defined in `package.json`, compiles TypeScript with esbuild, creates a deployment package, and saves it in the `.aws-sam/build` folder.

You can find more information and examples about filtering Lambda function logs in the [SAM CLI Documentation](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-logging.html).

## Resources

1. [AWS SAM developer guide](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html) for an introduction to SAM specification, the SAM CLI, and serverless application concepts.
2. [Stripe webhook endpoints] (https://docs.stripe.com/webhooks)

