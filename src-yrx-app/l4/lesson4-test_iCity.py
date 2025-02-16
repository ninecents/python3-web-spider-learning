import hashlib
import time



str = 'IMEI867979020991839-IMSI460NNNNNNNNNNNN&&1629812392&&f1190aca-d08e-4041-8666-29931cd89dde'
sig = ''

instance = hashlib.md5()
instance.update(bytearray(str.encode('utf8')))
digest = instance.digest()
for i in digest:
    sig = sig + format((i>>4)&15, 'x') + format(i&15, 'x')

print('sig:'+sig)

for i in bytearray(str.encode('utf8')):
    print(i)

m = hashlib.md5()
m.update(bytearray(str.encode('utf8')))
print(m.digest())

str_cons = ''
for i in bytearray(m.digest()):
    print('i:',i)
    #print((i>>4) & 15)
    str_cons = str_cons + format(((i>>4) &15), 'x') + format(i & 15, 'x')

print(str_cons)
print(m.digest().hex())
