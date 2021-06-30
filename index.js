
/* # Date in javaScript -->
JavaScript Date objects represent a single moment in time in a platform-independent format.
Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.


Date()
When called as a function, returns a string representation of the current date 
and time, exactly as new Date().toString() does.

new Date()
When called as a constructor, returns a new Date object. 
*/


setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrottation = 30 * htime + mtime / 2;
    mrottation = 6 * mtime;
    srottation = 6 * stime;

    hour.style.transform = `rotate(${hrottation}deg)`;
    minute.style.transform = `rotate(${mrottation}deg)`;
    second.style.transform = `rotate(${srottation}deg)`;
}, 1000);

