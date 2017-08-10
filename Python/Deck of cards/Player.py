class Player(object):
    def __init__ (self, playerNo):
        self.name = "Player {}".format(playerNo)
        self.cards = {}

    def play (self):
        print "\n---------\nYour hand contains:"
        listHand = []
        for key in self.cards:
            suit = self.cards[key].suit
            value = self.cards[key].value
            listHand.append[self.cards[key]]
            print "{}) {} of {}".format(len(listHand), value, suit)
        which = input("\nWhich value do you want to check for?")
        return self.cards[listHand[which]].value
    
    def draw (self, card):
        keyName = str(card.value) + str(card.suit)
        self.cards[keyName] = card
        return self

    def ask (self, val):
        returnVal = []
        for key in self.cards:
            if cards[key].value == val:
                returnVal.append(self.cards[key])
        if len(returnVal) == 0 : returnVal = False
        return returnVal