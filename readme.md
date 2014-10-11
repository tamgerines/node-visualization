## Node Visualization

a ring view of nodes in a cluster positioned according to their tokens ranging from 0-2^127

<img src="https://dl.dropboxusercontent.com/u/9814535/node-visualization.png">

Each node in a cluster is assigned a single token. Tokens are integers ranging from 0-2^127. The ring visualization renders each node as a circle on the ring, positioning nodes by their tokens in order to determine if a cluster is balanced or not. Token 0 is located at the top of the ring. Tokens increase clockwise (Token 2^126 is located at the bottom of the ring, 2^127 is located directly to the left of token 0, etc.). Clicking a node logs its token.

Tokens are specified as strings because numbers in JavaScript start to lose precision as they get very big.