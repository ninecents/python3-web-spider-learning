import base64
from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_v1_5 as Cipher_pkcs1_v1_5
import rsa
#import test_assistant

# public_key = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCfeke6QsD7GSeu3r+S0fghY4S93CQwq7GQSwx/mf+7bCL0XPweIFKAKYtZ6hXqRxmjmDJbZSl4imWVYZM3dNCbf4kDcthvlhEzR/Jcr/yHi5W1tL+yqBdnnAfcGkMT9tdZl/1sYB+aOMIP4tw07y53zFWtXszz/wCrA/jHopXHNQIDAQAB";

# private_key = "MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAJ96R7pCwPsZJ67ev5LR+CFjhL3cJDCrsZBLDH+Z/7tsIvRc/B4gUoApi1nqFepHGaOYMltlKXiKZZVhkzd00Jt/iQNy2G+WETNH8lyv/IeLlbW0v7KoF2ecB9waQxP211mX/WxgH5o4wg/i3DTvLnfMVa1ezPP/AKsD+Meilcc1AgMBAAECgYBhuG4HRiw2MN3OG5PMBXlEDFUkeaZ7ZFmzjykjb1vynnp0vh2G4EttWQeYmwW+vr6JLhN9SWm2ASfp9xZcXuoLxAPitW+tVDL6oqaBvDfnvt8sOKn8YrMRQSziT3Kc9bOII8hnoA+0gDCMcuH+NRvdbz9lkaH4/14IsyrT6fSkaQJBAOtMqquZCsrsfvI2jgOtIDFrmE4OM4DegDdBwL8oj+fQdBstFKhdJQnuf3ej3mbku7IAU3XoFYb4RyOH49v+lrcCQQCtgfsPXrBwG+bgd8kYzJR0mfXg2KgqGC0Ek7K0aK5pNvnxPXU0asZfj8UuMo4z+WVVoG26lxrePXQmfZGZbYVzAkEAzoBeWHLb0fN0BcZzJC7QTg8Lf5VfBf4/sD74lctXYC7FdwQ9WPVGCE1TeQBLsymSwEkg9h1UpztF05zzEKOCSQJARhmTw3vwMPs05k+/EaPl/s4NRxCBsLAf0A+UTctVW/D4Pn0kE09oYkeF1MpcJaeHR3cPnilak5ukh8CHyMM0/QJAJ81Ao1NbGRZdgsV7Qzz4B3WS9BANIcGyryyfah/qnevlh9dyVkxxFPAe4BRaeK4qpC28toGtMqGdcwc4arEa4w==";

# text = 'qqpassword=iloveyou&salt=3103305672'
# # rsa_key = RSA.importKey(base64.b64decode(public_key.encode()))
# # cipher = Cipher_pkcs1_v1_5.new(rsa_key)
# # encrypt_data = cipher.encrypt(text.encode(encoding='utf-8'))
# # cipher_text = base64.b64encode(encrypt_data)
# # print('cipher_text is %s' % cipher_text)

# # pub_key = test_assistant.decode_pub_key(public_key)
# # rsakey = RSA.importKey(pub_key)
# # cipher = Cipher_pkcs1_v1_5.new(rsakey)
# # encrypt_data = cipher.encrypt(text.encode())
# # cipher_text = test_assistant.encode_rsa(encrypt_data)
# # print('cipher_text is %s' % cipher_text)

# # a = 'ilove'
# # print(test_assistant.encode_rsa(a.encode()))
# # print(base64.b64encode(a.encode()))
# cipher_text = "GAvW0UxkHVoGqz8Q7XQuaZTh54qrBm8i4OOThV78TozDSlEfflqZn56vJelR6M+lL+2LpcccKiKbxgUM3tc+Q4vOi4RxRvRe7YKWJYHUbKyhBQ2u8k7tbWM+3TWnhNsFgtQ93VdGhjfXhWm+YqavbdZREIFmAbVGOe/KGThjKes="
# encrypt_data = base64.b64decode(cipher_text)
# rsa_key = RSA.importKey(base64.b64decode(private_key.encode()))
# cipher = Cipher_pkcs1_v1_5.new(rsa_key)
# plaintext = cipher.decrypt(encrypt_data, None).decode(encoding='utf-8')
# print('plaintext is %s' % plaintext)

key = RSA.generate(1024)

pubkey = key.publickey().export_key()
with open("a.pem", "wb") as x:
     x.write(pubkey)
print('pub key:',pubkey)
print('pub len:',len(pubkey))

privkey = key.export_key()
print('private:',privkey)
print('private len:',len(privkey))


rsa_key = RSA.importKey(pubkey)
print('n:',rsa_key.n)
print('e:',rsa_key.e)

cipher = Cipher_pkcs1_v1_5.new(rsa_key)
text='hellosdosdhellosdhellosdhellosdhellosdhellosdhellosdhellosdhellosdhellosdhellosdhellosdhellosdhellosdhellos3333391'
cipher_text = cipher.encrypt(text.encode())
print(cipher_text)
print(len(cipher_text))
print('encrypt len:',len(cipher_text))

rsa_key = RSA.importKey(privkey)
print('d:',rsa_key.d)
cipher = Cipher_pkcs1_v1_5.new(rsa_key)
plaintext = cipher.decrypt(cipher_text, None).decode(encoding='utf-8')
print(plaintext)


print(base64.b64decode('MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCyocCEr5nLmkE5+0tMVvggXTsg\n9d5K2smNlzRqhPfWfk+gu2NTXIdO0j7MpvDmoSFrFaHI1VXbRC4O6Br+wQDZ1RSB\ntU0vAk9C5yiBKB5jzRr8uG5sMWQpKUwmmHForY3Le9YDzeJOLoNQRj2kqtOwYfnE\nLAFB7PJ4zDrDbYQjfwIDAQAB'))

# import Crypto.PublicKey.RSA
# import Crypto.Random
 
# x = Crypto.PublicKey.RSA.generate(2048)
# # 生成私钥
# a = x.exportKey("PEM")  
# # 生成公钥
# b = x.publickey().exportKey()   
# with open("a.pem", "wb") as x:
#     x.write(a)
# with open("b.pem", "wb") as x:
#     x.write(b)

# # 使用 Crypto.Random.new().read 伪随机数生成器
# y = Crypto.PublicKey.RSA.generate(2048, Crypto.Random.new().read)   
# # 生成私钥
# c = y.exportKey()   
# #生成公钥
# d = y.publickey().exportKey()   
# with open("c.pem", "wb") as x:
#     x.write(c)
# with open("d.pem", "wb") as x:
#     x.write(d)


