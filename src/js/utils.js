export function cleanTitle(str) {	
  str = str.replace("_", " ");				
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function checkFileExist(urlToFile) {
  var xhr = new XMLHttpRequest();
  xhr.open('HEAD', urlToFile, false);
  xhr.send();
  return xhr.status == "200";
}