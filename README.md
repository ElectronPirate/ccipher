# ccipher v1.0.0

Caesar Cipher (command line interface) with Node.js


INSTALLATION: 
-------------

npm install

START:
------

npm start

NOTES:        
------

*Future version will include 'decrypt' option by implementing below function:

function decrypt(text,shift){
    var result = "";
    shift = (26 - shift) % 26;
    result = encrypt(text,shift);
    return result;
}   

*Added bin section in package.json and ran 'npm link' to execute this script anywhere 

"bin": {
    "creator": "./index.js"
  }
           

  
  
  
  
  
