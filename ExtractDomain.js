// & Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 

function parseURL(url) {
    const parseUrl = new URL(url);

    const hostname = parseUrl.hostname;
    const domainPart = hostname.split('.');
    // console.log(domainPart);

    if (domainPart.length > 2) {
        return domainPart[1];
    } else {
        return hostname;
    }
}

let url = "https://www.freepik.com/";
let domain = parseURL(url)
console.log(domain);


