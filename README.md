# Blockchain and Web3 project

THis project utilizes blockcahin technology to import a static website to the blockchain.

## Push to Your GitHub Repository
Run command in terminal 

```
git remote rm origin
```

Then Run command in terminal 

```
git remote add <your repository link>
```

# Initializing DFX

Run dfx in separate terminal

```
dfx start --clean
```

# Configuring dfx.json

```
{
    "canisters": {
      "vanilla-icp": {
        "frontend": {
          "entrypoint": "src/index.html"
        },
        "source": ["src"],
        "type": "assets"
      }
    },
    "dfx": "0.17.0",
    "version": 1
  }
```

# Deploying your landing page (frontend)

Open VS Code and open a terminal instance and run:

```
dfx deploy
```
