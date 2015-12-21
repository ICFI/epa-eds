#sudo cp /usr/local/share/config/my-cert.chain.crt /etc/ssl/certs/
#sudo cp /usr/local/share/config/my-cert.crt /etc/ssl/certs/
#sudo cp /usr/local/share/config/my-cert.key /etc/ssl/private/
sudo cp /usr/local/share/config/nginx/default /etc/nginx/sites-enabled/default

mkdir /usr/local/share/www
cd /usr/local/share/www
git init
git pull https://github.com/ICFI/epa-eds.git
git checkout master

npm cache clean && npm install --unsafe-perm