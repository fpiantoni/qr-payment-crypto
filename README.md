#QR payment gateway


We are Baas256, a company focused on blockchain development, and we have been working on this hackathon to bring a solution for blockchain and defi integration to the real world. We are a small team of four people, based in Cordoba, Argentina.
	
	The problem that we were caught in was that making payments with cryptos is kind of a struggle nowadays, specially in Argentina and South America. Our main goal in this hackathon is to create a payment gateway to facilitate both users and service providers the use of crypto in their everyday life. Our way to solve this problem is creating a simple smart contract that when you scan a qr code it transfers an amount of a selected token from one wallet to another. It seems that this is already solved by only using the qr code that your wallet provides you, but we want to add different features to make this a great experience. We want the service provider to be able to put the amount that he wants to receive in any FIAT or Cryptocurrency, and by using the chainlink external adapter our dApp is going to calculate in real time the change for the price of the market to the cryptocurrency that the user or customer wanted to pay. Now we would have a payment gateway that accepts any crypto and automatically tells you the exact amount that the user needs to pay in order to use whatever crypto he wants. But the advantage is that the user won't need to enter the amount, the dApp is going to automatically fill the amount and the address of the transaction in your crypto wallet, all of this by simply scanning a qr code. The end goal is that the user only needs to confirm the transaction, nothing else.

Where are we? Well we have been working hard on this, we already made the smart contract that interacts with both wallets and now we are finishing a simple front end where the service provider can enter the amount that he need to be payed. After we finish making the front end and we let the rest of the api working, we are going to start working on integrating the chainlink oracle to bring data of the real time prices of the cryptocurrencies.

We think that this is a remarkable idea to make crypto adoption easy-peasy for those who have shops, small companies, gas stations, and any other services that want to add crypto as a payment method. All of us think that especially in Argentina and South America, where our catastrophic economies and currencies make our life hard, this tool is going to lead the way for our financial freedom, and will help to change this exhausting situation.


# Bugs and solutions:

There might be a problem with the project dependency tree. When doing `npm install`, sometime the package install the node_modules folder on the home directory and on the project directory, for this you should delete the node_modelues folder from the home directory and the project directore, after on the project dir run an `npm install` again. After that try running `npm star` again.
time. This command will remove the single build dependency from your project.
