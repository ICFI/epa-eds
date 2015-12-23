cd /usr/local/share/www
rm index.html
git init
git pull https://github.com/ICFI/epa-eds.git

npm cache clean && npm install --unsafe-perm