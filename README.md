# gcipher
gcipher is a Javascript widget to encrypt/decrypt emails in Gmail using 
the symmetric Blowfish cipher. The cipher itself is implemented by 
[Daniel Rench](https://github.com/drench).

To use it, drag the button to your bookmarks. After writing an email in 
the Gmail web interface, click the bookmarked button to encrypt your 
email before sending. gcipher will ask you for a password.

To decrypt, simply open up an email from Gmail, and click the bookmarked 
button again, which will prompt you for the password for decryption.

gcipher currently only works for the Gmail web interface. This is more 
of an experimental hack for me so I do not plan to expand it to other 
clients.

## Is it really secure?
You use gcipher because you want your email to be _stored_ securely on 
Google's servers. Gmail already uses secure connection so it already 
prevents eavesdropping. 

There are a couple shortcomings to gcipher's approach. For instance, 
Gmail automatically saves your email to draft before you send it, and 
possibly before you encrypted it. I hope to address this in a future 
update.
