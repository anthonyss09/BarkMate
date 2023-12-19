# Bark Mate

## What is Bark Mate?

Bark Mate is a social media application for dog lovers centered around bartering dog walks, creating community and sharing content.

## Considerations and goals

### Minimize data base reads and application re-renders

making use of Redux and RTK's (Redux ToolKit) built in data caching and invalidation abilities. In addition client memoizes react components to prevent unnecessary component renders.

### Optimistic updates

are performed when client updates personal data with RTK's data invalidation.

### Live updates

are performed when client interacts with external user data using web sockets combined with redis pub/sub integration.

### Optimize and scale a cost effective solution for websockets.

The solution for this entails socket.io websocket library combined with nginx as a server and load balncer with redis pub/sub integration.

### Attractive user interface and experience.

Some external apis such as google maps and places used to elevate client's ui/ux.

### Containerization of application for deployment.

Application is dockerized and nginx server is built from an official nginx image during a multi stage build.

### Optimization of media uploads.

Cloudinary api used to optimize uploads and generate url to be saved and read from cloud data base.

### Security and authentication

Json web tokens (JWT) are generated during authentication. JWTs are validated upon request to modify user data or access restricted paths.

### Smtp mailing and authentication.

OAUTH2 integration using google api and credentials along with nodemailer.

### Scaling of deployment expenses

to accomodate fluctuating traffic. Application is deployed on Google Cloud Platform (GCP) with cloud run and sidecar containers.

## Future considerations and goals

### Optimize application for external review and edits.

- perform SEO
- implement unit tests
- perform further refactoring and code splitting
- review css naming conventions
- review html schemantics

### If you have any questions or comments feel free to reach out.

anthony@atoffettidev.com
