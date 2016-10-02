This utility implements a script that finds ads based on common ad sizes on a website.

The information about ad sizes and position are displayed in the console and stored in Firebase.

The Firebase data from previous runs of the script can be accessed [here](https://adfinder-eba7a.firebaseio.com/ads.json)

The code can be used as a bookmarklet by dragging [adFinder](javascript:void function()%7Bfunction t(t)%7Breturn h.some(function(i)%7Breturn String(i.width)%3D%3D%3Dt.width%26%26String(i.height)%3D%3D%3Dt.height%7D)%7Dfunction i(t)%7Bconst i%3D%7Blocation:window.location.href,advertisements:t%7D,h%3D"https://adfinder-eba7a.firebaseio.com/ads/"%2BDate()%2B".json",e%3Dnew XMLHttpRequest%3Be.open("PUT",h,!0),e.setRequestHeader("Content-Type","application/json%3B charset%3DUTF-8"),e.send(JSON.stringify(i)),console.log(i)%7Dconst h%3D%5B%7Bwidth:300,height:250%7D,%7Bwidth:320,height:260%7D,%7Bwidth:300,height:600%7D,%7Bwidth:120,height:60%7D,%7Bwidth:970,height:90%7D,%7Bwidth:88,height:31%7D,%7Bwidth:180,height:150%7D,%7Bwidth:160,height:600%7D,%7Bwidth:728,height:90%7D,%7Bwidth:550,height:480%7D,%7Bwidth:970,height:250%7D,%7Bwidth:250,height:250%7D,%7Bwidth:240,height:400%7D,%7Bwidth:336,height:280%7D,%7Bwidth:300,height:100%7D,%7Bwidth:720,height:300%7D,%7Bwidth:468,height:60%7D,%7Bwidth:234,height:60%7D,%7Bwidth:120,height:90%7D,%7Bwidth:125,height:125%7D,%7Bwidth:120,height:600%7D%5D,e%3DArray.prototype.slice.call(document.querySelectorAll("iframe")).filter(function(i)%7Breturn"hidden"!%3D%3Di.style.visibility%26%26"none"!%3D%3Di.style.display%26%26t(i)%7D).map(function(t)%7Bconst i%3Dt.getBoundingClientRect(),h%3D%7Bwidth:Number(t.width),height:Number(t.height),position:%7Bx:i.left,y:i.top%7D%7D%3Breturn h%7D)%3Bi(e)%7D()%3B) to your bookmarks bar.