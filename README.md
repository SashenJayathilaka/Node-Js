# Node Js
javascript 

## Node js downlode
#### Go to https://nodejs.org/en/download/ and download the appropiate installer for your operating system.

```
node
```
# Installing Node.js via package manager
## Windows
Download the Windows Installer directly from the https://nodejs.org/en/download/ web site.
### Alternatives
### Using Winget:
```
winget install OpenJS.NodeJS
# or for LTS
winget install OpenJS.NodeJS.LTS
```
After running one of the two commands above, it may be necessary to restart the terminal emulator before the node CLI command becomes available.
### Using Chocolatey:

```
cinst nodejs
# or for full install with npm
cinst nodejs.install
```

### Using Scoop:
```
scoop install nodejs
```


## macOS
Download the macOS Installer directly from the https://nodejs.org/en/download/ web site. <br>
If you want to download the package with bash:
```
curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"
```

### Alternatives
### Using Homebrew
```
brew install node
```
### Using MacPorts:
```
port install nodejs<major version>

# Example
port install nodejs7
```
### Using pkgsrc:
```
pkgin -y install nodejs
```
### Or build manually from pkgsrc:
```
cd pkgsrc/lang/nodejs && bmake install
```

#### Get a more idea about Installing Node.js via package manager https://nodejs.org/en/download/package-manager/#n



## MongoDB
https://cloud.mongodb.com/v2/6230aa66c33bf94acda76da6#clusters
