#Phizercost Cryptochain

#Full blockchain in OOP style following a test driven approach

#Block linking through crypto hash generated using crypto util

#Block validation

#Block mining by meeting difficulty requirement(a certain number of leading 0)

#Dynamic difficulty level adjustment 

#51% attack prevention through proof of work

#Chain validation involving 2 checks: Validation of the chain and the last hash of the chain

#Chain replacement with the longest valid chain available

#Blockchain interactability through API (Get blocks, Mine block, conduct transaction, transaction broadcast)

#Publisher subscriber paradigm for passing messages between servers using pubsub and keeping blockchain peers addresses

#Wallet has keypair generation(public and private keys) feature and keeps the balance

#Transaction object with input(Signature from the sender) and outputmap(any values conducted in the transaction:recipient, values and sender balance)

#Transaction miner: gets valid transaction from the pool, does the reward, adds block to the blockchain, broadcasts the new chain and clears the pool.

#Blockchain transaction data validation:No duplicate miner rewards in the block, check input and output transactions, check miner reward value, no duplicate transaction in a block

#Reactjs front end: Visualize transactions, transaction pool, conduct a transaction, mine transaction

##Installation
npm i

##Running the main node
npm run dev

##Running the peer
npm run dev-peer

##Graphical user interface
http://localhost:3000

