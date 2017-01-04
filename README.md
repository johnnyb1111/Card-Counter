# The Counter
A web utility that will assist the Blackjack card counting process. For entertainment purposes only.

![Demo Screenshot](http://i.imgur.com/NC1ZmF6.png)

## How to use
1. Select the number of decks remaining.
2. Click/Tap the value of each card dealt.

### Definitions
* **Running Count:** The count derived by adding or subtracting every card that you see in each shoe
  * 2-6 = +1
  * 7-9 = 0
  * 10-Ace = -1 
* **True Count:** The value of the running count divided by the amount of decks remaining
* **Bet Amount:** The value of your bet based on the True Count.
  * This has been set to follow the following (can be changed to your liking):
    * True count < 2 = Bet 1x
    * True count >= 2 and < 4 = Bet 2x
    * True count >= 4 and < 6 = Bet 3x
    * True count >= 6 and < 8 = Bet 4x
    * True count >= 8 = Bet 5x
