# rgb-controller-server
It is an API that allows you to operate the lighting of your computer.  
You need to install openrgb and enable the server for it to work.
# ⭐Features
 - Change color
# ❗️Requirement
openrgb
nodejs
# 🔨install
## ubuntu
```bash
sudo add-apt-repository ppa:thopiekar/openrgb -y # add repository
sudo apt update -y
sudo apt install openrgb -y # install openrgb

git clone https://github.com/ototak/rgb-controller-server # clone this repository.
cd rgb-controller-server # go to repository
npm i # resolve dependencies
cd src # go to src
node index.js # execute
```
## ArchLinux
```bash
yay -Syu # update packages
yay -S openrgb # install openrgb

git clone https://github.com/ototak/rgb-controller-server # clone this repository.
cd rgb-controller-server # go to repository
npm i # resolve dependencies
cd src # go to src
node index.js # execute
```
# 🗒Example
```bash
curl 'http://localhost:3000/api/RGB/FF0000'
# RED
curl 'http://localhost:3000/api/RGB/00FF00'
# GREEN
curl 'http://localhost:3000/api/RGB/0000FF'
# BLUE
```

# 📱Sample application(iOS)
 [https://github.com/ottotak/rgb-controller-ios](https://github.com/ottotak/rgb-controller-ios)
# ⌚️Sample application(Apple Watch)
 [https://github.com/ottotak/rgb-controller-watchos](https://github.com/ottotak/rgb-controller-watchos)
