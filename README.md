# rgb-controller-server
It is an API that allows you to operate the lighting of your computer.  
You need to install openrgb and enable the server for it to work.
# ⭐Features
 - Change color
 - #
# How to build
```bash
sudo apt update -y
sudo add-apt-repository ppa:thopiekar/openrgb -y
sudo apt update -y
sudo apt install openrgb -y

git clone https://github.com/ototak/rgb-controller-server
cd rgb-controller-server
npm install
cd src
npm index.js
```
# Example
```bash
curl 'http://localhost:3000/api/RGB/FF0000'
# RED
curl 'http://localhost:3000/api/RGB/00FF00'
# GREEN
curl 'http://localhost:3000/api/RGB/0000FF'
# BLUE
```
## Sample application(iOS)
 [https://github.com/ottotak/rgb-controller-ios](https://github.com/ottotak/rgb-controller-ios)
## Sample application(Apple Watch)
 [https://github.com/ottotak/rgb-controller-watchos](https://github.com/ottotak/rgb-controller-watchos)
