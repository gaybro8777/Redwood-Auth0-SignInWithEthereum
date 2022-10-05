# Redwood with Auth0 and SIEW(Sign-In-With-Ethereum)

Welcome to [RedwoodJS](https://redwoodjs.com)!

## Redwood Version
> - RedwoodJS 3.0+
> - Redwood requires [Node.js](https://nodejs.org/en/) (>=14.19.x <=16.x) and [Yarn](https://yarnpkg.com/) (>=1.15)


## Setup

clone this repo

Then change into that directory and start by installing dependencies:

```
yarn install
```

Then create .env file

Adding the following env vars. Using the names exactly as given below and include them in your **redwood.toml**:

```
# .env

AUTH0_DOMAIN=
AUTH0_CLIENT_ID=
AUTH0_REDIRECT_URI=
AUTH0_AUDIENCE=
```

```
# redwood.toml
...
includeEnvironmentVariables = [
  'AUTH0_DOMAIN',
  'AUTH0_CLIENT_ID',
  'AUTH0_REDIRECT_URI',
  'AUTH0_AUDIENCE'
  ]
...
```

## Setting up Auth0 and SIWE

1. To get your application keys, Sign up and complete the "Create Application" section of the SPA Quickstart.

![siwe1](https://user-images.githubusercontent.com/70128487/194100489-1ea46d02-9e8d-45da-a5a7-73c929c17b43.png)

2. Turn to Settings, input the following details from basic information

```
# .env

// Same as Domain
AUTH0_DOMAIN=dev-xxxxxxxx.us.auth0.com

// Same as Client ID
// this key is an example
AUTH0_CLIENT_ID=nkHL74Qin7Scd5HbPd2UCBxEDHMV7ViH

// We will fill it in the next Step
AUTH0_REDIRECT_URI=

// Same as Your Auth0 API, default name is your domain name + /api/v2
AUTH0_AUDIENCE=https://dev-xxxxxxxx.us.auth0.com/api/v2/
```

![siwe2](https://user-images.githubusercontent.com/70128487/194100516-34b506f3-42d6-4bf4-86de-b1199ba9181d.png)

> - Application Type should be Single Page Application and Token Endpoint Auth is None

3. Go to Authentication -> Social -> find Sign-in with Ethereum

![siwe3](https://user-images.githubusercontent.com/70128487/194100533-050edbec-b416-456c-8089-326494299eb6.png)

4. Open a new browser tap, Follow the instruction here(https://auth0.com/blog/sign-in-with-ethereum-siwe-now-available-on-auth0/)

> - Hints: curl command doesn't work properly in window command prompt. Powershell or git bash is preferred.

5. Go back to your Application, fill in the callback URLs
and logout URLs

> - Don't forget add the callback URL of siwe!

![siwe4](https://user-images.githubusercontent.com/70128487/194100602-da7fc140-bb9c-4dd4-b489-6b07e8d32be7.png)

Finish the .env setting

```
# .env

// Same as Domain
AUTH0_DOMAIN=dev-xxxxxxxx.us.auth0.com

// Same as Client ID
// this key is an example
AUTH0_CLIENT_ID=nkHL74Qin7Scd5HbPd2UCBxEDHMV7ViH

// This is a target url after login, must be same as Allowed Callback URLs
AUTH0_REDIRECT_URI=http://localhost:8910/profile

// Same as Your Auth0 API, default name is your domain name + /api/v2
AUTH0_AUDIENCE=https://dev-xxxxxxxx.us.auth0.com/api/v2/
```



7. Change into that directory and start by

```
yarn rw dev
```


## Example

![siwe5](https://user-images.githubusercontent.com/70128487/194100645-6a261da8-afa7-4a20-a21c-fb859fa16217.png)
![siwe6](https://user-images.githubusercontent.com/70128487/194100657-e9c88d83-516b-4a32-a182-98bd672f9a90.png)
![siwe7](https://user-images.githubusercontent.com/70128487/194100666-48d5fa13-ed62-4a03-8be3-9117221aa956.png)

> - Select and Scan with QR code, and signature in your wallet


## FAQ

Q. No response after clicking "Sign-In with Ethereum"
A. Please check your wallet if there is signature requested or not. For futher information please check sign-in with [SIWE Document](https://docs.login.xyz/general-information/siwe-overview/eip-4361)
