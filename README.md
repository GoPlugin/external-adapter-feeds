# external-adapter-feeds  

Description  
This application enables to access all datafeed sources via single server(express.js)  

Pre-Requisites  
npm version 8.15.0  
node version 16.7.1  
pm2 process manager  
plugin node up and running  
xdc pay chrome extension  


Steps to use external-adapter-feeds  
Step 1:  
Clone the repository from git.  
git clone "https://github.com/GoPlugin/external-adapter-feeds.git"  
  
Step 2:  
Navigate to external-adapter-feeds folder and install node modules.  
cd external-adapter-feeds  
npm install  
  
Step 3:  
Create a ".env" file and save your teejlab api key in below format.  
API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  
  
Step 4:  
Start the server by executing below command.  
pm2 start common_server.js

Step 5:  
Add the below mentioned bridge's to the same port number(eg: 5001)  
http://localhost:5001/tl_binance  
http://localhost:5001/tl_cryptocompare  
http://localhost:5001/tl_coincap  
http://localhost:5001/tl_coingecko  
http://localhost:5001/tl_coinmarketcap  
http://localhost:5001/tl_coinlayer  
http://localhost:5001/tl_kucoin  
http://localhost:5001/tl_tradermade  
http://localhost:5001/tl_zylalabs  - for commodities  

Step 6:  
Create jobs with above bridges








