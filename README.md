**adFinder**

This utility implements a script that finds ads based on common ad sizes on a website.

The information about ad sizes and position are displayed in the console and stored in Firebase.

The Firebase data from previous runs of the script can be accessed [here](https://adfinder-eba7a.firebaseio.com/ads.json)

The code can be used as a bookmarklet by creating a bookmark to a link with the code in [bookmarkletedAdFinder.js](./bookmarkletedAdFinder.js)

Alternatively you can build the bookmarklet by using ([this utility](http://chriszarate.github.io/bookmarkleter/), however that is not compatible with arrow functions, so if you're going to use that utility please use the code in [bookmarkletCompatible.js](./bookmarkletCompatible.js)